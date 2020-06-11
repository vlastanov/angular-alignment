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

    let line=new Line(start, end)

    let triangle1 = new Triangle(start, end);

    console.log(triangle1.angleOne);
  }
}

export class Point {
  constructor(public x: number, public y: number) {}
}

export class Line{
  constructor(public start:Point, public end:Point){}  

  private get DistanceX() {
    return this.end.x - this.start.x;
  }

  private get DistanceY() {
    return this.end.y - this.start.y;
  }

  get Distance(){    
    return Math.sqrt(Math.pow(this.DistanceX, 2) + Math.pow(this.DistanceY, 2));
  }
}

export class Triangle {
  constructor(private start: Point, private end: Point) {
    // console.log(this.DistanceX);
    // console.log(this.DistanceY);
    // console.log(this.DistanceHypotenuse);`
  }

  public get PointRightAngle() {
    let x = this.end.x;
    let y = this.start.y;
    return new Point(x, y);
  }

  public get DistanceX() {
    return this.end.x - this.start.x;
  }

  public get DistanceY() {
    return this.end.y - this.start.y;
  }

  public get DistanceHypotenuse() {
    return Math.sqrt(Math.pow(this.DistanceX, 2) + Math.pow(this.DistanceY, 2));
  }

  public get angleOne() {
    let rightAngleX = this.end.x - this.PointRightAngle.x;
    let rightAngleY = this.PointRightAngle.y - this.start.y;
    let cosAngle = rightAngleY / this.DistanceHypotenuse;
    // console.log(rightAngleX);
    // console.log(rightAngleY);
    // console.log(cosAngle);

    return (Math.acos(cosAngle) * 200) / Math.PI;
  }
}
