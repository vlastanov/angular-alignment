import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";
import { StationAndCurveReport } from "./stationAndCurve";
import { PIStation } from "./PIStation";

//#region

const TEXT2 = `

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

//#region

const TEXT1 = `
<html xmlns:lx="http://www.landxml.org/schema/LandXML-1.2" xmlns:msxsl="urn:schemas-microsoft-com:xslt" xmlns:landUtils="http://www.autodesk.com/land/civil/vcedit" xmlns:lxml="urn:lx_utils">

<head>

<META http-equiv="Content-Type" content="text/html; charset=UTF-8">

<title>Horizontal Alignment Station and Curve Report</title>

</head>

<body>

<div style="width:7in">

<center>

<h1>Your Company Name</h1>

<h2>123 Main Street</h2>

<h2>Suite #321</h2>

<h2>City, 

	 State 01234</h2>

</center>

<hr>

<table border="0" width="100%">

<tr>

<td><b>Alignment Station and Curve Report</b></td>

<td align="right"><b>Client: </b>Client Company</td>

</tr>

<tr>

<td><b></td>

<td align="right"><b>Project Description: </b></td>

</tr>

<tr>

<td><b>Report Date: </b>21.5.2020 г. 11:54:38</td>

<td align="right"><b>Prepared by: </b>Preparer</td>

</tr>

</table>

<hr>

<h3>Alignment: АМ Хемус</h3>

<h3>Description: </h3>

<hr color="black">

<table width="100%">

<tr>

<td colspan="4" align="center"><hr color="#ddddff" size="4"><u>Tangent Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Description</th>

<th>PT Station</th>

<th>Northing</th>

<th>Easting</th>

</tr>

<tr>

<td>Start:</td>

<td>1350+00.080</td>

<td>4789962.139</td>

<td>430785.412</td>

</tr>

<tr>

<td>End:</td>

<td>1361+22.040</td>

<td>4791081.262</td>

<td>430705.675</td>

</tr>

<tr>

<td colspan="4" align="center"><u>Tangent Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Parameter</th>

<th>Value</th>

<th>Parameter</th>

<th>Value</th>

</tr>

<tr>

<td>Length:</td>

<td>1121.960</td>

<td>Course:</td>

<td>N 04&deg; 04' 31.5418" W</td>

</tr>

<tr>

<td colspan="4" align="center"><hr color="#ddddff" size="4"><u>Spiral Point Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Description</th>

<th>Station </th>

<th>Northing</th>

<th>Easting</th>

</tr>

<tr>

<td>TS:</td>

<td>1361+22.040</td>

<td>4791081.262</td>

<td>430705.675</td>

</tr>

<tr>

<td>SPI:</td>

<td></td>

<td>4791280.788</td>

<td>430691.459</td>

</tr>

<tr>

<td>SC:</td>

<td>1364+22.040</td>

<td>4791380.806</td>

<td>430689.901</td>

</tr>

<tr>

<td colspan="4" align="center"><u>Spiral Curve Data:  clothoid</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Parameter</th>

<th>Value</th>

<th>Parameter</th>

<th>Value</th>

</tr>

<tr>

<td>Length:</td>

<td>300.000</td>

<td>L Tan:</td>

<td>200.032</td>

</tr>

<tr>

<td>Radius:</td>

<td>2700.000</td>

<td>S Tan:</td>

<td>100.029</td>

</tr>

<tr>

<td>Theta:</td>

<td>03&deg; 10' 59.1559"</td>

<td>P:</td>

<td>1.389</td>

</tr>

<tr>

<td>X:</td>

<td>299.907</td>

<td>K:</td>

<td>149.985</td>

</tr>

<tr>

<td>Y:</td>

<td>5.554</td>

<td>A:</td>

<td>900.000</td>

</tr>

<tr>

<td>Chord:</td>

<td>299.959</td>

<td>Course:</td>

<td>N 03&deg; 00' 51.9229" W</td>

</tr>

<tr>

<td colspan="4" align="center"><hr color="#ddddff" size="4"><u>Curve Point Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Description</th>

<th>Station </th>

<th>Northing</th>

<th>Easting</th>

</tr>

<tr>

<td>SC:</td>

<td>1364+22.040</td>

<td>4791380.806</td>

<td>430689.901</td>

</tr>

<tr>

<td>RP:</td>

<td></td>

<td>4791422.854</td>

