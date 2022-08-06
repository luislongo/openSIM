import { Vec2Socket } from "../sockets/vec2Socket";
import { DependencyNode } from "./dependencyNode.class";

export interface Vec2 {
  x: number;
  y: number;
}

export class ToVec2Node extends DependencyNode<Vec2, Vec2, Vec2Socket> {
  constructor(from: Vec2Socket) {
    super(from, (v2) => v2);
  }
}
