// ////1 const var let
// var  age = 19;
// var  age = 18;
// console.log(age)


// function sum (){
//     let num1 =10;
//     let num2 = 10;
//     const total = num1 + num2
//     return total;
// }
// console.log(sum())


// for (let i =0; i < 5; i++){
//     console.log("Inside loop" +i)

// }

// const obj ={name : "mahin"}
// obj.name = "adib"

// // obj = {age : hasan}
// console.log(obj)




// /////2  default
// function say (message="Hablu program"){
//     console.log(message)
// }
// say("mahin How are you?")




// ////3 Rest 
function rest1(...name){
console.log(name)
}
rest1(1,2,3,4,5,6,7,8,9)
// rest("mahin","ahmed", "adib")




// ///4 Spread 
// const array = [11,21,33,44,]
// const array2 = [...array, 1,2,3,4,5,6,77]
// console.log(array2)






// ////5 Advance javascprit object

// function say (message, name){
//     return{
//         message,
//         name
//     }
// }
// console.log(say("Hi adib", "Mahin"))




// //// 6 For of loop && For in loop

// const arra = [1,2,3,4,55,66,77]
// for(Array of arra){
//     console.log(Array)
// }


// // for in loop
// const obj2 = {
//     name : "mahin howlader",
//     age : 19,
//     profetion : "programmer"
// }
// for(newArray in obj2){
//     console.log(newArray)
// }



// //// 7 Template betiks
const str = `"Mahin" 
"adib" 
"adib"`
console.log(str)

const name3 = `Mahin.`
const age3 = 19;

console.log(`My name is ${name3} I am ${age3} years old.`  )





// ////8 array destructuring 
// const array4 = [1,2,3,4,5,6,7,8]
// let [ a,b, c, ...z] = array4;
// console.log(z)





// ////9 object destructuring
// const obj5 = {
//     name : "Mahin",
//     age5 : 192,
//     Id : 2
// }
// const {name,age5,Id} = obj5;
// console.log(name,age,Id)




///// 11 class constructor 
// class book {
//     constructor(name,price){
//         this.name = name;
//         this.price = price;
//     }
// }

// let bookDetails = new book(" 11 Rice dad poor dad", 300)
// console.log(bookDetails)




/////12 class Expression
let persone = class {
    constructor(names,age,roll){
        this.names = names;
        this.age = age;
        this.roll = roll;

    }
}

let newPersone = new persone ("12 Mahin Howlader", 19,"mahin")
console.log(newPersone)




// ///13 statik methods
// class book1 {

//     fun(){
//         console.log("hey Mahin")
//     }
// }

// let newObj = new book1;
// newObj.fun()

// class book2 {
//     static fun2(){
//         console.log("13 hey adib")
//     }
// }
// book2.fun2()






// ///14 inheritance &&super
class parent {
    assets1(){
    console.log("Eta amr dadar sompoti")
    }
    assets2(){
        console.log("Eta amar babar sompoti ")
    }
}

class ami extends parent {
  myAssest(){
    super.assets1();
    super.assets2();
  }
}
let myAssest = new ami();
myAssest.myAssest()



// // let myAssests = new ami();
// // myAssests.assets1()
// // myAssests.assets2()






// ////15 arrow function
// let arrow = (x,y) => {
// return x+y
// }
// console.log(arrow(10,20))


// //// 1 line arrow function
// let arrow1 = x =>  x + 40
// console.log(arrow1("arrow function "))



// ///16 symbols 

// let sym = Symbol("mahin")

// let sym1 = Symbol("mahin")
// // console.log(typeof sym)
// console.log(sym===sym1)




// ///17 iterators 
// let arra1 = [1,2,3,4,5,12,32,123]
// for(let mahin of arra1){
//     console.log(mahin)
// }



// let ob = {
//     name : "mahin",
//     class: "inner text"
// }
// for(let mahin2 in ob){
// console.log(mahin2)
// }


// ///// 18 strict mode code somadan kore dey
// "use strick"
// let name7 = 12;
// console.log(name7)


// //19 For Each

let hablu1 = [12,34,55,65]
hablu1.forEach((x) => console.log(x))

// function MyFun (z){
// console.log(z)
// }








// ////20 map 
let mahin10 = [12,32,345,56]
let mahin20 = []

mahin10.forEach(MyArray)
function MyArray (x){
    mahin20.push(x*2)
}
console.log(mahin20)




let mahin11 = [12,32,345,56]
let mahin21 = mahin11.map(MyFun1)
function MyFun1 (x){
    return x

}

console.log(mahin21)









// ///// 21 function filter
// let hablu11 = [21,23,43,45,54]
// let hablue12 = hablu11.filter(myFun)

// function myFun (x){
//     return x < 50
// }
// console.log(hablue12)



///// 22 synchronous 

let fun = () => {
    console.log("Fun")
}
let fun1 = () => {
    console.log("Fun1")
}
let fun2 = () => {
    console.log("Fun2")
}
fun2()
fun()
fun1()

//asychronous

let lodingTime = ()=>{
    console.log("Fun4")
}

let setime = ()=> {setTimeout(lodingTime, 2000)}
setime()






// //// 23 callBack function
let display = (someting) => {
    console.log(someting)
}

let HigherOrderFun = (name , class4, callBackFun) => {
    const details = `My name is ${name}. && I study in class ${class4}. `
    callBackFun(details)
}

HigherOrderFun("Mahin", "12", display)





/// 24 error try , catch, finally, throw

try{
    console.log("mahin")
    // console.log(num)

    let age = 22;

    if(age < 17){
        throw "Hello baby";
    }
    else if (age > 18){
        throw "How are you ? mahin";
    }



}catch(mahinError){
    // console.log(mahinError.name)
    // console.log(mahinError.message)
    console.log("How are you?")
}finally {
    console.log("Hellow Hablu programmer")
}



//// 25 promise 
let message = true;

let promise = new Promise((resLove,reject) => {
if(message){
    resLove([
        {userName: "mahin", email: "mahinHowlader@gmail.com" },
        {userName: "tutul", email: "mahinHowlader@gmail.com" }

    ])}

    else{
        reject("user is not valid")
    }
})


promise.then((sa)=> {
console.log(sa)
})

promise.catch((error)=> {
    console.log(error)
})












/////26 async Await

function getUser (userId){
    return new Promise((resolve ,reject)=> {
        console.log("Get user from thr datebase.")
      setTimeout(() => {
        resolve({
            userId : userId, 
            userName: "john"
    
        })
      }, 1000)
    })
}

function getServices (user){
    return new Promise ((resolve, reject => {
        console.log(`Get services of ${user.userName} From thr API`)
        setTimeout(() => {
            resolve(["Email", "VPN", "CDN"])
        }, 2 * 1000)

    }))        
}

function getServicesCost (service){
return new Promise ((resolve, reject) => {
    console.log(`Calculater services coast of ${service}.`)
    setTimeout(() => {
        resolve (service.length * 100 )
    }, 3 * 1000)
})
}


async function loadData() {
    let user = await getUser(100)
    let service = getServices(user);
    let cost = getServicesCost(service);
    console.log(`The service cost is ${cost}`)
}

loadData()


// getUser(100)
// .then(getServices)
// .then(getServicesCost)
// .then(console.log)

