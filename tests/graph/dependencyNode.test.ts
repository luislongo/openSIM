import { ToVec2Node } from "../../src/graph/nodes/toVec2Node";
import { NumberNode, StringNode } from "../../src/graph/nodes/entryNode";
import { PowerNode } from "../../src/graph/nodes/powerNode";
import { RepeatStringNode } from "../../src/graph/nodes/repeatStringNode";

describe("DependencyNode behaviour", () => {
  it("Should couple diferent types correctly", () => {
    const nodeX = new NumberNode(5);
    const nodeY = new NumberNode(10);

    const nodeV = new ToVec2Node(nodeX, nodeY);
  });

  it("Should couple diferent types correctly", () => {
    const nodeX = new NumberNode(5);
    const nodeY = new NumberNode(10);

    const nodeV = new PowerNode(nodeX, nodeY);
  });

  it("Should allow for component", () => {
    const textNode = new StringNode("Hello");
    const countNode = new NumberNode(5);

    const repeatStringNode = new RepeatStringNode(textNode, countNode);
    const repeatStringNode2 = new RepeatStringNode(repeatStringNode, countNode);
  });

  it("Should allow for component", () => {
    const textNode = new StringNode("Hello");
    const countNode = new NumberNode(5);
    const exp = new NumberNode(2);

    const repeatString = new RepeatStringNode(
      textNode,
      new PowerNode(countNode, exp)
    );
  });
});
