import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-test8",
  templateUrl: "./test8.component.html",
  styleUrls: ["./test8.component.css"]
})
export class Test8Component implements OnInit {
  constructor() {}

  ngOnInit() {
    this.method();
  }

  method() {
    let start=new Point(+"8547251.3163",+"4554911.912")
    let end=new Point(+"8547258.1907",+"4554925.707")

    let deltaX = end.x - start.x;
    console.log(deltaX);
    let deltaY = end.y - start.y;
    console.log(deltaY);

    let distanceHypotenuse = Math.sqrt(
      Math.pow(deltaX, 2) + Math.pow(deltaY, 2)
    );
    console.log(distanceHypotenuse);


    let rightAngleX = end.x - end.x;
    console.log(rightAngleX);
    let rightAngleY = end.y - start.y;
    console.log(rightAngleY);
    let cosAngle = rightAngleY / distanceHypotenuse;
    console.log(cosAngle);

    let angle=Math.acos(cosAngle)*200/Math.PI
    console.log(angle)

  }
}

export class Point{
  constructor(public x:number, public y:number){}
}
