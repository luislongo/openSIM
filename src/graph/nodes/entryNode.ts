import { Socket } from "../sockets/socket";
import { DependencyNode } from "./dependencyNode";

export type EmptySocketMap = {};

export class EntryNode<T> extends DependencyNode<EmptySocketMap, null, T> {
  constructor(value: T) {
    super(new Socket<EmptySocketMap, null>([], () => null), () => value);
  }
}
export class NumberNode extends EntryNode<number> {
  constructor(value: number) {
    super(value);
  }
}
export class StringNode extends EntryNode<string> {
  constructor(value: string) {
    super(value);
  }
}
