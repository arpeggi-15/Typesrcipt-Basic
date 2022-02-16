//BASIC TYPES

let id: number = 5
let company: string = 'Avrey'
let isPublished: boolean = true
let x: any = "hello"

//ARRAYS & TUPLES

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, 'oval', true]

let person: [number, string, boolean] = [1, 'byee', false]
let employee: [number, string][]

employee = [
    [1,"priyanshu"],
    [2, "ayush"],
    [3,"sayan"],
]

//UNIONS & ENUMS

let sid: string | number = '22'

enum Direction1 {
    up = 1,
    down,
    left,
    right,
}

enum Direction2 {
    up = "up",
    down = "down",
    left = "left",
    right = "right",
}

//OBJECTS

type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'Cena',
}

//TYPE ASSERTION

let cid: any = 1
//let customerId = <number>cid
//let customerId = cid as number

//FUNCTIONS

function addNum(x:number,y:number): number{
    return x+y
}

function log(message: string | number): void{
    console.log(message)
}

//INTERFACES

interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'Cena',
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x:number, y:number): number => x+y
const sub: MathFunc = (x:number, y:number): number => x-y

interface PersonInterface {
    id: number,
    name: string,
    register(): string
}

//CLASSES

class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }

    register(){
        return `${this.name} is now registered`
    }
}

const priyanshu = new Person(1, "Priyanshu Kumar")
const ayush = new Person(2, "Ayush Kumar")

console.log(priyanshu.register())

console.log(priyanshu, ayush)

class Employee extends Person{
    position: string

    constructor(id: number, name: string, position: string){
        super(id,name)
        this.position = position
    }
}

const emp = new Employee(3, 'Shawn', 'developer')

console.log(emp.register())

//GENERICS

function getArray<T>(items: T[]): T[]{
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['ayush','satyam','priyanshu','roshan'])

strArray.push("Hello")
