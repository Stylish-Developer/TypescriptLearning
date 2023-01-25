// TYPESCRIPT

// --> BASIC TYPES

let count: number = 10;
let personName: string = "gowtham";
let isCond: boolean = true;
let bucket: any = 100;

setTimeout(() => {
  bucket = "gowtham";
  //   console.log(`Bucket value ${bucket} as a string`);
  setTimeout(() => {
    bucket = true;
    // console.log(`Bucket value ${bucket} as a boolean`);
    setTimeout(() => {
      bucket = "Back to  100";
      //   console.log(`Bucket value ${bucket}`);
    }, 6000);
  }, 4000);
}, 2000);

// console.log(`Number ${count}`);
// console.log(`PersonName ${personName}`);
// console.log(`currentCondition ${isCond}`);
// console.log(`Bucket value ${bucket} as a number`);

// ------------------------------------------------------------

// --> VARIABLE DECLARATION
let state: number;

const state_status = setInterval(() => {
  state = Math.floor(Math.random() * 20);
  // console.log( `State variable has value now: ${state}` );
}, 2000);

setTimeout(() => {
  // console.log('Intervel is cleared');
  clearInterval(state_status);
}, 8000);
  
// ------------------------------------------------------------

// --> ARRAY VALUE

const id: number[] = [1, 2, 3, 4, 5]; // --> assign a type to entire value
const pid: any[] = [1, "gowtham", "software developer"]; // --> assign any type to entire value

// console.log(`Number type array Value ${id}`);
// console.log(`Any type array Value ${pid}`);

// ------------------------------------------------------------

// --> TUPLE

let arr: [number, string, boolean] = [10, "gowtham", true]; // --> we can specify exact types inside of the array

const op = arr.forEach((x) => {
  //   console.log(`arr value with exact type ${x}`);
});

// console.log(`arr value with exact type ${op}`);

// --> TUPLE ARRAY

// **** type 1 **** = declaration type
let arr_1: [string, number][];

arr_1 = [["gowtham", 24]];

// console.log(`arr_1 value ${arr_1}`);

// **** type 2 **** = direct assign type
let arr_2: [string, number][] = [
  ["jin", 24],
  ["ak", 51],
];

// console.log(`arr_2 value ${arr_2}`);

// ------------------------------------------------------------

// --> UNION

let tin: number | string = 22; // --> It is used to a particular variable to be able to hold more then one type. we can do that with union

setTimeout(() => {
  tin = "gowthamsampathkumar@outloook.com";
  // console.log(`now tin variable hold a string type value`,tin);
}, 3000);

// console.log(`now tin variable hold a number type value by default`,tin);

// ------------------------------------------------------------

// --> ENUM TYPE

// enums basically allow us to define a set of named constants either numeric or string

// default
/* enum obj_1 {
  up,
  down,
  left,
  right,
} */

// if suppose
/* enum obj_1 {
    up = 1,
    down,
    left,
    right,
  }
   */

enum obj_1 {
  up = "up",
  down = "down",
  left = "left",
  right = "right",
}
// console.log(`enum concept for obj_1 ${obj_1.left}`);

// ------------------------------------------------------------

// --> OBJECT

// we can add type for each of this object value

// normal object
const person = {
  name: "gowtham",
  age: 24,
  job: "software developer",
  contact: "9655689227",
};

// typescript object
// **** type 1 ****
const copyOfPerson: {
  name: string;
  age: number;
  job: string;
  contact: string;
} = {
  name: "gowtham",
  age: 24,
  job: "software developer",
  contact: "9655689227",
};
// **** type 2 ****
// we can success the same as before with the help of "type"

type objectPerson = {
  name: string;
  age: number;
  job: string;
  contact: string;
};

const copyOfPerson_2: objectPerson = {
  name: "gowtham",
  age: 24,
  job: "software developer",
  contact: "9655689227",
};

// console.log(`It's a normal person object`, person);
// console.log(`It's a copyOfPerson typescript object with type_1`, copyOfPerson);
// console.log(`It's a copyOfPerson typescript object with type_2`, copyOfPerson);

// ------------------------------------------------------------

// TYPE ASSERTION

// type assertion is explicitly telling to the compiler that we want to treat an entity as a different type
// it has 2 types
// 1 syntax type ex: <number>
// 2 as type  ex: variable as number

const a: any = 1000;
const b = <number>a;
const c = a as number;

// console.log(`b, ${b}`);
// console.log(`c, ${c}`);

// ------------------------------------------------------------

// --> FUNCTION

function sum(x: number, y: number): number {
  return x + y;
}

const output: any = sum(10, 20);
// console.log(`function output`, output);

// if suppose a function doesn't return anything use : void

function alertMsg(message: string | number): void {
  //   console.log(message);
}

alertMsg("Hello World");

// ------------------------------------------------------------

// --> INTERFACE

// interface is a kind of specific structure to an object or a function

interface obj_spec_struc {
  emp_id: number;
  emp_name: string;
  readonly emp_role: string;
  emp_emailId?: string; // optional property
}
const emp_details: obj_spec_struc = {
  emp_id: 1,
  emp_name: "gowtham",
  emp_role: "software developer",
  // emp_emailId: 'gowthamsampathkumar@outlook.com'
};

// emp_details.emp_role = "reactJS developer";
emp_details.emp_name = "stylish_developer";
// console.log(`employee detail ${JSON.stringify(emp_details)}`);

// function interface

interface mathfun_interface {
  (x: number, y: number): number;
}

const add: mathfun_interface = (x: number, y: number) => x + y;
const sub: mathfun_interface = (x: number, y: number) => x - y;

// console.log("addition of two numbers", add(5, 10));
// console.log("subtraction of two numbers", sub(5, 10));

// ------------------------------------------------------------

// --> CLASS

// classes are used to create objects

// dataModifiers - public, private, protected
// by default is public
// if private we cant access outside the class. we can only accessible with in the class not even console.
// if protected we can access with in the class or any class that is extended from this class

//  interface concept in class

interface user_interface {
  name: string;
  age: number;
  render(): string;
}
class user implements user_interface {
  // this is the important step *** implements keyword ***
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  render() {
    return `${this.name} is now registered!`;
  }
}

const user1 = new user("gowtham", 24);
const user2 = new user("jin", 23);

// subclasses

class userInfo extends user {
  position: string;
  constructor(name: string, age: number, job: string) {
    super(name, age);
    this.position = job;
  }
}

const outcome = new userInfo("gowtham S", 24, "Developer");

/* console.log(user1);
console.log(user2);
console.log(user1.render());
console.log(user2.render()); */

// console.log(outcome.render());
// console.log(outcome.position);

// ------------------------------------------------------------

// --> GENERICS
// basically it is used to  build reuseable components
// ex:
// normal function

/* function test(items: any[]): any[]{
return new Array().concat(items);
}

let numArray = test([1,2,3,4,5]);
let stringArray = test(['a','b','c','d','e']);

console.log(numArray);
console.log(stringArray); */

//generic function

// it is used to  build reuseable components

function test<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = test<number>([1, 2, 3, 4, 5]);
let stringArray = test<string>(["a", "b", "c", "d", "e"]);

console.log(numArray);
console.log(stringArray);

// ------------------------------------------------------------
