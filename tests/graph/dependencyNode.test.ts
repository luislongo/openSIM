import { DependencyNode } from "../../src/graph/dependencyNode.class";

describe("DependencyNodeNode behaviour", () => {
  it("Should not add unrelated nodes", () => {
    const nodeA = new DependencyNode({
      current: 1,
      pipe: (input: number) => input,
    });
    const nodeA_A = new DependencyNode({
      current: 1,
      pipe: (input: number) => input + 1,
    });
    const nodeA_B = new DependencyNode({
      current: 1,
      pipe: (input: number) => input + 2,
    });
    const nodeA_A_A = new DependencyNode({
      current: 1,
      pipe: (input: number) => input + 3,
    });
    const nodeA_A_B = new DependencyNode({
      current: 1,
      pipe: (input: number) => input + 4,
    });
    const nodeA_B_A = new DependencyNode({
      current: 1,
      pipe: (input: number) => input + 5,
    });

    nodeA.addChild(nodeA_A);
    nodeA.addChild(nodeA_B);
    nodeA_A.addChild(nodeA_A_A);
    nodeA_A.addChild(nodeA_A_B);
    nodeA_B.addChild(nodeA_B_A);

    nodeA.set(2);

    expect(nodeA.value.current).toBe(2);
    expect(nodeA_A.value.current).toBe(3);
    expect(nodeA_B.value.current).toBe(4);
    expect(nodeA_A_A.value.current).toBe(6);
    expect(nodeA_A_B.value.current).toBe(7);
    expect(nodeA_B_A.value.current).toBe(9);
  });

  it("should work on different types of data", () => {
    const nodeA = new DependencyNode({
      current: "A",
      pipe: (input: string) => input,
    });
    const nodeA_A = new DependencyNode({
      current: "A",
      pipe: (input: string) => input + "_A",
    });
    const nodeA_B = new DependencyNode({
      current: "B",
      pipe: (input: string) => input + "_B",
    });
    const nodeA_A_A = new DependencyNode({
      current: "A",
      pipe: (input: string) => input + "_A",
    });
    const nodeA_A_B = new DependencyNode({
      current: "B",
      pipe: (input: string) => input + "_B",
    });
    const nodeA_B_A = new DependencyNode({
      current: "A",
      pipe: (input: string) => input + "_A",
    });

    nodeA.addChild(nodeA_A);
    nodeA.addChild(nodeA_B);
    nodeA_A.addChild(nodeA_A_A);
    nodeA_A.addChild(nodeA_A_B);
    nodeA_B.addChild(nodeA_B_A);

    nodeA.set("C");

    expect(nodeA.value.current).toBe("C");
    expect(nodeA_A.value.current).toBe("C_A");
    expect(nodeA_B.value.current).toBe("C_B");
    expect(nodeA_A_A.value.current).toBe("C_A_A");
    expect(nodeA_A_B.value.current).toBe("C_A_B");
    expect(nodeA_B_A.value.current).toBe("C_B_A");
  });
});
