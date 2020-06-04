import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-test7",
  templateUrl: "./test7.component.html",
  styleUrls: ["./test7.component.css"]
})
export class Test7Component implements OnInit {
  form: FormGroup;
  kriva: PrehodKragovaPrehod;
  podrobniTochkiPrehod;

  constructor(private fb: FormBuilder) {}

  save() {
    let input = {
      r: this.form.get("r").value,
      beta: this.form.get("beta").value,
      A: this.form.get("A").value
    };

    this.kriva = new PrehodKragovaPrehod(+input.r, +input.beta, +input.A);

    this.kriva.kragova.getCircularPiketaj(40);
    this.kriva.prehod.getSpiralPiketaj();
    this.podrobniTochkiPrehod = this.kriva.prehod.podrobniTochki;
  }

  ngOnInit() {
    this.form = this.fb.group({
      r: 50,
      beta: 60,
      A: 30
    });
  }
}

export class PrehodKragovaPrehod {
  constructor(public r: number, public beta: number, public A: number) {}

  get deltaR() {
    return Math.pow(this.prehod.Lp, 2) / (24 * this.r);
  }

  get xm() {
    return this.prehod.endX - this.r * Math.sin(this.prehod.thethaRad);
  }

  get T() {
    let deltaHalfRadians = ((this.kragova.delta / 2) * Math.PI) / 200;
    let Tm = (this.r + this.deltaR) * Math.tan(deltaHalfRadians);
    return this.xm + Tm;
  }

  get bisektrisa() {
    let deltaHalfRadians = ((this.kragova.delta / 2) * Math.PI) / 200;
    return (this.r + this.deltaR) / Math.cos(deltaHalfRadians) - this.r;
  }

  get Dz() {
    return (
      (((this.kragova.delta - 2 * this.prehod.thethaGrad) * Math.PI) / 200) *
      this.r
    );
  }

  get TotalD() {
    return 2 * this.prehod.Lp + this.Dz;
  }

  get prehod() {
    return new PrehodnaElementi(this.A, this.r);
  }

  get kragova() {
    return new KragovaElementi(this.r, this.beta, this.A);
  }
}

export class PrehodnaElementi {
  podrobniTochki = [];
  constructor(public A: number, public r: number) {
    this.getSpiralPiketaj();
  }

  get Lp() {
    return (this.A * this.A) / this.r;
  }

  get thethaRad() {
    return this.Lp / (2 * this.r);
  }

  get thethaGrad() {
    return (this.thethaRad * 200) / Math.PI;
  }

  get endX() {
    return this.Lp - Math.pow(this.Lp, 5) / (40 * Math.pow(this.A, 4));
  }

  get endY() {
    return (
      Math.pow(this.Lp, 3) / (6 * Math.pow(this.A, 2)) -
      Math.pow(this.Lp, 7) / (336 * Math.pow(this.A, 6))
    );
  }

  getSpiralPiketaj() {
    console.log(this.Lp);
    let num = this.Lp / 10;
    for (let i = 0; i < num; i++) {
      let x = 10 + i * 10;
      let xk = x - Math.pow(x, 5) / (40 * Math.pow(this.A*(x/this.Lp), 4));
      let yk =
        Math.pow(x, 3) / (6 * Math.pow(this.A*(x/this.Lp), 2)) -
        Math.pow(x, 7) / (336 * Math.pow(this.A*(x/this.Lp), 6));

      this.podrobniTochki.push({ x: x, xk: xk, yk: yk });
    }
    this.podrobniTochki.unshift({x:0, xk:0, yk:0})
    this.podrobniTochki.push({x:this.Lp, xk:this.endX, yk:this.endY})
    console.log(this.podrobniTochki);
  }
}

export class KragovaElementi {
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
