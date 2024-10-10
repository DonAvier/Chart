var BaseGraph = /** @class */ (function () {
    function BaseGraph(GraphTag) {
        this.GraphTag = GraphTag;
    }
    BaseGraph.prototype.Dispose = function () {
        console.log("Graph is disposed");
    };
    return BaseGraph;
}());
export { BaseGraph };
