import { Chart, ChartItem, ChartConfiguration } from "chart.js/auto";
import { BaseGraph } from "../abstractions/base/BaseGraph";

export class ChartJsGraph extends BaseGraph {
  private chart: ChartItem | undefined;

  constructor(GraphTag: HTMLCanvasElement) {
    super(GraphTag);
  }

  data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  Dispose(): void {
    super.Dispose();
  }

  Render(): void {
    this.chart = new Chart(this.GraphTag, {
      type: "line",
      data: {
        labels: this.data.map((row) => row.year),
        datasets: [
          {
            label: "Acquisitions by year",
            data: this.data.map((row) => row.count),
          },
        ],
      },
    });
  }

  Update(): void {
    throw new Error("Method not implemented.");
  }
}
