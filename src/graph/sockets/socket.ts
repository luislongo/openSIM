import { UnknownDependencyNode } from "../nodes/dependencyNode.class";
import { Pipe } from "../pipes/pipe";

export class Socket<I, O> {
  dependencies: UnknownDependencyNode[];
  raw: () => I;

  constructor(value: I, dependencies?: UnknownDependencyNode[]) {
    this.dependencies = dependencies || [];
    this.raw = () => value;
  }
}
