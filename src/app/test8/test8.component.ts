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

    let rightAngleX = end.x - triangle1.PointRightAngle.x;
    console.log(rightAngleX);
    let rightAngleY = triangle1.PointRightAngle.y - start.y;
    console.log(rightAngleY);
    let cosAngle = rightAngleY / triangle1.DistanceHypotenuse;
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
    console.log(this.DistanceX);
    console.log(this.DistanceY);
    console.log(this.DistanceHypotenuse);
  }

  public get PointRightAngle(){

    let x = this.end.x;
    let y = this.start.y;
    return new Point(x,y)
  }

  public get DistanceX(){
    return this.end.x - this.start.x
  }

  public get DistanceY(){
    return this.end.y - this.start.y
  }

  public get DistanceHypotenuse(){
    return  Math.sqrt(
      Math.pow(this.DistanceX, 2) + Math.pow(this.DistanceY, 2)
    )
  }
}