<td>433389.574</td>

</tr>

<tr>

<td>CS:</td>

<td>1404+06.011</td>

<td>4794106.290</td>

<td>433090.956</td>

</tr>

<tr>

<td colspan="4" align="center"><u>Circular Curve Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Parameter</th>

<th>Value</th>

<th>Parameter</th>

<th>Value</th>

</tr>

<tr>

<td>Delta:</td>

<td>84&deg; 32' 32.9261"</td>

<td>Type:</td>

<td>RIGHT</td>

</tr>

<tr>

<td>Radius:</td>

<td>2700.000</td>

</tr>

<tr>

<td>Length:</td>

<td>3983.970</td>

<td>Tangent:</td>

<td>2454.335</td>

</tr>

<tr>

<td>Mid-Ord:</td>

<td>702.084</td>

<td>External:</td>

<td>948.802</td>

</tr>

<tr>

<td>Chord:</td>

<td>3632.262</td>

<td>Course:</td>

<td>N 41&deg; 22' 44.0772" E</td>

</tr>

<tr>

<td colspan="4" align="center"><hr color="#ddddff" size="4"><u>Spiral Point Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Description</th>

<th>Station </th>

<th>Northing</th>

<th>Easting</th>

</tr>

<tr>

<td>CS:</td>

<td>1404+06.011</td>

<td>4794106.290</td>

<td>433090.956</td>

</tr>

<tr>

<td>SPI:</td>

<td></td>

<td>4794117.353</td>

<td>433190.372</td>

</tr>

<tr>

<td>ST:</td>

<td>1407+06.011</td>

<td>4794128.403</td>

<td>433390.099</td>

</tr>

<tr>

<td colspan="4" align="center"><u>Spiral Curve Data:  clothoid</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Parameter</th>

<th>Value</th>

<th>Parameter</th>

<th>Value</th>

</tr>

<tr>

<td>Length:</td>

<td>300.000</td>

<td>L Tan:</td>

<td>200.032</td>

</tr>

<tr>

<td>Radius:</td>

<td>2700.000</td>

<td>S Tan:</td>

<td>100.029</td>

</tr>

<tr>

<td>Theta:</td>

<td>03&deg; 10' 59.1559"</td>

<td>P:</td>

<td>1.389</td>

</tr>

<tr>

<td>X:</td>

<td>299.907</td>

<td>K:</td>

<td>149.985</td>

</tr>

<tr>

<td>Y:</td>

<td>5.554</td>

<td>A:</td>

<td>900.000</td>

</tr>

<tr>

<td>Chord:</td>

<td>299.959</td>

<td>Course:</td>

<td>N 85&deg; 46' 20.0774" E</td>

</tr>

<tr>

<td colspan="4" align="center"><hr color="#ddddff" size="4"><u>Tangent Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Description</th>

<th>PT Station</th>

<th>Northing</th>

<th>Easting</th>

</tr>

<tr>

<td>Start:</td>

<td>1407+06.011</td>

<td>4794128.403</td>

<td>433390.099</td>

</tr>

<tr>

<td>End:</td>

<td>1432+79.282</td>

<td>4794270.556</td>

<td>435959.441</td>

</tr>

<tr>

<td colspan="4" align="center"><u>Tangent Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Parameter</th>

<th>Value</th>

<th>Parameter</th>

<th>Value</th>

</tr>

<tr>

<td>Length:</td>

<td>2573.272</td>

<td>Course:</td>

<td>N 86&deg; 49' 59.6962" E</td>

</tr>

<tr>

<td colspan="4" align="center"><hr color="#ddddff" size="4"><u>Curve Point Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Description</th>

<th>Station </th>

<th>Northing</th>

<th>Easting</th>

</tr>

<tr>

<td>PC:</td>

<td>1432+79.282</td>

<td>4794270.556</td>

<td>435959.441</td>

</tr>

<tr>

<td>RP:</td>

<td></td>

<td>4804255.286</td>

<td>435407.020</td>

</tr>

<tr>

<td>PT:</td>

<td>1440+99.508</td>

<td>4794349.385</td>

<td>436775.638</td>

</tr>

<tr>

<td colspan="4" align="center"><u>Circular Curve Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Parameter</th>

<th>Value</th>

<th>Parameter</th>

<th>Value</th>

</tr>

<tr>

<td>Delta:</td>

<td>04&deg; 41' 58.3614"</td>

