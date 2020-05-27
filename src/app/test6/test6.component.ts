import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";

//#region

const TEXT = `

<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>
    Alignment PI Station Report
  </title>
</head><body>
  <h1 align="center">
    Alignment PI Station Report
  </h1><table border="0" width="100%">
    <tr>
      <td align="left"><b>Client:</b></td><td align="left"><b>Prepared by:</b></td>
    </tr><tr>
      <td align="left">Client</td><td align="left">Preparer</td>
    </tr><tr>
      <td align="left">Client Company</td><td align="left">Your Company Name</td>
    </tr><tr>
      <td align="left">Address 1</td><td align="left">123 Main Street</td>
    </tr>
  </table>Date: 4.5.2020 г. 13:02:50
  <hr />Alignment Name: Axis_I-8
  <br />Description: 
  <br />Station Range: Start: 144+942.72, End: 146+142.91
  <br /><br /><table border="1" width="100%">
    <tr>
      <td align="left"><b>PI Station</b></td><td align="left"><b>Northing</b></td><td align="left"><b>Easting</b></td><td align="left"><b>Distance</b></td><td align="left"><b>Direction</b></td>
    </tr><tr>
      <td align="left">144+942.72</td><td align="left">4,559,865.855m</td><td align="left">8,543,345.041m</td><td align="left">&nbsp</td><td align="left">&nbsp</td>
    </tr><tr>
      <td align="left">&nbsp</td><td align="left">&nbsp</td><td align="left">&nbsp</td><td align="left">92.218m</td><td align="left">S50° 27' 39.55"E</td>
    </tr><tr>
      <td align="left">145+034.94</td><td align="left">4,559,807.149m</td><td align="left">8,543,416.159m</td><td align="left">&nbsp</td><td align="left">&nbsp</td>
    </tr><tr>
      <td align="left">&nbsp</td><td align="left">&nbsp</td><td align="left">&nbsp</td><td align="left">51.426m</td><td align="left">S54° 20' 26.15"E</td>
    </tr><tr>
      <td align="left">145+086.35</td><td align="left">4,559,777.170m</td><td align="left">8,543,457.942m</td><td align="left">&nbsp</td><td align="left">&nbsp</td>
    </tr><tr>
      <td align="left">&nbsp</td><td align="left">&nbsp</td><td align="left">&nbsp</td><td align="left">3.571m</td><td align="left">S26° 32' 19.78"W</td>
    </tr><tr>
      <td align="left">145+087.05</td><td align="left">4,559,773.975m</td><td align="left">8,543,456.347m</td><td align="left">&nbsp</td><td align="left">&nbsp</td>
    </tr><tr>
      <td align="left">&nbsp</td><td align="left">&nbsp</td><td align="left">&nbsp</td><td align="left">52.111m</td><td align="left">S76° 27' 40.90"E</td>
    </tr><tr>
      <td align="left">145+137.10</td><td align="left">4,559,761.775m</td><td align="left">8,543,507.010m</td><td align="left">&nbsp</td><td align="left">&nbsp</td>
    </tr><tr>
      <td align="left">&nbsp</td><td align="left">&nbsp</td><td align="left">&nbsp</td><td align="left">51.171m</td><td align="left">S76° 27' 40.90"E</td>
    </tr><tr>
      <td align="left">145+188.26</td><td align="left">4,559,749.796m</td><td align="left">8,543,556.759m</td><td align="left">&nbsp</td><td align="left">&nbsp</td>
    </tr><tr>
      <td align="left">&nbsp</td><td align="left">&nbsp</td><td align="left">&nbsp</td><td align="left">195.263m</td><td align="left">S72° 53' 33.96"E</td>
    </tr><tr>
      <td align="left">145+383.51</td><td align="left">4,559,692.358m</td><td align="left">8,543,743.383m</td><td align="left">&nbsp</td><td align="left">&nbsp</td>
    </tr><tr>
      <td align="left">&nbsp</td><td align="left">&nbsp</td><td align="left">&nbsp</td><td align="left">14.272m</td><td align="left">N45° 09' 15.64"E</td>
    </tr><tr>
      <td align="left">145+390.63</td><td align="left">4,559,702.422m</td><td align="left">8,543,753.502m</td><td align="left">&nbsp</td><td align="left">&nbsp</td>
    </tr><tr>
      <td align="left">&nbsp</td><td align="left">&nbsp</td><td align="left">&nbsp</td><td align="left">202.366m</td><td align="left">S13° 13' 47.82"E</td>
    </tr><tr>
      <td align="left">145+549.37</td><td align="left">4,559,505.427m</td><td align="left">8,543,799.815m</td><td align="left">&nbsp</td><td align="left">&nbsp</td>
    </tr><tr>
      <td align="left">&nbsp</td><td align="left">&nbsp</td><td align="left">&nbsp</td><td align="left">217.773m</td><td align="left">S13° 13' 47.82"E</td>
    </tr><tr>
      <td align="left">145+767.13</td><td align="left">4,559,293.434m</td><td align="left">8,543,849.655m</td><td align="left">&nbsp</td><td align="left">&nbsp</td>
    </tr><tr>
      <td align="left">&nbsp</td><td align="left">&nbsp</td><td align="left">&nbsp</td><td align="left">69.610m</td><td align="left">S16° 42' 12.95"E</td>
    </tr><tr>
      <td align="left">145+836.72</td><td align="left">4,559,226.762m</td><td align="left">8,543,869.662m</td><td align="left">&nbsp</td><td align="left">&nbsp</td>
    </tr><tr>
      <td align="left">&nbsp</td><td align="left">&nbsp</td><td align="left">&nbsp</td><td align="left">62.052m</td><td align="left">S26° 17' 31.37"E</td>
    </tr><tr>
      <td align="left">145+898.55</td><td align="left">4,559,171.129m</td><td align="left">8,543,897.148m</td><td align="left">&nbsp</td><td align="left">&nbsp</td>
    </tr><tr>
      <td align="left">&nbsp</td><td align="left">&nbsp</td><td align="left">&nbsp</td><td align="left">30.072m</td><td align="left">S24° 06' 48.27"W</td>
    </tr><tr>
      <td align="left">145+920.96</td><td align="left">4,559,143.681m</td><td align="left">8,543,884.862m</td><td align="left">&nbsp</td><td align="left">&nbsp</td>
    </tr><tr>
      <td align="left">&nbsp</td><td align="left">&nbsp</td><td align="left">&nbsp</td><td align="left">46.862m</td><td align="left">S61° 02' 17.92"E</td>
    </tr><tr>
      <td align="left">145+956.32</td><td align="left">4,559,120.990m</td><td align="left">8,543,925.863m</td><td align="left">&nbsp</td><td align="left">&nbsp</td>
    </tr><tr>
      <td align="left">&nbsp</td><td align="left">&nbsp</td><td align="left">&nbsp</td><td align="left">77.001m</td><td align="left">S42° 26' 05.69"E</td>
    </tr><tr>
      <td align="left">146+032.97</td><td align="left">4,559,064.160m</td><td align="left">8,543,977.819m</td><td align="left">&nbsp</td><td align="left">&nbsp</td>
    </tr><tr>
      <td align="left">&nbsp</td><td align="left">&nbsp</td><td align="left">&nbsp</td><td align="left">110.046m</td><td align="left">S49° 27' 15.71"E</td>
    </tr><tr>
      <td align="left">146+142.91</td><td align="left">4,558,992.624m</td><td align="left">8,544,061.442m</td><td align="left">&nbsp</td><td align="left">&nbsp</td>
    </tr>
  </table><br />
</body>
</html>

`;

