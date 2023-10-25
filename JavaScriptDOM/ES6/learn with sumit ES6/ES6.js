///truthy false
///// falsy value = false,0, "", null,undefine,NaN
const array = null;
if(array){
    console.log("Truthy array")
}else{
    console.log("False array")
}









////tarnary oparetor
// var age1 = 18
// let type = (age1 <= 18) ? "adul" : "child"
// console.log(type)


var age1 = 45
let type = (age1 >= 18) ? "adul" : age1 <= 10 ? "young" : "child" ;
console.log(type)












/////find()
let num = [1,2,4,5,6,7,8]
let result = num.find
((value) => {
    return value > 3

})
console.log(result)
console.log(num)


class student{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }test(){
        console.log("Hello mahin")
    }
    exampleFun(){
        let array1 =[1,2,3]
        array1.find(() =>{
            this.test()
        },this)
    }
}

let fun = new student("mahin", 19)
fun.exampleFun()











//// 7. findIndex
var number = [1,2,3,4,5,6,7,8]

let resul = number.findIndex((value1, index,array) => {
    return value1 > 4
})
console.log(resul)



///77 = slice Array change hoy nah
const slice = [1,2,3,4,5,6,7,8]
const sliceResult = slice.slice(1, 7)
console.log(sliceResult)


//// splice main array change hoy
let number2 = [1,2,3,4,5,6,7,8]
var resul2 = number2.splice(-4, 6 , 10, 20, 30, 40)
console.log(number2)



////reduce array jog Kora JAy
var number3 = [1,2,3,4,5,6,7,8]
let resul3 = number3.reduce((prevValue, carrenValue,currentIndex, Arr) => {
    return prevValue + carrenValue
}, 0)
console.log(resul3)












///object keys,Values, entries

const obj = {
    name : "mahin howlader",
    roll : 6723463,
    class : "honours 1st years"
}

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))


let x =12;
let y = 32;
const obj2 = {
    name : "mahin howlader",
    roll : 6723463,
    class : "honours 1st years",
    x ,
    y 

}

console.log(obj2)



///rest oparetor object

const obj4 = {
    a: "alu",
    b:"Mula"
}
const obj5 = {
    d: "Sosa",
    c:"potol"
}
console.log({...obj4,...obj5})


////rest function 
function myFunc (a,...params){

console.log(params)
// console.log(a)
}

myFunc(111111,34,67,8)

















/////destructuring
const obj6 = {
    name : "mahin howlader",
    roll : 6723463,
    class : "honours 1st years",
    x ,
    y 
}

const {name,roll} = obj6;
console.log(name)





const obj7 = {
    name : "mahin howlader",
    roll : 6723463,
    class : "honours 1st years",
    x ,
    education : {
        degree : "Masters"
    },
}
const {education : {degree} = {} } = obj7;

console.log(degree)


//////arrry destructuring 
let number5 = [1,2,3,45,56]
let [,a,,b] = number5
console.log()

let number6 = [1,2,3,[100,2000,300,4000],45,56]
let [,,,[,c,d]] = number6
console.log(c,d)




//////// variable value change
let e= 2;
let f= 4;
[f,e] = [e,f];
console.log(e)










/////////23  what is = sets
const mySet = new Set()
mySet.add(12).add(6).add("Bangladesh")
console.log(mySet)
console.log(mySet.size)


////array theke set
let myArray = [1,2,3]
let mySet2 = new Set(myArray)
for(let value10 of mySet2){
    console.log(value10)
}


///// set theke array
let myArray20 = [1,2,3]
let mySet20 = new Set(myArray)

console.log([...mySet20])
console.log(Array.from(mySet20))



/////set dia unique value
let array11 = [1,2,3,4,5,6,7,8,1,2,3,4,5]
let arr11 = new Set(array11)
console.log([...arr11])