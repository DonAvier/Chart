import { IGraph } from "../IGraph";
export declare abstract class BaseGraph implements IGraph {
    protected GraphTag: HTMLCanvasElement;
    constructor(GraphTag: HTMLCanvasElement);
    Dispose(): void;
    abstract Render(): void;
    abstract Update(): void;
}
