import { RepeatStringSocket } from "../sockets/repeatStringSocket";
import { Vec2Socket } from "../sockets/vec2Socket";
import { DependencyNode } from "./dependencyNode.class";

export interface Vec2 {
  x: number;
  y: number;
}

export class RepeatStringNode extends DependencyNode<
  string,
  string,
  RepeatStringSocket
> {
  constructor(from: RepeatStringSocket) {
    super(from, (v2) => v2);
  }
}
