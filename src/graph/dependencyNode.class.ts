import { BreadthIterator } from "./breadthIterator.class";
import { Dependency } from "./dependency.interface";
import { GraphNode } from "./graphNode.class";

export class DependencyNode<T> extends GraphNode<Dependency<T>> {
  constructor(dependecy: Dependency<T>) {
    super(dependecy);
  }

  set(value: T) {
    this.value.current = value;

    const iterator = new BreadthIterator(this);

    if (iterator.next()) {
      while (true) {
        const node = iterator.next();
        if (!node) {
          break;
        }

        // This line is where calculations happen
        // Note that only one input is taken into account for now
        node.value.current = node.value.pipe(node.from[0].value.current);
      }
    }
  }
}
