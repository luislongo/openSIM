import { Socket } from "../sockets/socket";

export type Pipe<I, O> = (input: I) => O;
