// 0480 003
// Joe Versoza

// tutor?
// homework?
// what's good? what's not so good?
// too hard? too difficult?





function Monster(name) {
  // new == 
  // this = {}
  this.name = name;
  this.scary = 10;
  // return this
  // Monster.prototype = {} <--- will be the prototype of every
  // instance created from this constructor
}
const m1 = new Monster('mummy');
const m2 = new Monster('vampire');

Monster.prototype.scare = function() {console.log('boo!');};
Object.getPrototypeOf(m1) === Monster.prototype

class Monster {
  constructor() {
  
  }
  scare() {
  
  }
}
// Monster.prototype.scare <---



/*
const m = Monster('mummy');
console.log(m);
console.log(scary);
console.log(name);
*/




