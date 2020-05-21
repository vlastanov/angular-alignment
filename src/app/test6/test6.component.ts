import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash'

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

`

//#endregion


@Component({
  selector: 'app-test6',
  templateUrl: './test6.component.html',
  styleUrls: ['./test6.component.css']
})
export class Test6Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}