import { OutputNode } from "../nodes/dependencyNode";

export type GenericSocketMap = { [key: string]: OutputNode<any> };
export type GenericSocket<T> = Socket<GenericSocketMap, T>;

export class Socket<S extends GenericSocketMap, T> {
  dependencies: S;
  accessor: (dependencies: S) => T;

  constructor(dependencies: S, accessor: (dependencies: S) => T) {
    this.dependencies = dependencies;
    this.accessor = accessor;
  }
}
