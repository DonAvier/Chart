import { BaseGraph } from "../abstractions/base/BaseGraph";
export declare class ChartJsGraph extends BaseGraph {
    private chart;
    constructor(GraphTag: HTMLCanvasElement);
    data: {
        year: number;
        count: number;
    }[];
    Dispose(): void;
    Render(): void;
    Update(): void;
}
