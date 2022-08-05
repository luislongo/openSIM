import { GraphNode } from "./graphNode.class";
import { GraphIterator } from "./graphIterator.interface";

export class DepthIterator<T> implements GraphIterator<T> {
  current: GraphNode<T> | undefined;
  stack: GraphNode<T>[];

  constructor(root: GraphNode<T>) {
    this.stack = DepthIterator.dfs(root, []);
    this.current = this.stack.shift();
  }

  static dfs = <T>(
    node: GraphNode<T>,
    partial: GraphNode<T>[]
  ): GraphNode<T>[] => {
    partial.push(node);
    node.to.forEach((child) => {
      DepthIterator.dfs(child, partial);
    });

    return partial;
  };

  next = (): GraphNode<T> | undefined => {
    const node = this.current;
    this.current = this.stack.shift();

    return node;
  };
}
