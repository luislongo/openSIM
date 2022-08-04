import { DepthIterator } from "../../src/graph/DepthIterator";
import { GraphNode } from "../../src/graph/graphNode.class";

describe("GraphNode behaviour", () => {
  it("Should return children in the right order", () => {
    const nodeA = new GraphNode(1);
    const nodeB = new GraphNode(2);
    const nodeC = new GraphNode(3);
    const nodeD = new GraphNode(4);

    nodeA.addChild(nodeB);
    nodeA.addChild(nodeC);
    nodeB.addChild(nodeD);

    const iterator = new DepthIterator(nodeA);
    expect(iterator.next()?.value).toBe(1);
    expect(iterator.next()?.value).toBe(2);
    expect(iterator.next()?.value).toBe(4);
    expect(iterator.next()?.value).toBe(3);
    expect(iterator.next()?.value).toBe(undefined);
  });

  it("Should not add unrelated nodes", () => {
    const nodeA = new GraphNode(1);
    const nodeA_A = new GraphNode(2);
    const nodeA_B = new GraphNode(3);
    const nodeA_A_A = new GraphNode(4);
    const nodeA_A_B = new GraphNode(5);
    const nodeA_B_A = new GraphNode(6);

    nodeA.addChild(nodeA_A);
    nodeA.addChild(nodeA_B);
    nodeA_A.addChild(nodeA_A_A);
    nodeA_A.addChild(nodeA_A_B);
    nodeA_B.addChild(nodeA_B_A);

    const iterator_A = new DepthIterator(nodeA_A);
    expect(iterator_A.next()?.value).toBe(2);
    expect(iterator_A.next()?.value).toBe(4);
    expect(iterator_A.next()?.value).toBe(5);
    expect(iterator_A.next()?.value).toBe(undefined);

    const iterator_B = new DepthIterator(nodeA_B);
    expect(iterator_B.next()?.value).toBe(3);
    expect(iterator_B.next()?.value).toBe(6);
  });
});
