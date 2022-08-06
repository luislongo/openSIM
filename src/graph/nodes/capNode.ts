import { CapSocket } from "../sockets/capSocket";
import { DependencyNode } from "./dependencyNode.class";

export class CapNode<T> extends DependencyNode<T, T, CapSocket<T>> {
  constructor(value: T) {
    super(new CapSocket(value), (value) => value);
  }
}
export class NumberNode extends CapNode<number> {
  constructor(number: number) {
    super(number);
  }
}
export class StringNode extends CapNode<string> {
  constructor(string: string) {
    super(string);
  }
}
export class BooleanNode extends CapNode<boolean> {
  constructor(boolean: boolean) {
    super(boolean);
  }
}
