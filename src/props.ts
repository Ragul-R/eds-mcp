export const props = [
  {
    "title": "Button",
    "parentDocLink": "button",
    "props": [
      {
        "name": "iconStart",
        "type": "(props: IconProps) => React.ReactNode",
        "default": "undefined",
        "description": "The icon to display before the button's children."
      },
      {
        "name": "iconEnd",
        "type": "(props: IconProps) => React.ReactNode",
        "default": "undefined",
        "description": "The icon to display after the button's children."
      },
      {
        "name": "isDisabled",
        "type": "boolean",
        "default": "false",
        "description": "When true, the button will be announced as disabled to screen-readers only."
      },
      {
        "name": "isLoading",
        "type": "boolean",
        "default": "false",
        "description": "When true, the button will display a loading indicator."
      },
      {
        "name": "isPressed",
        "type": "boolean",
        "default": "false",
        "description": "When true, the button will have aria-pressed set and be styled visually pressed."
      },
      {
        "name": "loadingLabel",
        "type": "string",
        "default": "undefined",
        "description": "Text to read out to assistive technologies when button is loading."
      },
      {
        "name": "size",
        "type": "'large' | 'standard' | 'small'",
        "default": "'standard'",
        "description": "The size of the button."
      },
      {
        "name": "variant",
        "type": "'accentPrimary' | 'accentSecondary' | 'criticalPrimary' | 'criticalTertiary' | 'neutralPrimary' | 'neutralSecondary' | 'neutralSecondaryIntense' | 'neutralTertiary'",
        "default": "'neutralPrimary'",
        "description": "The variant of the button."
      },
      {
        "name": "aria-controls",
        "type": "string",
        "default": "undefined",
        "description": "Identifies the element (or elements) whose contents or presence are controlled by the button."
      },
      {
        "name": "aria-expanded",
        "type": "boolean",
        "default": "undefined",
        "description": "Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed."
      },
      {
        "name": "aria-haspopup",
        "type": "boolean | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'",
        "default": "undefined",
        "description": "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button."
      },
      {
        "name": "children",
        "type": "React.ReactNode",
        "default": "undefined",
        "description": "The content of the button."
      },
      {
        "name": "form",
        "type": "string",
        "default": "undefined",
        "description": "Associates the button with a form element."
      },
      {
        "name": "id",
        "type": "string",
        "default": "undefined",
        "description": "The id of the button element."
      },
      {
        "name": "onBlur",
        "type": "(event: React.FocusEvent<HTMLButtonElement>) => void",
        "default": "undefined",
        "description": "Handler for blur events."
      },
      {
        "name": "onClick",
        "type": "(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void",
        "default": "undefined",
        "description": "Handler for click events."
      },
      {
        "name": "onFocus",
        "type": "(event: React.FocusEvent<HTMLButtonElement>) => void",
        "default": "undefined",
        "description": "Handler for focus events."
      },
      {
        "name": "onKeyDown",
        "type": "(event: React.KeyboardEvent<HTMLButtonElement>) => void",
        "default": "undefined",
        "description": "Handler for key down events."
      },
      {
        "name": "type",
        "type": "'button' | 'submit' | 'reset'",
        "default": "'button'",
        "description": "The type of the button."
      }
    ]
  },
  {
    "title": "Checkbox",
    "parentDocLink": "checkbox",
    "props": [
      {
        "name": "indeterminate",
        "type": "boolean",
        "default": "undefined",
        "description": "Whether checkbox in an indeterminate state or not. Designed for scenarios like header groups where some, but not all, options are selected."
      },
      {
        "name": "isDisabled",
        "type": "boolean",
        "default": "false",
        "description": "When true, the checkbox will be announced as disabled to screen-readers and styled to signify this."
      },
      {
        "name": "size",
        "type": "'standard' | 'large'",
        "default": "'standard'",
        "description": "The size of the checkbox."
      },
      {
        "name": "value",
        "type": "string",
        "default": "undefined",
        "description": "The value of the checkbox."
      },
      {
        "name": "description",
        "type": "React.ReactNode",
        "default": "undefined",
        "description": "Description of the checkbox."
      },
      {
        "name": "errorMessage",
        "type": "React.ReactNode",
        "default": "undefined",
        "description": "Message to show when the field is invalid."
      },
      {
        "name": "label",
        "type": "React.ReactNode",
        "default": "undefined",
        "description": "Label for the checkbox."
      }
    ]
  },
  {
    "title": "Radio",
    "parentDocLink": "radio",
    "props": [
      {
        "name": "isDisabled",
        "type": "boolean",
        "default": "false",
        "description": "When true, the radio will be announced as disabled to screen-readers and styled to signify this."
      },
      {
        "name": "size",
        "type": "'standard' | 'large'",
        "default": "'standard'",
        "description": "The size of the radio."
      },
      {
        "name": "value",
        "type": "string",
        "default": "undefined",
        "description": "The value of the radio."
      },
      {
        "name": "description",
        "type": "React.ReactNode",
        "default": "undefined",
        "description": "Description of the radio."
      },
      {
        "name": "label",
        "type": "React.ReactNode",
        "default": "undefined",
        "description": "Label for the radio."
      }
    ]
  },
  {
    "title": "Root",
    "parentDocLink": "root",
    "props": [
      {
        "name": "brand",
        "type": "{ tokens: Tokens; config: BrandStyles; }",
        "default": "undefined",
        "description": "Brand tokens and config."
      },
      {
        "name": "colorScheme",
        "type": "'system' | 'light' | 'dark'",
        "default": "undefined",
        "description": "Color scheme."
      },
      {
        "name": "translations",
        "type": "Translations",
        "default": "undefined",
        "description": "Translations object."
      },
      {
        "name": "shouldAttachPortalsToBody",
        "type": "boolean",
        "default": "false",
        "description": "Whether to create a portal to the body element."
      }
    ]
  },
  {
    "title": "TextInput",
    "parentDocLink": "text-input",
    "props": [
      {
        "name": "focusContainerRef",
        "type": "React.Ref<HTMLDivElement>",
        "default": "undefined",
        "description": "The ref to the wrapper FocusContainer element."
      },
      {
        "name": "type",
        "type": "'email' | 'password' | 'search' | 'tel' | 'text' | 'url'",
        "default": "'text'",
        "description": "The type of the input."
      },
      {
        "name": "adornmentStart",
        "type": "React.ReactNode",
        "default": "undefined",
        "description": "Slot to render start adornment."
      },
      {
        "name": "adornmentEnd",
        "type": "React.ReactNode",
        "default": "undefined",
        "description": "Slot to render end adornment."
      }
    ]
  },
  {
    "title": "FocusContainer",
    "parentDocLink": "focus-container",
    "props": [
      {
        "name": "adornmentEnd",
        "type": "React.ReactNode",
        "default": "undefined",
        "description": "Slot to render end adornment."
      },
      {
        "name": "adornmentStart",
        "type": "React.ReactNode",
        "default": "undefined",
        "description": "Slot to render start adornment."
      },
      {
        "name": "children",
        "type": "(args: { ref: React.MutableRefObject<any> }) => React.ReactNode",
        "default": "undefined",
        "description": "Slot to render the control that pseudo focus ring is applied to."
      },
      {
        "name": "isDisabled",
        "type": "boolean",
        "default": "false",
        "description": "Whether the field is disabled."
      },
      {
        "name": "isGhost",
        "type": "boolean",
        "default": "false",
        "description": "If true, the focus container will not have a border."
      },
      {
        "name": "isInvalid",
        "type": "boolean",
        "default": "false",
        "description": "If true, the invalid state will be rendered."
      }
    ]
  },
  {
    "title": "Textarea",
    "parentDocLink": "textarea",
    "props": [
      {
        "name": "children",
        "type": "React.ReactNode",
        "default": "undefined",
        "description": "The content of the textarea."
      }
    ]
  },
  {
    "title": "Label",
    "parentDocLink": "label",
    "props": [
      {
        "name": "children",
        "type": "React.ReactNode",
        "default": "undefined",
        "description": "Label for the field."
      },
      {
        "name": "labelVisibility",
        "type": "'hidden' | 'visible'",
        "default": "'visible'",
        "description": "A label must always be provided for assistive technology, but you may hide it from sighted users when the intent can be inferred from context."
      },
      {
        "name": "secondaryLabel",
        "type": "React.ReactNode",
        "default": "undefined",
        "description": "Additional context, typically used to indicate that the field is optional."
      },
      {
        "name": "size",
        "type": "'standard' | 'large'",
        "default": "'standard'",
        "description": "The size of the field."
      }
    ]
  },
  {
    "title": "Field",
    "parentDocLink": "field",
    "props": [
      {
        "name": "children",
        "type": "React.ReactNode",
        "default": "undefined",
        "description": "Input component."
      },
      {
        "name": "description",
        "type": "React.ReactNode",
        "default": "undefined",
        "description": "Provide additional information that will aid user input."
      },
      {
        "name": "errorMessage",
        "type": "React.ReactNode",
        "default": "undefined",
        "description": "Message to show when the field is invalid."
      },
      {
        "name": "controlId",
        "type": "string",
        "default": "undefined",
        "description": "Specifies the unique identifier for the form control within the component."
      },
      {
        "name": "isDisabled",
        "type": "boolean",
        "default": "false",
        "description": "Whether the field is disabled."
      },
      {
        "name": "isRequired",
        "type": "boolean",
        "default": "false",
        "description": "Whether user input is required on the field before form submission."
      },
      {
        "name": "label",
        "type": "React.ReactNode",
        "default": "undefined",
        "description": "Label for the field."
      },
      {
        "name": "counter",
        "type": "CounterObjProps",
        "default": "undefined",
        "description": "Counter object containing maxValue, value and isAlwaysVisible."
      }
    ]
  },
  {
    "title": "Box",
    "parentDocLink": "box",
    "props": [
      {
        "name": "children",
        "type": "React.ReactNode",
        "default": "undefined",
        "description": "The content of the component."
      }
    ]
  },
  {
    "title": "Avatar",
    "parentDocLink": "avatar",
    "props": [
      {
        "name": "children",
        "type": "React.ReactNode",
        "default": "undefined",
        "description": "Children elements to be rendered inside the Avatar component."
      },
      {
        "name": "imageSrc",
        "type": "string",
        "default": "undefined",
        "description": "Source URL for the avatar image. (deprecated)"
      },
      {
        "name": "name",
        "type": "string",
        "default": "undefined",
        "description": "Used as the alt text for the image and constructs the initial."
      },
      {
        "name": "size",
        "type": "'16' | '20' | '24' | '32' | '40' | '48' | '64' | '96'",
        "default": "undefined",
        "description": "The size of the avatar."
      },
      {
        "name": "status",
        "type": "'audioCall' | 'available' | 'away' | 'busy' | 'customer' | 'offline' | 'onCall'",
        "default": "undefined",
        "description": "The status of the avatar."
      },
      {
        "name": "isGuest",
        "type": "boolean",
        "default": "false",
        "description": "Indicates if the avatar represents a guest."
      }
    ]
  },
  {
    "title": "Chip",
    "parentDocLink": "chip",
    "props": [
      {
        "name": "aria-controls",
        "type": "string",
        "default": "undefined",
        "description": "Identifies the element (or elements) whose contents or presence are controlled by the chip."
      },
      {
        "name": "aria-expanded",
        "type": "boolean",
        "default": "undefined",
        "description": "Indicates whether the chip, or another grouping element it controls, is currently expanded or collapsed."
      },
      {
        "name": "aria-haspopup",
        "type": "boolean | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'",
        "default": "undefined",
        "description": "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the chip."
      },
      {
        "name": "children",
        "type": "React.ReactNode",
        "default": "undefined",
        "description": "The content of the chip."
      },
      {
        "name": "id",
        "type": "string",
        "default": "undefined",
        "description": "The id of the chip element."
      },
      {
        "name": "isPressed",
        "type": "boolean",
        "default": "false",
        "description": "When true, the chip will have aria-pressed set and be styled visually pressed."
      },
      {
        "name": "onClick",
        "type": "(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void",
        "default": "undefined",
        "description": "Handler for click events."
      },
      {
        "name": "size",
        "type": "'large' | 'standard' | 'small'",
        "default": "'standard'",
        "description": "The size of the chip."
      }
    ]
  },
  {
    "title": "ButtonLink",
    "parentDocLink": "button-link",
    "props": [
      {
        "name": "href",
        "type": "string",
        "default": "undefined",
        "description": "The URL that the hyperlink points to."
      },
      {
        "name": "iconStart",
        "type": "(props: IconProps) => React.ReactNode",
        "default": "undefined",
        "description": "The icon to display before the buttons children."
      },
      {
        "name": "iconEnd",
        "type": "(props: IconProps) => React.ReactNode",
        "default": "undefined",
        "description": "The icon to display after the buttons children."
      },
      {
        "name": "size",
        "type": "'standard' | 'small' | 'large'",
        "default": "'standard'",
        "description": "The size of the link."
      },
      {
        "name": "variant",
        "type": "'accentPrimary' | 'accentSecondary' | 'neutralPrimary' | 'neutralSecondary' | 'neutralSecondaryIntense' | 'neutralTertiary'",
        "default": "'neutralPrimary'",
        "description": "The variant of the link."
      }
    ]
  },
  {
    "title": "IconButton",
    "parentDocLink": "icon-button",
    "props": [
      {
        "name": "aria-label",
        "type": "string",
        "default": "undefined",
        "description": "An aria-label is required to describe the component to assistive tech users."
      },
      {
        "name": "icon",
        "type": "(props: IconProps) => React.ReactNode",
        "default": "undefined",
        "description": "The icon to display inside the icon button."
      },
      {
        "name": "isDisabled",
        "type": "boolean",
        "default": "false",
        "description": "When true, the icon button will be announced as disabled to screen-readers only."
      },
      {
        "name": "isLoading",
        "type": "boolean",
        "default": "false",
        "description": "When true, the icon button will display a loading indicator."
      },
      {
        "name": "isPressed",
        "type": "boolean",
        "default": "false",
        "description": "When true, the icon button will have aria-pressed set and be styled visually pressed."
      },
      {
        "name": "loadingLabel",
        "type": "string",
        "default": "undefined",
        "description": "Text to read out to assistive technologies when icon button is loading."
      },
      {
        "name": "size",
        "type": "'large' | 'standard' | 'small'",
        "default": "'standard'",
        "description": "The size of the button."
      },
      {
        "name": "variant",
        "type": "'accentPrimary' | 'accentSecondary' | 'criticalPrimary' | 'criticalTertiary' | 'neutralPrimary' | 'neutralSecondary' | 'neutralSecondaryIntense' | 'neutralTertiary'",
        "default": "'neutralPrimary'",
        "description": "The variant of the button."
      }
    ]
  },
  {
    "title": "Icon",
    "parentDocLink": "icon",
    "props": [
      {
        "name": "size",
        "type": "'16' | '20' | '24' | '32' | '40'",
        "default": "'24'",
        "description": "The size of the icon."
      },
      {
        "name": "tone",
        "type": "'accentPrimary' | 'criticalPrimary' | 'neutralPrimary' | 'neutralSecondary' | 'neutralTertiary'",
        "default": "undefined",
        "description": "The tone of the icon."
      }
    ]
  },
  {
    "title": "Heading",
    "parentDocLink": "heading",
    "props": [
      {
        "name": "typography",
        "type": "'heading.1' | 'heading.2' | 'heading.3' | 'heading.4' | 'heading.5' | 'heading.6'",
        "default": "undefined",
        "description": "The typographic styles of the text."
      },
      {
        "name": "as",
        "type": "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",
        "default": "undefined",
        "description": "Heading element to render."
      },
      {
        "name": "children",
        "type": "React.ReactNode",
        "default": "undefined",
        "description": "The content of the component."
      }
    ]
  },
  {
    "title": "Text",
    "parentDocLink": "text",
    "props": [
      {
        "name": "children",
        "type": "React.ReactNode",
        "default": "undefined",
        "description": "The content of the component."
      },
      {
        "name": "fontWeight",
        "type": "keyof GlobalTokens['typography']['fontWeight']",
        "default": "undefined",
        "description": "The weight of the text."
      },
      {
        "name": "lineClamp",
        "type": "'1' | '2' | '3' | '4' | true",
        "default": "undefined",
        "description": "Clamp the text to a specific number of lines."
      },
      {
        "name": "tabularNumbers",
        "type": "boolean",
        "default": "undefined",
        "description": "When enabled, numbers will be the same width. Similar to a monospaced font."
      },
      {
        "name": "textAlign",
        "type": "'start' | 'center' | 'end'",
        "default": "undefined",
        "description": "The horizontal alignment."
      },
      {
        "name": "textTransform",
        "type": "'capitalize' | 'lowercase' | 'none' | 'uppercase'",
        "default": "undefined",
        "description": "Transform the text casing."
      },
      {
        "name": "tone",
        "type": "keyof ColorSchemeTokens['text']",
        "default": "undefined",
        "description": "The color of the text."
      },
      {
        "name": "typography",
        "type": "'body.1' | 'body.2' | 'body.3' | 'body.4' | 'body.5' | 'body.6' | 'heading.1' | 'heading.2' | 'heading.3' | 'heading.4' | 'heading.5' | 'heading.6'",
        "default": "undefined",
        "description": "The typographic styles of the text."
      }
    ]
  },
  {
    "title": "Spacer",
    "parentDocLink": "spacer",
    "props": []
  }
]
