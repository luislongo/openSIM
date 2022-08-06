import { Pipe } from "../pipes/pipe";
import { Socket } from "../sockets/socket";

export type UnknownDependencyNode = DependencyNode<any, any, Socket<any, any>>;
export type UnknownInputNode<O> = DependencyNode<any, O, Socket<any, any>>;

export class DependencyNode<I, O, S extends Socket<I, O>> {
  value: () => O;
  from: S;
  to: UnknownDependencyNode[];
  pipe: Pipe<I, O>;

  constructor(from: S, pipe: Pipe<I, O>) {
    this.from = from;
    this.to = [];
    this.pipe = pipe;

    this.value = () => this.pipe(from.raw());
    from.dependencies.forEach((dependency) => dependency.to.push(this));
  }
}
