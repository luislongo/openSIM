import { Socket } from "../sockets/socket";

export type UnknownDependencyNode = DependencyNode<any, any, Socket<any, any>>;
export type UnknownInputNode<O> = DependencyNode<any, O, Socket<any, any>>;

export class DependencyNode<I, O, S extends Socket<I, O>> {
  value: () => O;
  from: S;
  to: UnknownDependencyNode[];

  constructor(from: S) {
    this.from = from;
    this.to = [];

    this.value = from.post;
    from.dependencies.forEach((dependency) => dependency.to.push(this));
  }
}
