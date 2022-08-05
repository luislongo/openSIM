import { v4 as uuidv4 } from "uuid";

export class GraphNode<T> {
  uuid: string;
  from: GraphNode<T>[];
  to: GraphNode<T>[];
  value: T;

  constructor(value: T) {
    this.uuid = uuidv4();
    this.from = [];
    this.to = [];
    this.value = value;
  }

  addChild(child: GraphNode<T>) {
    this.to.push(child);
    child.from.push(this);
  }

  removeChild(child) {
    this.to = this.to.filter((c) => c.value !== child.value);
    child.from = child.from.filter((c) => c.value !== this.value);
  }
}
