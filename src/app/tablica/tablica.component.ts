import { Component } from "@angular/core";
import { EChartOption } from "echarts";

@Component({
  selector: "app-tablica",
  templateUrl: "./tablica.component.html",
  styleUrls: ["./tablica.component.css"]
})
export class TablicaComponent {
  chartOption: EChartOption = {
    grid:{
      show:true
    },
    xAxis: {
      type: "category",
      data: [
        "120",
        "160",
        "180",
        "210",
        "250",
        "300",
        "360",
        "450",
        "490",
        "800"
      ]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: [7.0, 6.5, 6.0, 5.5, 5.0, 4.5, 4.0, 3.5, 3.0, 2.5],
        type: "line"
      }
    ]
  };

}
