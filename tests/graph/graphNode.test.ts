import { GraphNode } from "../../src/graph/graphNode.class";

describe("GraphNode behaviour", () => {
  it("Add child should work properly", () => {
    const node = new GraphNode(1);
    const child = new GraphNode(2);

    node.addChild(child);
    expect(node.to[0]).toBe(child);
    expect(child.from[0]).toBe(node);
  });

  it("Remove child should work properly", () => {
    const node = new GraphNode(1);
    const child = new GraphNode(2);

    node.addChild(child);
    node.removeChild(child);

    expect(node.to.length).toBe(0);
    expect(child.from.length).toBe(0);
  });

  it("Node traversy should be possible", () => {
    const nodeA = new GraphNode(1);
    const nodeB = new GraphNode(2);
    const nodeC = new GraphNode(3);

    nodeA.addChild(nodeB);
    nodeB.addChild(nodeC);
    nodeC.addChild(nodeA);

    expect(nodeA.to[0]).toBe(nodeB);
    expect(nodeA.to[0].to[0]).toBe(nodeC);
    expect(nodeA.to[0].to[0].to[0]).toBe(nodeA);

    expect(nodeA.from[0]).toBe(nodeC);
    expect(nodeA.from[0].from[0]).toBe(nodeB);
    expect(nodeA.from[0].from[0].from[0]).toBe(nodeA);
  });
});
