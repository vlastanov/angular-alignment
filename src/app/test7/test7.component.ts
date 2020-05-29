import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-test7",
  templateUrl: "./test7.component.html",
  styleUrls: ["./test7.component.css"]
})
export class Test7Component implements OnInit {
  form: FormGroup;
  horKrivaEl: HorizontalnaKrivaElementi;
  prehodnaKrivaEl: PrehodnaKrivaElementi;

  constructor(private fb: FormBuilder) {}

  save() {
    let input = {
      r: this.form.get("r").value,
      beta: this.form.get("beta").value,
      A: this.form.get("A").value
    };

    this.horKrivaEl = new HorizontalnaKrivaElementi(
      +input.r,
      +input.beta,
      +input.A
    );

    this.horKrivaEl.getCircularPiketaj(40);
    this.horKrivaEl.prehod.getSpiralPiketaj();
  }

  ngOnInit() {
    this.form = this.fb.group({
      r: 100,
      beta: 80,
      A: 40
    });
  }
}

export class HorizontalnaKrivaElementi {
  constructor(public r: number, public beta: number, public A: number) {}

  get delta() {
    return 200 - this.beta;
  }

  get tangenta() {
    let deltaHalfRadians = ((this.delta / 2) * Math.PI) / 200;
    return this.r * Math.tan(deltaHalfRadians);
  }

  get bisektrisa() {
    let deltaHalfRadians = ((this.delta / 2) * Math.PI) / 200;
    return this.r * (1 / Math.cos(deltaHalfRadians) - 1);
  }

  get D() {
    return (Math.PI * this.r * this.delta) / 200;
  }

  get prehod() {
    return new PrehodnaKrivaElementi(this.A, this.r);
  }

  getCircularPiketaj(x) {
    let y = this.r - Math.sqrt(this.r * this.r - x * x);
    console.log(y);
  }
}

export class PrehodnaKrivaElementi {
  podrobniTochki = [];
  constructor(public A: number, public r: number) {}

  get Lp() {
    return (this.A * this.A) / this.r;
  }

  get thethaRad() {
    return this.Lp / (2 * this.r);
  }

  get thethaGrad() {
    return (this.thethaRad * 200) / Math.PI;
  }

  get deltaR() {
    return Math.pow(this.Lp, 2) / (24 * this.r);
  }

  get endX() {
    return this.Lp - Math.pow(this.Lp, 5) / (40 * Math.pow(this.Lp, 4));
  }

  get endY() {
    return (
      Math.pow(this.Lp, 3) / (6 * Math.pow(this.Lp, 2)) -
      Math.pow(this.Lp, 7) / (336 * Math.pow(this.Lp, 6))
    );
  }

  getSpiralPiketaj() {
    console.log(this.Lp);
    let num = this.Lp / 10;
    for (let i = 0; i < num; i++) {
      let x = 10 + i * 10;
      let xk = x - Math.pow(x, 5) / (40 * Math.pow(x, 4));
      let yk =
        Math.pow(x, 3) / (6 * Math.pow(x, 2)) -
        Math.pow(x, 7) / (336 * Math.pow(x, 6));

      this.podrobniTochki.push({ xk, yk });
    }
    console.log(this.podrobniTochki);
  }
}

export class KragovaElementi{
  constructor(public r: number, public beta: number, public A: number) {}

  get delta() {
    return 200 - this.beta;
  }

  get tangenta() {
    let deltaHalfRadians = ((this.delta / 2) * Math.PI) / 200;
    return this.r * Math.tan(deltaHalfRadians);
  }

  get bisektrisa() {
    let deltaHalfRadians = ((this.delta / 2) * Math.PI) / 200;
    return this.r * (1 / Math.cos(deltaHalfRadians) - 1);
  }

  get D() {
    return (Math.PI * this.r * this.delta) / 200;
  }

  getCircularPiketaj(x) {
    let y = this.r - Math.sqrt(this.r * this.r - x * x);
    console.log(y);
  }

}

export class PrehodnaElementi{
  
}