<td>Type:</td>

<td>LEFT</td>

</tr>

<tr>

<td>Radius:</td>

<td>10000.000</td>

</tr>

<tr>

<td>Length:</td>

<td>820.225</td>

<td>Tangent:</td>

<td>410.343</td>

</tr>

<tr>

<td>Mid-Ord:</td>

<td>8.408</td>

<td>External:</td>

<td>8.416</td>

</tr>

<tr>

<td>Chord:</td>

<td>819.995</td>

<td>Course:</td>

<td>N 84&deg; 29' 00.5155" E</td>

</tr>

<tr>

<td colspan="4" align="center"><hr color="#ddddff" size="4"><u>Tangent Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Description</th>

<th>PT Station</th>

<th>Northing</th>

<th>Easting</th>

</tr>

<tr>

<td>Start:</td>

<td>1440+99.508</td>

<td>4794349.385</td>

<td>436775.638</td>

</tr>

<tr>

<td>End:</td>

<td>1460+87.919</td>

<td>4794621.522</td>

<td>438745.339</td>

</tr>

<tr>

<td colspan="4" align="center"><u>Tangent Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Parameter</th>

<th>Value</th>

<th>Parameter</th>

<th>Value</th>

</tr>

<tr>

<td>Length:</td>

<td>1988.412</td>

<td>Course:</td>

<td>N 82&deg; 08' 01.3348" E</td>

</tr>

<tr>

<td colspan="4" align="center"><hr color="#ddddff" size="4"><u>Curve Point Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Description</th>

<th>Station </th>

<th>Northing</th>

<th>Easting</th>

</tr>

<tr>

<td>PC:</td>

<td>1460+87.919</td>

<td>4794621.522</td>

<td>438745.339</td>

</tr>

<tr>

<td>RP:</td>

<td></td>

<td>4786696.801</td>

<td>439840.234</td>

</tr>

<tr>

<td>PT:</td>

<td>1494+06.955</td>

<td>4794390.558</td>

<td>442032.519</td>

</tr>

<tr>

<td colspan="4" align="center"><u>Circular Curve Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Parameter</th>

<th>Value</th>

<th>Parameter</th>

<th>Value</th>

</tr>

<tr>

<td>Delta:</td>

<td>23&deg; 46' 15.0387"</td>

<td>Type:</td>

<td>RIGHT</td>

</tr>

<tr>

<td>Radius:</td>

<td>8000.000</td>

</tr>

<tr>

<td>Length:</td>

<td>3319.036</td>

<td>Tangent:</td>

<td>1683.739</td>

</tr>

<tr>

<td>Mid-Ord:</td>

<td>171.509</td>

<td>External:</td>

<td>175.266</td>

</tr>

<tr>

<td>Chord:</td>

<td>3295.284</td>

<td>Course:</td>

<td>S 85&deg; 58' 51.1458" E</td>

</tr>

<tr>

<td colspan="4" align="center"><hr color="#ddddff" size="4"><u>Tangent Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Description</th>

<th>PT Station</th>

<th>Northing</th>

<th>Easting</th>

</tr>

<tr>

<td>Start:</td>

<td>1494+06.955</td>

<td>4794390.558</td>

<td>442032.519</td>

</tr>

<tr>

<td>End:</td>

<td>1520+49.881</td>

<td>4793666.302</td>

<td>444574.272</td>

</tr>

<tr>

<td colspan="4" align="center"><u>Tangent Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Parameter</th>

<th>Value</th>

<th>Parameter</th>

<th>Value</th>

</tr>

<tr>

<td>Length:</td>

<td>2642.926</td>

<td>Course:</td>

<td>S 74&deg; 05' 43.6265" E</td>

</tr>

<tr>

<td colspan="4" align="center"><hr color="#ddddff" size="4"><u>Curve Point Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Description</th>

<th>Station </th>

<th>Northing</th>

<th>Easting</th>

</tr>

<tr>

<td>PC:</td>

<td>1520+49.881</td>

<td>4793666.302</td>

<td>444574.272</td>

</tr>

<tr>

<td>RP:</td>

<td></td>

<td>4785972.545</td>

<td>442381.988</td>

</tr>

<tr>

<td>PT:</td>

<td>1536+24.532</td>

<td>4793089.015</td>

<td>446036.555</td>

</tr>

<tr>

<td colspan="4" align="center"><u>Circular Curve Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Parameter</th>

