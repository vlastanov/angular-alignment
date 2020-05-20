import { Component, OnInit } from "@angular/core";
import {  FormBuilder,  FormGroup,} from "@angular/forms";

@Component({
  selector: "app-broad-lane",
  templateUrl: "./broad-lane.component.html",
  styleUrls: ["./broad-lane.component.css"]
})
export class BroadLaneComponent implements OnInit {
  form: FormGroup;
  result=''
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      numberL: "2",
      width: "3.25",
      radiusPr: "150"
    });
  }

  save() {
    let input = {
      numberLanes: this.form.get("numberL").value,
      laneWidth: this.form.get("width").value,
      radiusPr: this.form.get("radiusPr").value
    };
    let calc = new Calculate(
      input.numberLanes,
      input.laneWidth,
      input.radiusPr
    );
    this.result=calc.method1();
  }
}

class Calculate {
  needBroadening;

  constructor(
    private numberLanes: number,
    private laneWidth: number,
    private radiusPr: number
  ) {}

  method1():string {

    let widthAllLanes = this.numberLanes * this.laneWidth;
    if (widthAllLanes <= 6) {
      this.needBroadening = this.radiusPr >= 30 && this.radiusPr <= 400;
    } else {
      this.needBroadening = this.radiusPr >= 30 && this.radiusPr <= 200;
    }

  let result=''
    if (this.needBroadening) {
      let maxE = (50 * this.numberLanes) / this.radiusPr;

      if(maxE<=0.25){
        return 'няма нужда от уширение, тъй като то е по-малко от 0.25 m'
      }
      maxE = Math.round((maxE + Number.EPSILON) * 100) / 100;
      result=`Уширението е: ${maxE} m`
      console.log(maxE);
    } else {
      result="няма нужда от уширение";
    }
    return result
  }
}

