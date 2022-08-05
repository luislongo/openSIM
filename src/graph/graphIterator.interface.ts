import { GraphNode } from "./graphNode.class";

export interface GraphIterator<T> {
  next(): GraphNode<T> | undefined;
}
