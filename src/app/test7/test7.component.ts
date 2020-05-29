import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test7',
  templateUrl: './test7.component.html',
  styleUrls: ['./test7.component.css']
})
export class Test7Component implements OnInit {
  r=50
  beta=50
  tangenta
  bisektrisa


  constructor() { }

  ngOnInit() {
    let delta=200-this.beta
    let deltaHalfRadians=(delta/2)*Math.PI/200

    this.tangenta=this.r*Math.tan(deltaHalfRadians)
    this.bisektrisa=this.r*(1/Math.cos(deltaHalfRadians)-1)
  }

}