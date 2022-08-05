import { DependencyNode } from "src/graph/dependencyNode.class";

describe("DependencyNode behaviour", () => {
  it("should update children nodes", () => {
    const nodeA = new DependencyNode(1);
    const nodeB = new DependencyNode(2);
    const nodeC = new DependencyNode(3);
    const nodeD = new DependencyNode(4);

    nodeA.addChild(nodeB);
    nodeA.addChild(nodeC);
    nodeB.addChild(nodeD);

    nodeA.set(5);
    expect(nodeB.value.current).toBe(10);
    expect(nodeC.value.current).toBe(10);
    expect(nodeD.value.current).toBe(10);
  });
});