//#endregion

@Component({
  selector: "app-test6",
  templateUrl: "./test6.component.html",
  styleUrls: ["./test6.component.css"]
})
export class Test6Component implements OnInit {
  geometricElements = [];
  piElements = [];
  text;
  constructor() {}
  status: boolean = false;

  delete(i) {
    this.piElements.splice(i, 1);
  }

  ngOnInit(): void {
    let element = document.getElementById("exampleDiv");
    element.className = "example-class";

    this.text = TEXT;
    let piStationReport = new PIstationReport(this.text);
    this.piElements = piStationReport.piElements;
  }

  openFile1(event) {
    let fileList = event.target.files;
    let reader = new FileReader();
    reader.readAsText(fileList[0], "UTF-8");
    reader.onload = () => {
      let stationAndCurve = new StationAndCurveReport(<string>reader.result);
      this.geometricElements = stationAndCurve.geometricElements;
    };
  }

  openFile2(event) {
    let input = event.target;
    for (var index = 0; index < input.files.length; index++) {
      let reader = new FileReader();
      reader.onload = () => {
        this.text = reader.result.toString();
      };
      reader.readAsText(input.files[index], "UTF-8");
    }
  }
}

export class PIstationReport {
  points = [];
  piElements = [];
  titles;
  rows = [];