<th>Value</th>

<th>Parameter</th>

<th>Value</th>

</tr>

<tr>

<td>Delta:</td>

<td>11&deg; 16' 39.3914"</td>

<td>Type:</td>

<td>RIGHT</td>

</tr>

<tr>

<td>Radius:</td>

<td>8000.000</td>

</tr>

<tr>

<td>Length:</td>

<td>1574.651</td>

<td>Tangent:</td>

<td>789.877</td>

</tr>

<tr>

<td>Mid-Ord:</td>

<td>38.711</td>

<td>External:</td>

<td>38.900</td>

</tr>

<tr>

<td>Chord:</td>

<td>1572.111</td>

<td>Course:</td>

<td>S 68&deg; 27' 23.9308" E</td>

</tr>

<tr>

<td colspan="4" align="center"><hr color="#ddddff" size="4"><u>Tangent Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Description</th>

<th>PT Station</th>

<th>Northing</th>

<th>Easting</th>

</tr>

<tr>

<td>Start:</td>

<td>1536+24.532</td>

<td>4793089.015</td>

<td>446036.555</td>

</tr>

<tr>

<td>End:</td>

<td>1539+79.738</td>

<td>4792926.750</td>

<td>446352.531</td>

</tr>

<tr>

<td colspan="4" align="center"><u>Tangent Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Parameter</th>

<th>Value</th>

<th>Parameter</th>

<th>Value</th>

</tr>

<tr>

<td>Length:</td>

<td>355.205</td>

<td>Course:</td>

<td>S 62&deg; 49' 04.2350" E</td>

</tr>

<tr>

<td colspan="4" align="center"><hr color="#ddddff" size="4"><u>Curve Point Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Description</th>

<th>Station </th>

<th>Northing</th>

<th>Easting</th>

</tr>

<tr>

<td>PC:</td>

<td>1539+79.738</td>

<td>4792926.750</td>

<td>446352.531</td>

</tr>

<tr>

<td>RP:</td>

<td></td>

<td>4796129.161</td>

<td>447997.086</td>

</tr>

<tr>

<td>PT:</td>

<td>1576+06.643</td>

<td>4793028.631</td>

<td>449826.488</td>

</tr>

<tr>

<td colspan="4" align="center"><u>Circular Curve Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Parameter</th>

<th>Value</th>

<th>Parameter</th>

<th>Value</th>

</tr>

<tr>

<td>Delta:</td>

<td>57&deg; 43' 26.3423"</td>

<td>Type:</td>

<td>LEFT</td>

</tr>

<tr>

<td>Radius:</td>

<td>3600.000</td>

</tr>

<tr>

<td>Length:</td>

<td>3626.905</td>

<td>Tangent:</td>

<td>1984.192</td>

</tr>

<tr>

<td>Mid-Ord:</td>

<td>447.174</td>

<td>External:</td>

<td>510.598</td>

</tr>

<tr>

<td>Chord:</td>

<td>3475.451</td>

<td>Course:</td>

<td>N 88&deg; 19' 12.5938" E</td>

</tr>

<tr>

<td colspan="4" align="center"><hr color="#ddddff" size="4"><u>Tangent Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Description</th>

<th>PT Station</th>

<th>Northing</th>

<th>Easting</th>

</tr>

<tr>

<td>Start:</td>

<td>1576+06.643</td>

<td>4793028.631</td>

<td>449826.488</td>

</tr>

<tr>

<td>End:</td>

<td>1585+44.195</td>

<td>4793505.064</td>

<td>450633.964</td>

</tr>

<tr>

<td colspan="4" align="center"><u>Tangent Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Parameter</th>

<th>Value</th>

<th>Parameter</th>

<th>Value</th>

</tr>

<tr>

<td>Length:</td>

<td>937.553</td>

<td>Course:</td>

<td>N 59&deg; 27' 29.4226" E</td>

</tr>

<tr>

<td colspan="4" align="center"><hr color="#ddddff" size="4"><u>Curve Point Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Description</th>

<th>Station </th>

<th>Northing</th>

<th>Easting</th>

</tr>

<tr>

<td>PC:</td>

<td>1585+44.195</td>

<td>4793505.064</td>

<td>450633.964</td>

</tr>

<tr>

<td>RP:</td>

<td></td>

<td>4790921.289</td>

<td>452158.466</td>

</tr>

<tr>

