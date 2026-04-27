import { visit } from "unist-util-visit";
import type { Root, Element } from "hast";

export default function rehypeImageCaptions() {
  return (tree: Root) => {
    visit(tree, "element", (node: Element, index, parent) => {
      if (
        node.tagName !== "img" ||
        !node.properties?.title ||
        index === undefined ||
        !parent
      )
        return;

      const figure: Element = {
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

      parent.children.splice(index, 1, figure);
    });
  };
}
