import { Socket } from "../sockets/socket";
import { DependencyNode } from "./dependencyNode";
import { NumberNode } from "./entryNode";

export type ToVec2SocketMap = {
  x: NumberNode;
  y: NumberNode;
};

export type Vec2 = {
  x: number;
  y: number;
};

export class ToVec2Node extends DependencyNode<ToVec2SocketMap, Vec2, Vec2> {
  constructor(xNode: NumberNode, yNode: NumberNode) {
    super(
      new Socket<ToVec2SocketMap, Vec2>(
        { x: xNode, y: yNode },
        (dependencies) => ({ x: xNode.value || 0, y: yNode.value || 0 })
      ),
      (v2) => v2
    );
  }
}
