import { DependencyNode } from "./dependencyNode.class";
import { CapSocket } from "./numberNode";

export class CapNode<T> extends DependencyNode<T, T, CapSocket<T>> {
  constructor(value: T) {
    super(new CapSocket(value));
  }
}
