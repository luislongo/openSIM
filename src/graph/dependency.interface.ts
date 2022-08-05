export interface Dependency<T> {
  current: T;
  pipe: (input: T) => T;
}
