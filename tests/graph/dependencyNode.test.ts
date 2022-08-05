import { NumberNode } from "../../src/graph/nodes/numberNode";
import { ToVec2Node, Vec2Socket } from "../../src/graph/nodes/toVec2Node";

describe("DependencyNode behaviour", () => {
  it("Should couple diferent types correctly", () => {
    const x = new NumberNode(2);
    const y = new NumberNode(3);
    const v2 = new ToVec2Node(new Vec2Socket(x, y));

    console.log(v2.value());
  });
});
