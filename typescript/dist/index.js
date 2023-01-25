"use strict";
// TYPESCRIPT
// --> BASIC TYPES
let count = 10;
let personName = "gowtham";
let isCond = true;
let bucket = 100;
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
let state;
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
const id = [1, 2, 3, 4, 5]; // --> assign a type to entire value
const pid = [1, "gowtham", "software developer"]; // --> assign any type to entire value
// console.log(`Number type array Value ${id}`);
// console.log(`Any type array Value ${pid}`);
// ------------------------------------------------------------
// --> TUPLE
let arr = [10, "gowtham", true]; // --> we can specify exact types inside of the array
const op = arr.forEach((x) => {
    //   console.log(`arr value with exact type ${x}`);
});
// console.log(`arr value with exact type ${op}`);
// --> TUPLE ARRAY
// **** type 1 **** = declaration type
let arr_1;
arr_1 = [["gowtham", 24]];
// console.log(`arr_1 value ${arr_1}`);
// **** type 2 **** = direct assign type
let arr_2 = [
    ["jin", 24],
    ["ak", 51],
];
// console.log(`arr_2 value ${arr_2}`);
// ------------------------------------------------------------
// --> UNION
let tin = 22; // --> It is used to a particular variable to be able to hold more then one type. we can do that with union
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
var obj_1;
(function (obj_1) {
    obj_1["up"] = "up";
    obj_1["down"] = "down";
    obj_1["left"] = "left";
    obj_1["right"] = "right";
})(obj_1 || (obj_1 = {}));
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
const copyOfPerson = {
    name: "gowtham",
    age: 24,
    job: "software developer",
    contact: "9655689227",
};
const copyOfPerson_2 = {
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
const a = 1000;
const b = a;
const c = a;
// console.log(`b, ${b}`);
// console.log(`c, ${c}`);
// ------------------------------------------------------------
// --> FUNCTION
function sum(x, y) {
    return x + y;
}
const output = sum(10, 20);
// console.log(`function output`, output);
// if suppose a function doesn't return anything use : void
function alertMsg(message) {
    //   console.log(message);
}
alertMsg("Hello World");
const emp_details = {
    emp_id: 1,
    emp_name: "gowtham",
    emp_role: "software developer",
    // emp_emailId: 'gowthamsampathkumar@outlook.com'
};
// emp_details.emp_role = "reactJS developer";
emp_details.emp_name = "stylish_developer";
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class user {
    constructor(name, age) {
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
    constructor(name, age, job) {
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
function test(items) {
    return new Array().concat(items);
}
let numArray = test([1, 2, 3, 4, 5]);
let stringArray = test(["a", "b", "c", "d", "e"]);
console.log(numArray);
console.log(stringArray);
// ------------------------------------------------------------
