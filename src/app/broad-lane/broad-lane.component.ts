import { Component, OnInit } from '@angular/core';
import {
  NgModel,
  FormBuilder,
  FormGroup,
  AbstractControl,
  Validators,
  ValidatorFn
} from "@angular/forms";

@Component({
  selector: 'app-broad-lane',
  templateUrl: './broad-lane.component.html',
  styleUrls: ['./broad-lane.component.css']
})
export class BroadLaneComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
  }

}