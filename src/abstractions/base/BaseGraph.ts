import { IGraph } from "../IGraph";

export abstract class BaseGraph implements IGraph {
  constructor(protected GraphTag: HTMLCanvasElement) {}

  Dispose(): void {
    console.log("Graph is disposed");
  }

  abstract Render(): void;
  abstract Update(): void;
}
