import type { Options } from "rehype-pretty-code";

export const rehypePrettyCodeOptions = {
  theme: {
    light: "github-light", //laserwave, rosepine moon
    dark: "red",
  },
  keepBackground: false,
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and allow empty
    // lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
} satisfies Options;
