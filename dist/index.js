// server.ts
import express from "express";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import { z } from "zod";
import { promises as fs } from "fs";
// Create an MCP server
const server = new McpServer({
    name: "web-content-extractor",
    version: "1.0.0"
});
// Tool: extract-url using Readability + jsdom
server.tool("get-props", { componentName: z.string() }, async ({ componentName }) => {
    console.log(`getting props for: ${componentName}`);
    try {
        const propsContent = await readPropsFile();
        return {
            content: [{ type: "text", text: propsContent }]
        };
    }
    catch (err) {
        console.error("Extraction failed:", err.message || err);
        return {
            content: [{ type: "text", text: `Failed to extract content: ${err.message}` }]
        };
    }
});
const readPropsFile = async () => {
    const propsContent = await fs.readFile("../assets/props.json", "utf8");
    return propsContent;
};
// Express + SSE setup
const app = express();
const transports = {};
app.get("/sse", async (req, res) => {
    const transport = new SSEServerTransport("/messages", res);
    transports[transport.sessionId] = transport;
    console.log("SSE session started:", transport.sessionId);
    res.on("close", () => {
        console.log("SSE session closed:", transport.sessionId);
        delete transports[transport.sessionId];
    });
    await server.connect(transport);
});
app.post("/messages", async (req, res) => {
    const sessionId = req.query.sessionId;
    const transport = transports[sessionId];
    if (transport) {
        await transport.handlePostMessage(req, res);
    }
    else {
        res.status(400).send("No transport found for sessionId");
    }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`MCP Server running on port ${PORT}`);
});
