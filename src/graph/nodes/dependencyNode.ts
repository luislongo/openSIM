import { Pipe } from "../pipes/pipe";
import { GenericSocketMap, Socket } from "../sockets/socket";

export type OutputNode<O> = DependencyNode<any, any, O>;

export class DependencyNode<S extends GenericSocketMap, I, O> {
  public input: Socket<S, I>;
  public pipe: Pipe<I, O>;
  public value: O | undefined;

  constructor(input: Socket<S, I>, pipe: Pipe<I, O>) {
    this.input = input;
    this.pipe = pipe;

    this.value = this.pipe(this.input.accessor(this.input.dependencies));
  }
}
