// server.ts
import express from "express";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import { z } from "zod";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

// These two lines are needed in ES modules to get __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create an MCP server
const server = new McpServer({
  name: "eds-mcp",
  version: "1.0.0"
});

// Tool: extract-url using Readability + jsdom
server.tool(
  "get-props",
  { componentName: z.string() },
  async ({ componentName }) => {
    console.log(`getting props for: ${componentName}`);
    try {
      const propsPath = path.resolve(__dirname, "../assets/props.json");
      const propsContent = await fs.readFile(propsPath, "utf8");
      return {
        content: [{ type: "text", text: propsContent }]
      };
    } catch (err: any) {
      console.error("Extraction failed:", err.message || err);
      return {
        content: [{ type: "text", text: `Failed to extract content: ${err.message}` }]
      };
    }
  }
);

const readPropsFile = async () => {
  const propsContent = await fs.readFile("../assets/props.json", "utf8");
  return propsContent;
};

// Express + SSE setup
const app = express();
const transports: { [sessionId: string]: SSEServerTransport } = {};

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
  const sessionId = req.query.sessionId as string;
  const transport = transports[sessionId];

  if (transport) {
    await transport.handlePostMessage(req, res);
  } else {
    res.status(400).send("No transport found for sessionId");
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`MCP Server running on port ${PORT}`);
});