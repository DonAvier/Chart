var GraphEngineFactory = /** @class */ (function () {
    function GraphEngineFactory(GraphType, GraphTag, Request) {
        this.GraphType = GraphType;
        this.GraphTag = GraphTag;
        this.Request = Request;
    }
    GraphEngineFactory.prototype.Create = function (option) {
        var Graph = new this.GraphType(this.GraphTag);
        return Graph;
    };
    return GraphEngineFactory;
}());
export { GraphEngineFactory };
