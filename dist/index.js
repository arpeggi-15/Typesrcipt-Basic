"use strict";
//BASIC TYPES
let id = 5;
let company = 'Avrey';
let isPublished = true;
let x = "hello";
//ARRAYS & TUPLES
let ids = [1, 2, 3, 4, 5];
let arr = [1, 'oval', true];
let person = [1, 'byee', false];
let employee;
employee = [
    [1, "priyanshu"],
    [2, "ayush"],
    [3, "sayan"],
];
//UNIONS & ENUMS
let sid = '22';
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 1] = "up";
    Direction1[Direction1["down"] = 2] = "down";
    Direction1[Direction1["left"] = 3] = "left";
    Direction1[Direction1["right"] = 4] = "right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["up"] = "up";
    Direction2["down"] = "down";
    Direction2["left"] = "left";
    Direction2["right"] = "right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'Cena',
};
//TYPE ASSERTION
let cid = 1;
//let customerId = <number>cid
//let customerId = cid as number
//FUNCTIONS
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'Cena',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//CLASSES
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const priyanshu = new Person(1, "Priyanshu Kumar");
const ayush = new Person(2, "Ayush Kumar");
console.log(priyanshu.register());
console.log(priyanshu, ayush);
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'developer');
console.log(emp.register());
//GENERICS
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['ayush', 'satyam', 'priyanshu', 'roshan']);
strArray.push("Hello");
