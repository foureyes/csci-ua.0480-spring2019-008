class Person {
  constructor(name) {
    this.name = name;
    this.weight = 100;
  }

  eat() {
    this.weight += 1;
  }

  greet(greeting) {
    console.log(greeting, this.name); 
  }
}

class Student extends Person {
  constructor(name, netid) {
    super(name); 
    this.netid = netid;
  }
}

const s = new Student('Frank', 'fgh789');
console.log('name', s.hasOwnProperty('name')); // yes
console.log('netid', s.hasOwnProperty('netid')); // yes
console.log('eat', s.hasOwnProperty('eat')); // ?
console.log('Person.prototype?', Object.getPrototypeOf(s) == Person.prototype); // false
console.log('Student.prototype?', Object.getPrototypeOf(s) == Student.prototype); // true
console.log('does Person.prototype have eat?', Person.prototype.hasOwnProperty('eat'));
s.eat()
s.eat()
s.eat()
console.log(s.weight);

const s2 = Student('Gary', 'ghi123');










