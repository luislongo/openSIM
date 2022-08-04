import { GraphNode } from "./graphNode.class";
import { GraphIterator } from "./iterator.interface";

export class DepthIterator implements GraphIterator {
  current: GraphNode | undefined;
  stack: GraphNode[];

  constructor(root: GraphNode) {
    this.stack = DepthIterator.dfs(root, []);
    this.current = this.stack.shift();
  }

  static dfs = (node: GraphNode, partial: GraphNode[]): GraphNode[] => {
    partial.push(node);
    node.to.forEach((child) => {
      DepthIterator.dfs(child, partial);
    });

    return partial;
  };

  next = (): GraphNode | undefined => {
    const node = this.current;
    this.current = this.stack.shift();

    return node;
  };
}
