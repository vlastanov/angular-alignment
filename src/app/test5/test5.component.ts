import { Component, OnInit, OnChanges } from "@angular/core";
import { str } from "./htmlString";
import * as _ from "lodash";

@Component({
  selector: "app-test5",
  templateUrl: "./test5.component.html",
  styleUrls: ["./test5.component.css"]
})
export class Test5Component implements OnInit{
  str;
  header: Row;
  rows: Row[] = [];

  constructor() {}

  openFile(event) {
    let input = event.target.files;
      let reader = new FileReader();
      reader.readAsText(input[0], "UTF-8");
      reader.onload = () => {
        let text = reader.result;
        this.str = text.toString()
        this.ngOnInit()
      };
  }

  ngOnInit(): void {
    let r=50;
    let beta=50;
    let delta=200-beta
    let deltaHalf=delta/2
    // let gradToRadians=centralAngle*Math.PI/200
    // let sin=Math.sin(gradToRadians)

    let tangenta=r*Math.tan(deltaHalf*Math.PI/200)
    console.log(tangenta)



    let tableText = this.str.replace(/(?:\r\n|\r|\n)/g, "").match(
      /<table.*?table>/g
    )[2];

    //getRows
    let [heading, ...body] = tableText.match(/<tr.*?tr>/g);
    this.header = new Row(heading);
    console.log(this.header)
    body.forEach(row => this.rows.push(new Row(row)));
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


//#region

const TEXT = `

<html xmlns:lx="http://www.landxml.org/schema/LandXML-1.2" xmlns:msxsl="urn:schemas-microsoft-com:xslt" xmlns:landUtils="http://www.autodesk.com/land/civil/vcedit" xmlns:lxml="urn:lx_utils"><head><META http-equiv="Content-Type" content="text/html; charset=UTF-8"><title>PVI Stations report</title></head><body><div style="width:7in"><center><h1>Your Company Name</h1><h2>123 Main Street</h2><h2>Suite #321</h2><h2>City, 	 State 01234</h2></center><hr><table border="0" width="100%"><tr><td><b>PVI Stations Report</b></td><td align="right"><b>Client: </b>Client Company</td></tr><tr><td><b>Project Name: </b>T:\\03_TK 22\\PROJECTS\\119017_AM Hemus-u-k_4.2\\030 ROADWORKS\\31 DRAWINGS\\313 WORKING DRAWINGS\\Model Hemus 4.2-V1.dwg</td><td align="right"><b>Project Description: </b></td></tr><tr><td><b>Report Date: </b>21.5.2020 г. 13:29:10</td><td align="right"><b>Prepared by: </b>Preparer</td></tr></table><hr><p></p><table width="75%"><tr><td colspan="2"><u>Horizontal Alignment Information</u></td></tr><tr><td>Name:</td><td>АМ Хемус</td></tr><tr><td>Station Range:</td><td>1350+00.080 to 1693+07.280</td></tr></table><h3>Vertical Alignment: Нивелета</h3><table border="1" width="100%" cellpadding="7" cellspacing="1" bgcolor="#eeeeeff"><tr align="right"><th>PVI</th><th>Station</th><th>Elevation (m)</th><th>Grade Out (%)</th><th>Curve Length (m)</th></tr><tr align="right"><td>1</td><td>1455+51.110</td><td>337.737</td><td>0.500 %</td><td>0.000</td></tr><tr align="right"><td>2</td><td>1462+53.490</td><td>341.249</td><td>-0.500 %</td><td>300.012</td></tr><tr align="right"><td>3</td><td>1473+80.000</td><td>335.616</td><td>-4.500 %</td><td>639.994</td></tr><tr align="right"><td>4</td><td>1488+60.000</td><td>269.016</td><td>-0.500 %</td><td>1400.000</td></tr><tr align="right"><td>5</td><td>1519+65.000</td><td>253.491</td><td>-2.500 %</td><td>320.000</td></tr><tr align="right"><td>6</td><td>1528+85.000</td><td>230.491</td><td>-1.803 %</td><td>348.585</td></tr><tr align="right"><td>7</td><td>1536+80.000</td><td>216.158</td><td>-0.850 %</td><td>285.849</td></tr><tr align="right"><td>8</td><td>1544+00.000</td><td>210.038</td><td>-1.350 %</td><td>375.000</td></tr><tr align="right"><td>9</td><td>1555+95.000</td><td>193.906</td><td>-2.649 %</td><td>1299.202</td></tr><tr align="right"><td>10</td><td>1581+60.000</td><td>125.953</td><td>4.000 %</td><td>664.917</td></tr><tr align="right"><td>11</td><td>1597+12.048</td><td>188.035</td><td>-1.696 %</td><td>1822.633</td></tr><tr align="right"><td>12</td><td>1616+24.010</td><td>155.613</td><td> </td><td> </td></tr></table><hr size="2" color="red"></div></body></html>

`;

//#endregion
