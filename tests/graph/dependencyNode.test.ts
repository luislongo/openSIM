import { ToVec2Node } from "../../src/graph/nodes/toVec2Node";
import { NumberNode, StringNode } from "../../src/graph/nodes/capNode";
import { Vec2Socket } from "../../src/graph/sockets/vec2Socket";
import { RepeatStringSocket } from "../../src/graph/sockets/repeatStringSocket";
import { RepeatStringNode } from "../../src/graph/nodes/repeatStringNode";

describe("DependencyNode behaviour", () => {
  it("Should couple diferent types correctly", () => {
    const x = new NumberNode(2);
    const y = new NumberNode(3);
    const v2 = new ToVec2Node(new Vec2Socket(x, y));

    console.log(v2.value());
  });

  it("Should couple diferent types correctly", () => {
    const x = new NumberNode(25);
    const y = new StringNode("A3");
    const v2 = new RepeatStringNode(new RepeatStringSocket(x, y));

    console.log(v2.value());
  });
});