<td>PT:</td>

<td>1596+45.073</td>

<td>4793880.002</td>

<td>451662.465</td>

</tr>

<tr>

<td colspan="4" align="center"><u>Circular Curve Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Parameter</th>

<th>Value</th>

<th>Parameter</th>

<th>Value</th>

</tr>

<tr>

<td>Delta:</td>

<td>21&deg; 01' 30.7853"</td>

<td>Type:</td>

<td>RIGHT</td>

</tr>

<tr>

<td>Radius:</td>

<td>3000.000</td>

</tr>

<tr>

<td>Length:</td>

<td>1100.878</td>

<td>Tangent:</td>

<td>556.700</td>

</tr>

<tr>

<td>Mid-Ord:</td>

<td>50.356</td>

<td>External:</td>

<td>51.215</td>

</tr>

<tr>

<td>Chord:</td>

<td>1094.711</td>

<td>Course:</td>

<td>N 69&deg; 58' 14.8153" E</td>

</tr>

<tr>

<td colspan="4" align="center"><hr color="#ddddff" size="4"><u>Tangent Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Description</th>

<th>PT Station</th>

<th>Northing</th>

<th>Easting</th>

</tr>

<tr>

<td>Start:</td>

<td>1596+45.073</td>

<td>4793880.002</td>

<td>451662.465</td>

</tr>

<tr>

<td>End:</td>

<td>1601+64.140</td>

<td>4793965.821</td>

<td>452174.389</td>

</tr>

<tr>

<td colspan="4" align="center"><u>Tangent Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Parameter</th>

<th>Value</th>

<th>Parameter</th>

<th>Value</th>

</tr>

<tr>

<td>Length:</td>

<td>519.067</td>

<td>Course:</td>

<td>N 80&deg; 29' 00.2079" E</td>

</tr>

<tr>

<td colspan="4" align="center"><hr color="#ddddff" size="4"><u>Curve Point Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Description</th>

<th>Station </th>

<th>Northing</th>

<th>Easting</th>

</tr>

<tr>

<td>PC:</td>

<td>1601+64.140</td>

<td>4793965.821</td>

<td>452174.389</td>

</tr>

<tr>

<td>RP:</td>

<td></td>

<td>4787555.276</td>

<td>453249.056</td>

</tr>

<tr>

<td>PT:</td>

<td>1614+94.916</td>

<td>4794050.425</td>

<td>453500.145</td>

</tr>

<tr>

<td colspan="4" align="center"><u>Circular Curve Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Parameter</th>

<th>Value</th>

<th>Parameter</th>

<th>Value</th>

</tr>

<tr>

<td>Delta:</td>

<td>11&deg; 43' 49.5695"</td>

<td>Type:</td>

<td>RIGHT</td>

</tr>

<tr>

<td>Radius:</td>

<td>6500.000</td>

</tr>

<tr>

<td>Length:</td>

<td>1330.776</td>

<td>Tangent:</td>

<td>667.722</td>

</tr>

<tr>

<td>Mid-Ord:</td>

<td>34.027</td>

<td>External:</td>

<td>34.206</td>

</tr>

<tr>

<td>Chord:</td>

<td>1328.453</td>

<td>Course:</td>

<td>N 86&deg; 20' 54.9926" E</td>

</tr>

<tr>

<td colspan="4" align="center"><hr color="#ddddff" size="4"><u>Tangent Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Description</th>

<th>PT Station</th>

<th>Northing</th>

<th>Easting</th>

</tr>

<tr>

<td>Start:</td>

<td>1614+94.916</td>

<td>4794050.425</td>

<td>453500.145</td>

</tr>

<tr>

<td>End:</td>

<td>1636+06.161</td>

<td>4793968.870</td>

<td>455609.813</td>

</tr>

<tr>

<td colspan="4" align="center"><u>Tangent Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Parameter</th>

<th>Value</th>

<th>Parameter</th>

<th>Value</th>

</tr>

<tr>

<td>Length:</td>

<td>2111.244</td>

<td>Course:</td>

<td>S 87&deg; 47' 10.2226" E</td>

</tr>

<tr>

<td colspan="4" align="center"><hr color="#ddddff" size="4"><u>Curve Point Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Description</th>

<th>Station </th>

<th>Northing</th>

<th>Easting</th>

</tr>

<tr>

<td>PC:</td>

<td>1636+06.161</td>

