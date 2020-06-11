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
    let start = new Point(+"8547251.3163", +"4554911.912");
    let end = new Point(+"8547258.1907", +"4554925.707");

    let triangle1 = new Triangle(start, end);

    let rightAngleX = end.x - end.x;
    console.log(rightAngleX);
    let rightAngleY = end.y - start.y;
    console.log(rightAngleY);
    let cosAngle = rightAngleY / distanceHypotenuse;
    console.log(cosAngle);

    let angle = (Math.acos(cosAngle) * 200) / Math.PI;
    console.log(angle);
  }
}

export class Point {
  constructor(public x: number, public y: number) {}
}

export class Triangle {
  constructor(private start: Point, private end: Point) {
    let distanceX = end.x - start.x;
    console.log(distanceX);
    let distanceY = end.y - start.y;
    console.log(distanceY);

    let distanceHypotenuse = Math.sqrt(
      Math.pow(distanceX, 2) + Math.pow(distanceY, 2)
    );
    console.log(distanceHypotenuse);
  }

  public get DistanceX(){
    return 
  }
}
