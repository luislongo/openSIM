import { Socket } from "../sockets/socket";
import { DependencyNode, UnknownInputNode } from "./dependencyNode.class";

export interface Vec2 {
  x: number;
  y: number;
}

export class Vec2Socket extends Socket<Vec2, Vec2> {
  constructor(
    xNode: UnknownInputNode<number>,
    yNode: UnknownInputNode<number>
  ) {
    super(
      { x: xNode.value(), y: yNode.value() },
      (v2) => ({ x: 2 * v2.x, y: 3 * v2.y }),
      [xNode, yNode]
    );
  }
}

export class ToVec2Node extends DependencyNode<Vec2, Vec2, Vec2Socket> {
  constructor(from: Vec2Socket) {
    super(from);
  }
}
