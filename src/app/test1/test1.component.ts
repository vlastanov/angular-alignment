
import {
  OnInit ,
  Component,
  VERSION,
  ViewChildren,
  QueryList,
  ElementRef,
  ViewChild
} from "@angular/core";
import {
  NgModel,
  FormBuilder,
  FormGroup,
  AbstractControl,
  Validators,
  ValidatorFn
} from "@angular/forms";
import { Subscription } from "rxjs";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}