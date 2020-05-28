import * as _ from "lodash";

export class StationAndCurveReport {
  geometricElements = [];
  rows = [];
  rows2:Row[] = [];
  header

  constructor(public text: string) {
    this.getTable();
    this.getModelsByTable();
  }

  getTable() {
    let tableText = this.text
      .replace(/(?:\r\n|\r|\n)/g, "")
      .match(/<table.*?table>/g)[1];
      
      
    //getRows
    let [heading, ...body] = tableText.match(/<tr.*?tr>/g);
    this.header = new Row(heading);

    body.forEach(row => this.rows2.push(new Row(row)));
    // console.log(this.rows2)

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

  processTangentData(item, count) {
    let name = "Права";
    let lenth = item[19];
    let stationStart = this.formatStation(item[6]);
    let start = new PointElement(stationStart, item[7], item[8]);
    let stationEnd = this.formatStation(item[10]);
    let end = new PointElement(stationEnd, item[11], item[12]);
    let tangent = new TangentElement(count, name, lenth, start, end);
    this.geometricElements.push(tangent);
  }

  processSpiralData(item, count) {
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
    this.geometricElements.push(spiral);
  }

  processCurveData(item, count) {
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
    this.geometricElements.push(curve);
  }

  getModelsByTable() {
    let cells = _.concat(this.rows);
    cells = _.flatten(cells);

    let count = 1;

    for (let i = 0; i < cells.length; i++) {
      let element = cells[i];
      if (element === "Tangent Data") {
        let item = cells.splice(i, 22);
        i = -1;
        this.processTangentData(item, count);
        count++;
      } else if (element === "Spiral Point Data") {
        let item = cells.splice(i, 46);
        i = -1;
        this.processSpiralData(item, count);
        count++;
      } else if (element === "Curve Point Data") {
        let item = cells.splice(i, 40);
        i = -1;
        this.processCurveData(item, count);
        count++;
      }
    }
  }
}

export class Row {
  pvi;
  station;
  elevation;
  gradeOut;
  constructor(rowText: string) {
    [this.pvi, this.station, this.elevation, this.gradeOut] = rowText
      .match(/<td.*?td>|<th.*?th>/g)
      .map(cell => {
        return cell
          .replace(
            /<td.*?>|<\/td>|<th.*?>|<\/th>|<b>|<\/b>|<hr.*?>|<u>|<\/u>/g,
            ""
          )
          .trim();
      });
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
