import { UnknownDependencyNode } from "../nodes/dependencyNode.class";
import { Pipe } from "../pipes/pipe";

export class Socket<I, O> {
  dependencies: UnknownDependencyNode[];
  raw: () => I;
  post: () => O;
  pipe: Pipe<I, O>;

  constructor(
    value: I,
    pipe: Pipe<I, O>,
    dependencies?: UnknownDependencyNode[]
  ) {
    this.dependencies = dependencies || [];
    this.raw = () => value;
    this.pipe = pipe;
    this.post = () => this.pipe(this.raw());
  }
}
