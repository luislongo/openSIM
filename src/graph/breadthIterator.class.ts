import { GraphNode } from "./graphNode.class";
import { GraphIterator } from "./graphIterator.interface";

export class BreadthIterator<T> implements GraphIterator<T> {
  current: GraphNode<T> | undefined;
  queue: GraphNode<T>[];

  constructor(root: GraphNode<T>) {
    this.queue = BreadthIterator.bfs(root, [root]);
    this.current = this.queue.shift();
  }

  static bfs = <T>(
    node: GraphNode<T>,
    partial: GraphNode<T>[]
  ): GraphNode<T>[] => {
    partial.push(...node.to);
    node.to.forEach((child) => {
      BreadthIterator.bfs(child, partial);
    });

    return partial;
  };

  next = (): GraphNode<T> | undefined => {
    const node = this.current;
    this.current = this.queue.shift();

    return node;
  };
}
