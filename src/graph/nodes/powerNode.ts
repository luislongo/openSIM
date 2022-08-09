import { Socket } from "../sockets/socket";
import { DependencyNode } from "./dependencyNode";
import { NumberNode } from "./entryNode";

export type PowerNodeSocketMap = {
  number: NumberNode;
  power: NumberNode;
};

export type PowerSocketValue = {
  number: number;
  power: number;
};

export class PowerNode extends DependencyNode<
  PowerNodeSocketMap,
  PowerSocketValue,
  number
> {
  constructor(numberNode: NumberNode, powerNode: NumberNode) {
    super(
      new Socket<PowerNodeSocketMap, PowerSocketValue>(
        { number: numberNode, power: powerNode },
        (dependencies) => ({
          number: dependencies.number.value || 1,
          power: dependencies.power.value || 1,
        })
      ),
      (value) => Math.pow(value.number, value.power)
    );
  }
}
