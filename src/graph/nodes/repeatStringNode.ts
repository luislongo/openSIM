import { Socket } from "../sockets/socket";
import { DependencyNode, OutputNode } from "./dependencyNode";
import { NumberNode, StringNode } from "./entryNode";

export type RepeatStringSocketType = {
  text: OutputNode<string>;
  count: OutputNode<number>;
};

export type RepeatStringSocketValue = {
  text: string;
  count: number;
};

export class RepeatStringNode extends DependencyNode<
  RepeatStringSocketType,
  RepeatStringSocketValue,
  string
> {
  constructor(textNode: OutputNode<string>, countNode: OutputNode<number>) {
    super(
      new Socket<RepeatStringSocketType, RepeatStringSocketValue>(
        { text: textNode, count: countNode },
        (dependencies) => ({
          text: dependencies.text.value || "",
          count: dependencies.count.value || 0,
        })
      ),
      (value) => {
        let result = "";
        for (let i = 0; i < value.count; i++) {
          result += value.text;
        }
        return result;
      }
    );
  }
}
