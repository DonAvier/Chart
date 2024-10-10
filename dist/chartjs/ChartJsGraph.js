var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Chart } from "chart.js/auto";
import { BaseGraph } from "../abstractions/base/BaseGraph";
var ChartJsGraph = /** @class */ (function (_super) {
    __extends(ChartJsGraph, _super);
    function ChartJsGraph(GraphTag) {
        var _this = _super.call(this, GraphTag) || this;
        _this.data = [
            { year: 2010, count: 10 },
            { year: 2011, count: 20 },
            { year: 2012, count: 15 },
            { year: 2013, count: 25 },
            { year: 2014, count: 22 },
            { year: 2015, count: 30 },
            { year: 2016, count: 28 },
        ];
        return _this;
    }
    ChartJsGraph.prototype.Dispose = function () {
        _super.prototype.Dispose.call(this);
    };
    ChartJsGraph.prototype.Render = function () {
        this.chart = new Chart(this.GraphTag, {
            type: "line",
            data: {
                labels: this.data.map(function (row) { return row.year; }),
                datasets: [
                    {
                        label: "Acquisitions by year",
                        data: this.data.map(function (row) { return row.count; }),
                    },
                ],
            },
        });
    };
    ChartJsGraph.prototype.Update = function () {
        throw new Error("Method not implemented.");
    };
    return ChartJsGraph;
}(BaseGraph));
export { ChartJsGraph };
