import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test7',
  templateUrl: './test7.component.html',
  styleUrls: ['./test7.component.css']
})
export class Test7Component implements OnInit {

  r=50
  beta=50
  delta
  tangenta
  bisektrisa
  D
  A
  Lp
  deltaR
  thethaRad
  thethGrad

  constructor() { }

  ngOnInit() {
    this.delta=(200-this.beta)
    let deltaHalfRadians=(this.delta/2)*Math.PI/200

    this.tangenta=this.r*Math.tan(deltaHalfRadians)
    this.bisektrisa=this.r*(1/Math.cos(deltaHalfRadians)-1)
    this.D=(Math.PI*this.r*this.delta)/200

    this.A=this.r/3
    this.Lp=(this.A*this.A)/this.r
    this.deltaR=(this.Lp*this.Lp)/(24*this.r)
    
    this.thethaRad=this.Lp/(2*this.r);  
    this.thethGrad=(this.thethaRad*200)/Math.PI




  }

}