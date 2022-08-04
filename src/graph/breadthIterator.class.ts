import { GraphNode } from "./graphNode.class";
import { GraphIterator } from "./iterator.interface";

export class BreadthIterator implements GraphIterator {
  current: GraphNode | undefined;
  queue: GraphNode[];

  constructor(root: GraphNode) {
    this.queue = BreadthIterator.bfs(root, [root]);
    this.current = this.queue.shift();
  }

  static bfs = (node: GraphNode, partial: GraphNode[]): GraphNode[] => {
    partial.push(...node.to);
    node.to.forEach((child) => {
      BreadthIterator.bfs(child, partial);
    });

    return partial;
  };

  next = (): GraphNode | undefined => {
    const node = this.current;
    this.current = this.queue.shift();

    return node;
  };
}
