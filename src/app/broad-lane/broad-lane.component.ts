import { Component, OnInit } from "@angular/core";
import {
  NgModel,
  FormBuilder,
  FormGroup,
  AbstractControl,
  Validators,
  ValidatorFn
} from "@angular/forms";

@Component({
  selector: "app-broad-lane",
  templateUrl: "./broad-lane.component.html",
  styleUrls: ["./broad-lane.component.css"]
})
export class BroadLaneComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      numberLanes:'2',
      laneWidth: "8",
      radiusPr: "150"
    });
  }

  save() {
    let input = {
      laneWidth: this.form.get("laneWidth").value,
      radiusPr: this.form.get("radiusPr").value
    };
    let calc = new Calculate(input.laneWidth, input.radiusPr);
  }
}

class Calculate {
  
  needBroadening

  constructor(private laneWidth: number, private radiusPr: number) {
    this.checkLaneWidth();
    this.method1()
  }
  checkLaneWidth() {
    if(this.laneWidth<=6){
    this.needBroadening= this.radiusPr>=30 && this.radiusPr<=400
    }else{
    this.needBroadening= this.radiusPr>=30 && this.radiusPr<=200
    }
  }
  method1(){
    if(this.needBroadening){

    }
  }
  method2(){
  }
}
