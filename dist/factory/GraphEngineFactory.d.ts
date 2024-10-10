import { BaseGraph } from "../abstractions/base/BaseGraph";
import { IGraphEngineFactory } from "../abstractions/IGraphEngineFactory";
export declare class GraphEngineFactory<T extends BaseGraph> implements IGraphEngineFactory {
    private GraphType;
    private GraphTag;
    private Request;
    constructor(GraphType: new (GraphTag: HTMLElement) => T, GraphTag: HTMLElement, Request: any);
    Create(option: any): BaseGraph;
}