  constructor(public text: string) {
    this.getTable();
    this.getModelsByTable();
    this.getElements();
    console.log(this.points);
  }

  getTable() {
    let groups = this.text
      .replace(/(?:\r\n|\r|\n)/g, "")
      .match(/<table.*?table>/g);
    let tableText = groups[1];

    // let tableText = TEXT

    //getRows
    let rowsText = [];
    let result = tableText.match(/<tr.*?tr>/g);
    result.forEach(row => rowsText.push(row));

    //getCells
    rowsText.forEach((row, k) => {
      let cells = [];
      let result = row.match(/<td.*?td>|<th.*?th>/g);
      result.forEach(cell => {
        cell = cell
          .replace(
            /<td.*?>|<\/td>|<th.*?>|<\/th>|<b>|<\/b>|<hr.*?>|<u>|<\/u>/g,
            ""
          )
          .trim();
        return cells.push(cell);
      });
      this.rows.push(cells);
    });
  }

  getModelsByTable() {
    let titles = this.rows.splice(0, 1);
    this.titles = {
      station: titles[0],
      x: titles[1],
      y: titles[2],
      distance: titles[3]
    };

    let count = 1;
    for (let i = 0; i < this.rows.length - 1; i += 2) {
      const element1 = this.rows[i];
      const element2 = this.rows[i + 1];
      let station = element1[0];
      let x = element1[2];
      let y = element1[1];
      let distance = element2[3];
      console.log(distance);
      this.points.push(new Point(count, station, x, y, distance));
      count++;
      // console.log(element1)
    }
  }

  getElements() {
    let count = 1;
    for (let i = 0; i < this.points.length - 1; i++) {
      const first = this.points[i];
      const second = this.points[i + 1];

      let piEl = new PIelement(count, first.station, first, second);
      this.piElements.push(piEl);
      count++;
      // console.log(element1)
    }
  }
}

export class PIelement {
  constructor(
    public count,
    public station,
    public startPoint: Point,
    public endPoint: Point
  ) {}
}

export class Point {
  constructor(
    public count,
    public station,
    public x,
    public y,
    public distance
  ) {}
}

export class StationAndCurveReport {
  geometricElements = [];
  rows = [];

  constructor(public text: string) {
    this.getTable();
    this.getModelsByTable();
  }

  getTable() {
    let groups = this.text
      .replace(/(?:\r\n|\r|\n)/g, "")
      .match(/<table.*?table>/g);
    let tableText = groups[1];
    // let tableText = TEXT

    //getRows
    let rowsText = [];
    let result = tableText.match(/<tr.*?tr>/g);
    result.forEach(row => rowsText.push(row));

    //getCells
    rowsText.forEach((row, k) => {
      let cells = [];
      let result = row.match(/<td.*?td>|<th.*?th>/g);
      result.forEach(cell => {
        cell = cell
          .replace(
            /<td.*?>|<\/td>|<th.*?>|<\/th>|<b>|<\/b>|<hr.*?>|<u>|<\/u>/g,
            ""
          )
          .trim();
        return cells.push(cell);
      });
      this.rows.push(cells);
    });
  }

