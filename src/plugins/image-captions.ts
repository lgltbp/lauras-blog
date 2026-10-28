import { defineHastPlugin } from "satteri";

export default defineHastPlugin({
  name: "image-captions",
  element: {
    filter: ["img"],
    visit(node) {
      if (!node.properties.title) return;

      return {
        type: "element",
        tagName: "figure",
        properties: {},
        children: [
          node,
          {
            type: "element",
            tagName: "figcaption",
            properties: {},
            children: [{ type: "text", value: String(node.properties.title) }],
          },
        ],
      };
    },
  },
});
