// create a constructor
// its instances will have a [[prototype]] of
// some object that you define

function Person(name) {
  // when calling with new
  // this = {};
  this.name = name;
  this.weight = 100;
  // return this;
  // every object / instance created by this constructor
  // will use Person.prototype as its [[prototype]]
  // Person.prototype = {} // <-- will be prototype of every instance
  this.f = function() {};
}
// const p1 = new Person(...)
// const p2 = new Person(...)
Person.prototype.eat = function() {
  this.weight += 1;
};

Person.prototype.greet = function(greeting) {
  console.log(greeting, 'I\'m', this.name);
};

function Student(name, netid) {
  // this = {}
  // ^^^^ <--- we want this to be "this"
  Person.call(this, name); // kind of like super()
  // sets up name and weight
  this.netid = 'efg456';
}

// we has methods!!!!
Student.prototype = Object.create(Person.prototype);




/*
const p = Person('Carol');
console.log(p);
console.log(name);
*/
/*
const p = new Person('Alice');
p.eat();
console.log(p.weight);
p.greet('Hi');
console.log('name:', p.name);
console.log('name?', p.hasOwnProperty('name'));
console.log('is Person.prototype [[prototype]]?', Object.getPrototypeOf(p) === Person.prototype);
console.log('eat?', p.hasOwnProperty('eat'));

*/
const s = new Student('Frank', 'fgh789');
console.log('name', s.hasOwnProperty('name')); // yes
console.log('netid', s.hasOwnProperty('netid')); // yes
console.log(Object.getPrototypeOf(s) == Person.prototype); // false
console.log(Object.getPrototypeOf(s) == Student.prototype); // true
s.eat()
s.eat()
s.eat()
console.log(s.weight);









/*
 
 // easy way is ... create chain w/ Object.create
const protoPerson = {name: 'bob'};

const s = Object.create(protoPerson);
s.netid = 'bcd123';
console.log(s.hasOwnProperty('name')); // false (because defined on prototype)
console.log(s.hasOwnProperty('netid')); // true
console.log(s.name);
console.log(Object.getPrototypeOf(s) === protoPerson);
*/


