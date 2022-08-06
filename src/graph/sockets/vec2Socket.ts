import { UnknownInputNode } from "../nodes/dependencyNode.class";
import { Vec2 } from "../nodes/toVec2Node";
import { Socket } from "./socket";

export class Vec2Socket extends Socket<Vec2, Vec2> {
  constructor(
    xNode: UnknownInputNode<number>,
    yNode: UnknownInputNode<number>
  ) {
    super({ x: xNode.value(), y: yNode.value() }, [xNode, yNode]);
  }
}
