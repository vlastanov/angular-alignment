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

  xk
  yk

  constructor() { }

  ngOnInit() {
    this.delta=(200-this.beta)
    let deltaHalfRadians=(this.delta/2)*Math.PI/200

    this.tangenta=this.r*Math.tan(deltaHalfRadians)
    this.bisektrisa=this.r*(1/Math.cos(deltaHalfRadians)-1)
    this.D=(Math.PI*this.r*this.delta)/200

    this.A=this.r
    this.Lp=(this.A*this.A)/this.r
    this.deltaR=(this.Lp*this.Lp)/(24*this.r)
    
    this.thethaRad=this.Lp/(2*this.r);  
    this.thethGrad=(this.thethaRad*200)/Math.PI

    // this.getCircularPiketaj(40)
// console.log(Math.pow(3,3))
    this.xk=this.Lp -Math.pow(this.Lp,5)/(40*Math.pow(this.Lp,4))
    this.yk=Math.pow(this.Lp,3)/(6*Math.pow(this.Lp,2))- (Math.pow(this.Lp,7))/(336*Math.pow(this.Lp,6))



  }

  getCircularPiketaj(x){
    let y=this.r - Math.sqrt(this.r*this.r -x*x)
    console.log(y)
  }

}