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
    let one = new Point(+"0", +"2");
    let two = new Point(+"5", +"-5");
    let three = new Point(+"13", +"7");
    let four = new Point(+"8547277.1857", +"4554902.6646");
    let tr1 = new RightTriangle(one, two);
    let tr2 = new RightTriangle(two, three);
    let polVrah = new PoligonVrah(tr1, tr2);
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
  constructor(public start: Point, public end: Point) {}

  get UpDirection() {
    return this.end.y >= this.start.y;
  }

  get LeftDirection() {
    return this.end.x >= this.start.x;
  }

  get Quadrant() {
    let quadrant = "first";
    if (this.UpDirection && this.LeftDirection) {
      quadrant = "first";
    } else if (!this.UpDirection && this.LeftDirection) {
      quadrant = "second";
    } else if (!this.UpDirection && !this.LeftDirection) {
      quadrant = "third";
    } else if (this.UpDirection && !this.LeftDirection) {
      quadrant = "fourth";
    }

    return quadrant;
  }
  
  get horizontalAngleLess45() {
    return this.angleHorizontal<45
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
    return Math.abs(this.end.x - this.start.x);
  }

  public get angleVertical() {
    let cosAngle = this.CatetVertical / this.Hypotenuse;
    return (Math.acos(cosAngle) * 200) / Math.PI;
  }

  public get angleHorizontal() {
    let cosAngle = this.CatetHorizontal / this.Hypotenuse;
    return (Math.acos(cosAngle) * 200) / Math.PI;
  }

  public get Hypotenuse() {
    let dist = new Line(this.start, this.end);
    return dist.Distance;
  }
}

export class PoligonVrah {
  constructor(public first: RightTriangle, public second: RightTriangle) {
    if (this.first.UpDirection) {
      this.checkQuadrant(!this.second.UpDirection);
    } else {
      this.checkQuadrant(this.second.UpDirection);
    }
  }

  checkQuadrant(secondUpDirection: boolean) {
    if (secondUpDirection) {
      if (this.second.end.x >= this.second.start.x) {
        let polAngle = this.first.angleVertical + this.second.angleVertical;
        console.log(polAngle);
      } else {
        let angle = this.first.angleHorizontal - this.second.angleHorizontal;
        console.log(angle);
      }
    } else {
      if (this.first.angleHorizontal >= this.second.angleHorizontal) {
        let polAngle =
          this.first.angleVertical + this.second.angleHorizontal + 100;
        console.log(polAngle);
      } else {
        let polAngle =
          this.first.angleHorizontal + this.second.angleVertical + 100;
        console.log(polAngle);
      }
    }
  }
}
