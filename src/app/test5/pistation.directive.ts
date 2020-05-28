import { Directive, Input } from "@angular/core";

@Directive({
  selector: "[appPIStation]"
})
export class PIStationDirective {
  @Input() str;

  header: Row;
  rows: Row[] = [];
  constructor() {}

  ngOnChanges(changes) {
    if (changes.str) {
      let tableText = this.str
        .replace(/(?:\r\n|\r|\n)/g, "")
        .match(/<table.*?table>/g)[2];

      //getRows
      let [heading, ...body] = tableText.match(/<tr.*?tr>/g);
      this.header = new Row(heading);
      // console.log(this.header);
      body.forEach(row => this.rows.push(new Row(row)));
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
