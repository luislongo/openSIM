import { DependencyNode } from "./dependencyNode.class";
import { Socket } from "../sockets/socket";

export class CapSocket<T> extends Socket<T, T> {
  constructor(value: T) {
    super(value, (value) => value, []);
  }
}

export class NumberNode extends DependencyNode<
  number,
  number,
  CapSocket<number>
> {
  constructor(number: number) {
    super(new CapSocket(number));
  }
}
