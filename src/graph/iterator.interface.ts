import { GraphNode } from "./graphNode.class";

export interface GraphIterator {
  next(): GraphNode | undefined;
}
