import { UnknownInputNode } from "../nodes/dependencyNode.class";
import { Socket } from "./socket";

export class RepeatStringSocket extends Socket<string, string> {
  constructor(
    times: UnknownInputNode<number>,
    string: UnknownInputNode<string>
  ) {
    super(string.value().repeat(times.value()), [times, string]);
  }
}
