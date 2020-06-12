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
    let one = new Point(+"0", +"0");
    let two = new Point(+"5", +"5");
    let three = new Point(+"13", +"1");
    let four = new Point(+"8547277.1857", +"4554902.6646");
    let triangle1 = new RightTriangle(one, two);
    triangle1.RightAngleDown;
    // let triangle3 = new RightTriangle(three, four);

    // console.log(triangle2.angleVertical);
    // console.log(triangle2.angleVertical + 100- triangle3.angleVertical+100);
  }
}

export class Point {
  constructor(public x: number, public y: number) {}
}

export class Line {
  constructor(public start: Point, public end: Point) {}

  private get DistanceX() {
    return Math.abs(this.end.x - this.start.x);
  }

  private get DistanceY() {
    return Math.abs(this.end.y - this.start.y);
  }

  get Distance() {
    return Math.sqrt(Math.pow(this.DistanceX, 2) + Math.pow(this.DistanceY, 2));
  }
}

export class RightTriangle {
  constructor(private start: Point, private end: Point) {}

  get UpDirection() {
    return this.end.y >= this.start.y;
  }

  public get RightAngleDown() {
    if (this.UpDirection) {
      return new Point(this.end.x, this.start.y);
    }
      return new Point(this.start.x, this.end.y);
  }

  public get RightAngleUp() {
    if (this.UpDirection) {
      return new Point(this.start.x, this.end.y);
    }
      return new Point(this.end.x, this.start.y);
  }

  public get CatetVertical() {
    return Math.abs(this.end.y - this.start.y);
  }

  public get CatetHorizontal() {
    return this.RightAngleDown.x - this.start.x;
  }

  public get angleVertical() {
    let cosAngle = this.CatetVertical / this.Hypotenuse;
    let angle = (Math.acos(cosAngle) * 200) / Math.PI;
    return angle;
  }

  public get Hypotenuse() {
    let dist = new Line(this.start, this.end);
    return dist.Distance;
  }

  public get angleHorizontal() {
    let cosAngle = this.CatetHorizontal / this.Hypotenuse;
    return (Math.acos(cosAngle) * 200) / Math.PI;
  }
}
