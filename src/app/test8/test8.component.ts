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
    let startX = "8547251.3163";
    let startY = "4554911.912";
    let endX = "8547258.1907";
    let endY = "4554925.707";

    let deltaX = +endX - +startX;
    console.log(deltaX);
    let deltaY = +endY - +startY;
    console.log(deltaY);

    let distanceHypotenuse = Math.sqrt(
      Math.pow(deltaX, 2) + Math.pow(deltaY, 2)
    );
    console.log(distanceHypotenuse);


    let rightAngleX = +endX - +endX;
    console.log(rightAngleX);
    let rightAngleY = +endY - +startY;
    console.log(rightAngleY);
    let cosAngle = rightAngleY / distanceHypotenuse;
    console.log(cosAngle);

    let angle=Math.acos(cosAngle)*200/Math.PI
    console.log(angle)

  }
}
