import { DependencyNode } from "../../src/graph/dependencyNode.class";

describe("DependencyNodeNode behaviour", () => {
  it("Should not add unrelated nodes", () => {
    const nodeA = new DependencyNode(1);
    const nodeA_A = new DependencyNode(2);
    const nodeA_B = new DependencyNode(3);
    const nodeA_A_A = new DependencyNode(4);
    const nodeA_A_B = new DependencyNode(5);
    const nodeA_B_A = new DependencyNode(6);

    nodeA.addChild(nodeA_A);
    nodeA.addChild(nodeA_B);
    nodeA_A.addChild(nodeA_A_A);
    nodeA_A.addChild(nodeA_A_B);
    nodeA_B.addChild(nodeA_B_A);

    nodeA.set(2);

    expect(nodeA.value.current).toBe(2);
    expect(nodeA_A.value.current).toBe(4);
    expect(nodeA_B.value.current).toBe(4);
    expect(nodeA_A_A.value.current).toBe(8);
    expect(nodeA_A_B.value.current).toBe(8);
    expect(nodeA_B_A.value.current).toBe(8);
  });
});
