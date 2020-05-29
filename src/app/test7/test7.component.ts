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


  constructor() { }

  ngOnInit() {
    let delta=200-this.beta
    let deltaHalf=delta/2

    this.tangenta=this.r*Math.tan(deltaHalf*Math.PI/200)
  }

}