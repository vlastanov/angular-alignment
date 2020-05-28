export class PIStation {
  points: Point[] = [];
  piElements = [];
  rows: Row[] = [];
  header;
  constructor(public text: string) {
    this.getTable();
    this.getModelsByTable();
    this.getElements();
  }

  getTable() {
    let tableText = this.text
      .replace(/(?:\r\n|\r|\n)/g, "")
      .match(/<table.*?table>/g)[1];

    let [...body] = tableText.match(/<tr.*?tr>/g);
    body.forEach(row => this.rows.push(new Row(row)));
  }

  getModelsByTable() {
    let count = 1;
    for (let i = 1; i < this.rows.length - 1; i += 2) {
      const el = this.rows[i];
      this.points.push(new Point(count, el.station, el.easting, el.northing));
      count++;
    }
  }

  getElements() {
    let count = 1;
    for (let i = 0; i < this.points.length - 1; i++) {
      const first = this.points[i];
      const second = this.points[i + 1];

      let piEl = new PIelement(count, first, second);
      this.piElements.push(piEl);
      count++;
    }
    console.log(this.piElements);
  }
}

export class PIelement {
  station;
  constructor(public count, public startPoint: Point, public endPoint: Point) {
    this.station = this.startPoint.station;
  }
}

export class Point {
  constructor(public count, public station, public x, public y) {}
}

export class Row {
  station;
  northing;
  easting;
  constructor(rowText: string) {
    [this.station, this.northing, this.easting] = rowText
      .match(/<td.*?td>|<th.*?th>/g)
      .map(cell => {
        return cell
          .replace(
            /<td.*?>|<\/td>|<th.*?>|<\/th>|<b>|<\/b>|<hr.*?>|<u>|<\/u>/g,
            ""
          )
          .trim();
      });
    // console.log(this.station)
  }
}
