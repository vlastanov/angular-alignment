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
    let o1 = new Point(+"35.8559", +"35.7794");
    let o2 = new Point(+"59.911", +"89.6766");
    let o3 = new Point(+"88.7243", +"63.5206");
    let o4 = new Point(+"111.9865", +"86.242");
    let o5 = new Point(+"127.3183", +"73.8245");
    let o6 = new Point(+"110.9291", +"54.2736");
    let o7 = new Point(+"99.8267", +"59.0292");
    let o8 = new Point(+"88.9887", +"43.4413");
    let o9 = new Point(+"62.8188", +"50.0463");

    let four = new Point(+"8547277.1857", +"4554902.6646");
    let tr1 = new RightTriangle(o1, o2);
    let tr2 = new RightTriangle(o2, o3);
    let tr3 = new RightTriangle(o3, o4);
    let tr4 = new RightTriangle(o4, o5);
    let tr5 = new RightTriangle(o5, o6);
    let tr6 = new RightTriangle(o6, o7);
    let tr7 = new RightTriangle(o7, o8);
    let tr8 = new RightTriangle(o8, o9);
    let tr9 = new RightTriangle(o9, o1);

    let po1 = new PoligonVrah(tr1, tr2);
    let po2 = new PoligonVrah(tr2, tr3);
    let po3 = new PoligonVrah(tr3, tr3);
    let po4 = new PoligonVrah(tr3, tr4);
    let po5 = new PoligonVrah(tr4, tr5);
    let po6 = new PoligonVrah(tr5, tr6);
    let po7 = new PoligonVrah(tr6, tr7);
    let po8 = new PoligonVrah(tr7, tr8);
    let po9 = new PoligonVrah(tr8, tr9);
    let po10 = new PoligonVrah(tr9, tr1);
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
    return this.angleHorizontal < 45;
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
  angle;
  constructor(public first: RightTriangle, public second: RightTriangle) {
    if(this.first.Quadrant === 'first'){
    this.firstUpLeft();
    }else  if(this.first.Quadrant === 'second'){
    this.firstDownLeft();
    } else if(this.first.Quadrant === 'third'){
    this.firstDownRight();
    }else if(this.first.Quadrant === 'fourth'){
    this.firstUpRight()
    }
    console.log(this.angle);
  }

  firstUpLeft() {
    if (this.second.Quadrant === "first") {
      if (this.second.horizontalAngleLess45) {
        this.angle =
          this.first.angleVertical + 100 + this.second.angleHorizontal;
      } else {
        this.angle =
          this.first.angleHorizontal + 100 + this.second.angleVertical;
      }
    } else if (this.second.Quadrant === "second") {
      this.angle = this.first.angleVertical + this.second.angleVertical;
    } else if (this.second.Quadrant === "third") {
      this.angle = Math.abs(
        this.first.angleVertical - this.second.angleVertical
      );
    } else if (this.second.Quadrant === "fourth") {
      this.angle = this.first.angleHorizontal + this.second.angleHorizontal;
    }
  }

  firstDownLeft() {
    if (this.second.Quadrant === "first") {
      this.angle = this.first.angleVertical + this.second.angleVertical;
    } else if (this.second.Quadrant === "second") {
      if (this.second.horizontalAngleLess45) {
        console.log(this.second.angleHorizontal);
        this.angle =
          this.first.angleVertical + 100 + this.second.angleHorizontal;
      } else {
        this.angle =
          this.first.angleHorizontal + 100 + this.second.angleVertical;
      }
    } else if (this.second.Quadrant === "third") {
      this.angle = Math.abs(
        this.first.angleHorizontal + this.second.angleHorizontal
      );
    } else if (this.second.Quadrant === "fourth") {
      this.angle = Math.abs(
        this.first.angleHorizontal - this.second.angleHorizontal
      );
    }
  }

  firstDownRight() {
    if (this.second.Quadrant === "first") {
      this.angle = Math.abs(
        this.first.angleHorizontal - this.second.angleHorizontal
      );
    } else if (this.second.Quadrant === "second") {
      this.angle = this.first.angleHorizontal + this.second.angleHorizontal;
    } else if (this.second.Quadrant === "third") {
      if (this.second.horizontalAngleLess45) {
        this.angle =
          this.first.angleVertical + 100 + this.second.angleHorizontal;
      } else {
        this.angle =
          this.first.angleHorizontal + 100 + this.second.angleVertical;
      }
    } else if (this.second.Quadrant === "fourth") {
      this.angle = this.first.angleVertical + this.second.angleVertical;
    }
  }

  firstUpRight() {
    if (this.second.Quadrant === "first") {
      this.angle = this.first.angleHorizontal + this.second.angleHorizontal;     
    } else if (this.second.Quadrant === "second") {
       this.angle = Math.abs(
        this.first.angleHorizontal - this.second.angleHorizontal
      );
    } else if (this.second.Quadrant === "third") {
       this.angle = this.first.angleVertical + this.second.angleVertical;
     
    } else if (this.second.Quadrant === "fourth") {
      if (this.second.horizontalAngleLess45) {
        this.angle =
          this.first.angleVertical + 100 + this.second.angleHorizontal;
      } else {
        this.angle =
          this.first.angleHorizontal + 100 + this.second.angleVertical;
      }
    }
  }
}
