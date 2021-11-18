let number1 = 1;
let number2 = 2;

// feature: hoisting
function sum1(num1, num2) {
  return num1 + num2;
}

// variable definition function
const sum2 = function (num1, num2) {
  return num1 + num2;
};
const sum3 = (num1, num2) => {
  return num1 + num2;
};

// Function contructor
const sum4 = new Function("num1", "num2", "return num1 + num2");

// Self invoking function
// Usage: pass right handside of variable definition function to () and call it with parameters.
// Anonymous function type
// (function (num1, num2) {
//   console.log(num1 + num2);
// })(number1, number2);
let sumresult = ((num1, num2) => {
  return num1 + num2;
})(number1, number2);

// closure
function greetingOuterFunction(name, lname) {
  // Enclosed by outer function scope
  // Bringing the scopes closer together
  function greetingInnerFunction() {
    return `Hello ${name} ${lname}`;
  }
  return greetingInnerFunction;
}
let greetingToAli = greetingOuterFunction("Ali", "Mohammadali");
// console.log(greetingToAli());
let greetingToErfan = greetingOuterFunction("Erfan", "Ghazimoradi");
// console.log(greetingToErfan());

let person1 = {
  firstname: "Amirali",
  lastname: "Rezaei",
  age: 14,
  greeting() {
    console.log("outerthis", this);
    // console.log(`Hello ${this.firstname} ${this.lastname}`);
    // (function() {
    //   let getage = () => {
    //     console.log("innerthis", this);
    //   };
    //   getage();
    // })();

    // (() => {
    //   let getage = () => {
    //     console.log("innerthis", this);
    //   };
    //   getage();
    // })();

    // this ===refers to===> closure scope
    let getage1 = () => {
      console.log("innerthis", this);
    };
    getage1();

    // this ===refers to===> lexical scope
    let getage2 = function () {
      console.log("innerthis", this);
    };
    getage2();
  },
};
// person1.greeting();

// Callback function
// function personInfoHtmlGenerator(person, cb) {
//   let html = "";
//   html += `<p>firstname: ${person.firstname}</p>`;
//   html += `<p>lastname: ${person.lastname}</p>`;
//   html += `<p>age: ${person.age}</p>`;
//   cb(`<div>${html}</div>`);
// }

// personInfoHtmlGenerator(person1, function (personDiv) {
//   document.writeln(personDiv);
// });

// Array.prototype.map2 = function (cb) {
//   for (let index = 0; index < this.length; index++) {
//     const element = this[index];
//     cb(element, index, this);
//   }
// };

// console.log(
//   [1, 2, 3, 4, 5].map(function (value, index, array) {
//     console.log(index);
//     console.log(value);
//     console.log(array);
//     console.log("--------------------");
//   })
// );

// console.log("---------mohammadali map---------");

// console.log(
//   [1, 2, 3, 4, 5].map2(function (value, index, array) {
//     console.log(index);
//     console.log(value);
//     console.log(array);
//     console.log("--------------------");
//   })
// );

const person = {
  fullName: function (msg, age) {
    return (
      msg + " " + this.firstName + " " + this.lastName + ` and with age: ${age}`
    );
  },
};
const person2 = {
  firstName: "John",
  lastName: "Doe",
};
const person3 = {
  firstName: "Mary",
  lastName: "Doe",
};

// This will return "John Doe":
console.log(person.fullName.bind(person2, "hello", 20)());
console.log(person.fullName.call(person3, "hi", 19));
console.log(person.fullName.apply(person2, ["hello", 20]));

function mohammadaliMax() {
  let maximum = arguments[0];
  for (let index = 1; index < arguments.length; index++) {
    const element = arguments[index];
    if (element > maximum) maximum = element;
  }
  return maximum;
}
function mohammadaliMax2(...argvs) {
  let maximum = argvs[0];
  for (let index = 1; index < argvs.length; index++) {
    const element = argvs[index];
    if (element > maximum) maximum = element;
  }
  return maximum;
}
console.log(mohammadaliMax(...[1, 2, 3, 4, 5]));
console.log(mohammadaliMax2(...[1, 2, 3, 4, 5]));
