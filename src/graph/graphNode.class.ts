import { v4 as uuidv4 } from "uuid";

export class GraphNode {
  uuid: string;
  from: GraphNode[];
  to: GraphNode[];
  value: number;
  dfs: any;

  constructor(value) {
    this.uuid = uuidv4();
    this.from = [];
    this.to = [];
    this.value = value;
  }

  addChild(child: GraphNode) {
    this.to.push(child);
    child.from.push(this);
  }
  removeChild(child) {
    this.to = this.to.filter((c) => c.value !== child.value);
    child.from = child.from.filter((c) => c.value !== this.value);
  }
}