  getBetaDegreetoGradient(deltaDegree: string) {
    let arr = deltaDegree.split(/[\s,&deg;,',"]+/);
    let noEmptyStringArray = _.compact(arr);
    let [degree, minute, second] = [...noEmptyStringArray];
    let deltaGradient = ((+degree + +minute / 60 + +second / 3600) / 180) * 200;
    deltaGradient =
      Math.round((deltaGradient + Number.EPSILON) * 10000) / 10000;
    return 200 - deltaGradient;
  }

  formatStation(input: string): string {
    let station = input.split(/[\+]+/);
    let [first, second] = [...station];
    let newStation = +first * 100 + +second;

    let res = "";
    if (newStation === 0) {
      res = `0+000.00`;
    } else if (newStation < 100) {
      res = `0+0${newStation}`;
    } else if (newStation < 1000) {
      res = `0+${newStation}`;
    } else {
      let one = newStation / 1000;
      let two = Math.round(one);
      let three = (one - two) * 1000;
      three = Math.round((three + Number.EPSILON) * 10000) / 10000;
      res = `${two}+${three}`;
    }
    return res;
  }

  getModelsByTable() {
    let cells = _.concat(this.rows);
    cells = _.flatten(cells);

    let count = 1;

    for (let i = 0; i < cells.length; i++) {
      let element = cells[i];
      if (element === "Tangent Data") {
        let item = cells.splice(i, 22);
        let name = "Права";
        let lenth = item[19];
        let stationStart = this.formatStation(item[6]);
        let start = new PointElement(stationStart, item[7], item[8]);
        let stationEnd = this.formatStation(item[10]);
        let end = new PointElement(stationEnd, item[11], item[12]);
        let tangent = new TangentElement(count, name, lenth, start, end);
        count++;
        i = -1;
        this.geometricElements.push(tangent);
      } else if (element === "Spiral Point Data") {
        let item = cells.splice(i, 46);
        let name = "Пр. крива";
        let lenth = item[23];
        let theta = item[31];
        let A = item[41];
        let stationStart = this.formatStation(item[6]);
        let pointStart = new PointElement(stationStart, item[7], item[8]);
        let stationEnd = this.formatStation(item[14]);
        let pointEnd = new PointElement(stationEnd, item[15], item[16]);
        let spiral = new SpiralElement(
          count,
          name,
          lenth,
          pointStart,
          pointEnd,
          theta,
          A
        );
        count++;
        i = -1;
        this.geometricElements.push(spiral);
      } else if (element === "Curve Point Data") {
        let item = cells.splice(i, 40);

        let name = "Кр. крива";
        let lenth = item[29];
        let radius = item[27];
        let stationStart = this.formatStation(item[6]);
        let pointStart = new PointElement(stationStart, item[7], item[8]);
        let stationEnd = this.formatStation(item[14]);
        let pointEnd = new PointElement(stationEnd, item[15], item[16]);
        let delta = item[23];
        let betaGradient = this.getBetaDegreetoGradient(delta);
        let tangent = item[31];
        let curve = new CircularElement(
          count,
          name,
          lenth,
          radius,
          pointStart,
          pointEnd,
          betaGradient,
          tangent
        );
        count++;
        i = -1;
        this.geometricElements.push(curve);
      }
    }
  }
}

export class PointElement {
  constructor(public station, public x: string, public y: string) {}
}
export class TangentElement {
  constructor(
    public count: number,
    public name: string,
    public length: string,
    public pointStart: PointElement,
    public pointEnd: PointElement
  ) {}
}

export class CircularElement extends TangentElement {
  constructor(
    public count: number,
    public name: string,
    public length: string,
    public radius: string,
    public pointStart: PointElement,
    public pointEnd: PointElement,
    private beta: number,
    public tangent: string
  ) {
    super(count, name, length, pointStart, pointEnd);
  }
}

export class SpiralElement extends TangentElement {
  get theta() {
    let theta = this._theta.replace("&deg;", "°");
    return theta;
  }
  set theta(value) {}
  constructor(
    public count: number,
    public name: string,
    public length: string,
    public pointStart: PointElement,
    public pointEnd: PointElement,
    private _theta: string,
    public A: string
  ) {
    super(count, name, length, pointStart, pointEnd);
  }
}
