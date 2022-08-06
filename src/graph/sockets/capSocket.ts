import { Socket } from "./socket";

export class CapSocket<T> extends Socket<T, T> {
  constructor(value: T) {
    super(value, []);
  }
}
