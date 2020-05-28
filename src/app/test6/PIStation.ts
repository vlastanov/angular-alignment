

export class PIStation {
  points = [];
  piElements = [];
  titles;
  rows = [];
  rows2 = [];
  header
  constructor(public text: string) {
    this.getTable();
    this.getModelsByTable();
    this.getElements();
  }

  getTable() {
    let tableText = this.text
      .replace(/(?:\r\n|\r|\n)/g, "")
      .match(/<table.*?table>/g)[1];

       //getRows
    let [heading, ...body] = tableText.match(/<tr.*?tr>/g);
    this.header = new Row(heading);
    console.log(this.header)
    body.forEach(row => this.rows2.push(new Row(row)));
    console.log(this.rows2)

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



export class Row {
  station;
  northing;
  easting;
  constructor(rowText: string) {
    [this.station,this.northing, this.easting] = rowText
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