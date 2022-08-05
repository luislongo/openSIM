export interface Dependency {
  current: number;
  pipe: (input: number) => number;
}
