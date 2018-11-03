'use strict';

const { PI, sqrt } = Math;
const square = x => x * x;

// Truncated cone

const volume = (h, r1, r2) => (PI * h / 3) *
  (square(r1) + r1 * r2 + square(r2));

const area = (h, r1, r2) => PI * (
  square(r1) + square(r2) +
  sqrt(square(h) + square(r2 - r1)) * (r1 + r2)
);

// Reactive cone

class Cone {
  constructor(r1, r2, h) {
    this.cone = { r1, r2, h };
    this.calculate();
  }
  calculate() {
    const cone = this.cone;
    cone.v = volume(cone.h, cone.r1, cone.r2);
    cone.s = area(cone.h, cone.r1, cone.r2);
  }
  set r1(x) {
    this.cone.r1 = x;
    this.calculate();
  }
  set r2(x) {
    this.cone.r2 = x;
    this.calculate();
  }
  set h(x) {
    this.cone.h = x;
    this.calculate();
  }
  get v() {
    return this.cone.v;
  }
  get s() {
    return this.cone.s;
  }
}

// Usage

const cone = new Cone(10, 15, 7);
console.dir({ v: cone.v, s: cone.s });
cone.h = 8;
console.dir({ v: cone.v, s: cone.s });