<td>4793968.870</td>

<td>455609.813</td>

</tr>

<tr>

<td>RP:</td>

<td></td>

<td>4798965.138</td>

<td>455802.958</td>

</tr>

<tr>

<td>PT:</td>

<td>1642+38.140</td>

<td>4793984.379</td>

<td>456241.182</td>

</tr>

<tr>

<td colspan="4" align="center"><u>Circular Curve Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Parameter</th>

<th>Value</th>

<th>Parameter</th>

<th>Value</th>

</tr>

<tr>

<td>Delta:</td>

<td>07&deg; 14' 31.0286"</td>

<td>Type:</td>

<td>LEFT</td>

</tr>

<tr>

<td>Radius:</td>

<td>5000.000</td>

</tr>

<tr>

<td>Length:</td>

<td>631.980</td>

<td>Tangent:</td>

<td>316.411</td>

</tr>

<tr>

<td>Mid-Ord:</td>

<td>9.982</td>

<td>External:</td>

<td>10.002</td>

</tr>

<tr>

<td>Chord:</td>

<td>631.559</td>

<td>Course:</td>

<td>N 88&deg; 35' 34.2631" E</td>

</tr>

<tr>

<td colspan="4" align="center"><hr color="#ddddff" size="4"><u>Tangent Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Description</th>

<th>PT Station</th>

<th>Northing</th>

<th>Easting</th>

</tr>

<tr>

<td>Start:</td>

<td>1642+38.140</td>

<td>4793984.379</td>

<td>456241.182</td>

</tr>

<tr>

<td>End:</td>

<td>1659+01.384</td>

<td>4794130.153</td>

<td>457898.025</td>

</tr>

<tr>

<td colspan="4" align="center"><u>Tangent Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Parameter</th>

<th>Value</th>

<th>Parameter</th>

<th>Value</th>

</tr>

<tr>

<td>Length:</td>

<td>1663.244</td>

<td>Course:</td>

<td>N 84&deg; 58' 18.7488" E</td>

</tr>

<tr>

<td colspan="4" align="center"><hr color="#ddddff" size="4"><u>Spiral Point Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Description</th>

<th>Station </th>

<th>Northing</th>

<th>Easting</th>

</tr>

<tr>

<td>TS:</td>

<td>1659+01.384</td>

<td>4794130.153</td>

<td>457898.025</td>

</tr>

<tr>

<td>SPI:</td>

<td></td>

<td>4794149.633</td>

<td>458119.428</td>

</tr>

<tr>

<td>SC:</td>

<td>1662+34.718</td>

<td>4794153.212</td>

<td>458230.514</td>

</tr>

<tr>

<td colspan="4" align="center"><u>Spiral Curve Data:  clothoid</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Parameter</th>

<th>Value</th>

<th>Parameter</th>

<th>Value</th>

</tr>

<tr>

<td>Length:</td>

<td>333.333</td>

<td>L Tan:</td>

<td>222.258</td>

</tr>

<tr>

<td>Radius:</td>

<td>3000.000</td>

<td>S Tan:</td>

<td>111.144</td>

</tr>

<tr>

<td>Theta:</td>

<td>03&deg; 10' 59.1559"</td>

<td>P:</td>

<td>1.543</td>

</tr>

<tr>

<td>X:</td>

<td>333.230</td>

<td>K:</td>

<td>166.650</td>

</tr>

<tr>

<td>Y:</td>

<td>6.171</td>

<td>A:</td>

<td>1000.000</td>

</tr>

<tr>

<td>Chord:</td>

<td>333.288</td>

<td>Course:</td>

<td>N 86&deg; 01' 58.3676" E</td>

</tr>

<tr>

<td colspan="4" align="center"><hr color="#ddddff" size="4"><u>Curve Point Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Description</th>

<th>Station </th>

<th>Northing</th>

<th>Easting</th>

</tr>

<tr>

<td>SC:</td>

<td>1662+34.718</td>

<td>4794153.212</td>

<td>458230.514</td>

</tr>

<tr>

<td>RP:</td>

<td></td>

<td>4791154.767</td>

<td>458327.103</td>

</tr>

<tr>

<td>CS:</td>

<td>1680+05.723</td>

<td>4793699.503</td>

<td>459915.914</td>

</tr>

<tr>

<td colspan="4" align="center"><u>Circular Curve Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Parameter</th>

<th>Value</th>

