import { BaseGraph } from "../abstractions/base/BaseGraph";
import { IGraphEngineFactory } from "../abstractions/IGraphEngineFactory";

export class GraphEngineFactory<T extends BaseGraph>
  implements IGraphEngineFactory
{
  constructor(
    private GraphType: new (GraphTag: HTMLElement) => T,
    private GraphTag: HTMLElement,
    private Request: any
  ) {}

  Create(option: any): BaseGraph {
    const Graph = new this.GraphType(this.GraphTag);
    return Graph;
  }
}