<th>Parameter</th>

<th>Value</th>

</tr>

<tr>

<td>Delta:</td>

<td>33&deg; 49' 25.3497"</td>

<td>Type:</td>

<td>RIGHT</td>

</tr>

<tr>

<td>Radius:</td>

<td>3000.000</td>

</tr>

<tr>

<td>Length:</td>

<td>1771.005</td>

<td>Tangent:</td>

<td>912.148</td>

</tr>

<tr>

<td>Mid-Ord:</td>

<td>129.740</td>

<td>External:</td>

<td>135.604</td>

</tr>

<tr>

<td>Chord:</td>

<td>1745.401</td>

<td>Course:</td>

<td>S 74&deg; 55' 59.4204" E</td>

</tr>

<tr>

<td colspan="4" align="center"><hr color="#ddddff" size="4"><u>Spiral Point Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Description</th>

<th>Station </th>

<th>Northing</th>

<th>Easting</th>

</tr>

<tr>

<td>CS:</td>

<td>1680+05.723</td>

<td>4793699.503</td>

<td>459915.914</td>

</tr>

<tr>

<td>SPI:</td>

<td></td>

<td>4793640.640</td>

<td>460010.191</td>

</tr>

<tr>

<td>ST:</td>

<td>1683+39.056</td>

<td>4793512.645</td>

<td>460191.894</td>

</tr>

<tr>

<td colspan="4" align="center"><u>Spiral Curve Data:  clothoid</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Parameter</th>

<th>Value</th>

<th>Parameter</th>

<th>Value</th>

</tr>

<tr>

<td>Length:</td>

<td>333.333</td>

<td>L Tan:</td>

<td>222.258</td>

</tr>

<tr>

<td>Radius:</td>

<td>3000.000</td>

<td>S Tan:</td>

<td>111.144</td>

</tr>

<tr>

<td>Theta:</td>

<td>03&deg; 10' 59.1559"</td>

<td>P:</td>

<td>1.543</td>

</tr>

<tr>

<td>X:</td>

<td>333.230</td>

<td>K:</td>

<td>166.650</td>

</tr>

<tr>

<td>Y:</td>

<td>6.171</td>

<td>A:</td>

<td>1000.000</td>

</tr>

<tr>

<td>Chord:</td>

<td>333.288</td>

<td>Course:</td>

<td>S 55&deg; 53' 57.2085" E</td>

</tr>

<tr>

<td colspan="4" align="center"><hr color="#ddddff" size="4"><u>Tangent Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Description</th>

<th>PT Station</th>

<th>Northing</th>

<th>Easting</th>

</tr>

<tr>

<td>Start:</td>

<td>1683+39.056</td>

<td>4793512.645</td>

<td>460191.894</td>

</tr>

<tr>

<td>End:</td>

<td>1693+07.280</td>

<td>4792955.057</td>

<td>460983.445</td>

</tr>

<tr>

<td colspan="4" align="center"><u>Tangent Data</u></td>

</tr>

<tr bgcolor="eeeeee">

<th>Parameter</th>

<th>Value</th>

<th>Parameter</th>

<th>Value</th>

</tr>

<tr>

<td>Length:</td>

<td>968.223</td>

<td>Course:</td>

<td>S 54&deg; 50' 17.5896" E</td>

</tr>

</table>

<hr color="black">

</div>

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

  constructor() {}
  // status: boolean = false;

  delete(i) {
    this.piElements.splice(i, 1);
  }

  ngOnInit(): void {
    let stationAndCurve = new StationAndCurveReport(TEXT1);
    this.geometricElements = stationAndCurve.geometricElements;

    let piStationReport = new PIStation(TEXT2);
    this.piElements = piStationReport.piElements;
  }

  stationAndCurve(event) {
    let fileList = event.target.files;
    let reader = new FileReader();
    reader.readAsText(fileList[0], "UTF-8");
    reader.onload = () => {
      console.log(reader.result);
      let stationAndCurve = new StationAndCurveReport(<string>reader.result);
      this.geometricElements = stationAndCurve.geometricElements;
    };
  }

  piStationFile(event) {
    let fileList = event.target.files;
    let reader = new FileReader();
    reader.readAsText(fileList[0], "UTF-8");
    reader.onload = () => {
      let piStationReport = new PIStation(reader.result.toString());
      this.piElements = piStationReport.piElements;
    };
  }
}
