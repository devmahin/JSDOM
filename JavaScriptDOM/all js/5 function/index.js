function add (a , b){
console.log(a+b)
}
add(12, 33)
add(12,33)

function add (num1 ,num2){
    console.log(num1+num2)
}
add(20, 30)
add (70, 10)



var mahin =[12, 33, 44, 44,43]
var hasan = [365,55,34]
function add ( b) {
console.log(b)

}

add(mahin)
add(hasan)


var mahinFriends = ['johir', 'adib', 'antor','saiful','sazzt', 'sagor']
function add (a){
    for(i = 0; i < mahinFriends.length; i++){
        console.log(a[i])
    }
}
add(mahinFriends)


// //function return

function add ( a , b , c){
var mahin = a + b+ c;
return mahin;
}
var total = add(12, 33, 444);

console.log(total)



// feet inc

function mahin (feet){
    const fugFol = feet / 12;
    return fugFol;
}
const inc = 144;
const hasan = mahin(inc);
console.log(hasan)


function year (add){
    const inc = add / 12;
return inc;
}

const mahi = 144
const fugfol = year(mahi)
console.log(fugfol)




leapYear
function leapYear (add){
    const leap = add % 4;
    if(leap === 0){
        console.log("Leap year", add)
    }
    else{console.log("no leap year", add)}

}
leapYear(1932)

leapYear(1921)




function leapYear (year){
    var leap = year % 4;
    if(leap === 0){return true }
    else{return false}


}

var mahin = leapYear(1933)
console.log("Leap year", mahin)

var hasan = leapYear(1944)
console.log("no leap year", hasan)



// jor bijor

function number  (add){
    var num = add % 2;
    if(num === 0){
        console.log("jor")
    }
    else{console.log("bijor")}
}

number(31)
number (30)


function number (add){
    var num = add % 2;
    if (num === 0){
        return true;
    }
    else{return false}
}


var mahin = number(21)
console.log("bijor", mahin)

var mahin1 = number (20)
console.log("jor", mahin1)



// function zogfol
function zogfol(add){
let sum = 0;

    for(let i = 0; i <add.length; i++){
        var zog = i;
        const element = add[zog];
        sum = sum + element;
        console.log( element , sum )

    }
    return sum;

}

var hasan = [11, 22, 33, 44, 55, 66, 77, 88, 99]
zogfol(hasan)




////reverse

function reversString (text){
    let reversed = "";
        for( let i = text.length; i >= 0; i--){
            const element = text[i];
            reversed = reversed + element
    
    
        }
        return reversed;
    }
    
    const myString = "I am a bad boy  "
    const reverse = reversString(myString)
    console.log(reverse)






// ////math
const result = Math.pow(6, 3);
console.log(result)

const num1 = 65;
const num2 = 95;

const gap =Math.abs(num1 - num2);
// console.log(gap)
if(gap < 5
    ){
    console.log("You guse can be friend")

}

else{
    console.log("you can guse cannot be friend")
}


// ///round
// const number = 3.25345;
// const fullNamber = Math.round(number)
// // console.log(fullNamber)

// ////ceil
// const number2 = 4.00048373
// const fullNumber2 = Math.ceil(number2)
// // console.log(fullNumber2)

// ////floor
// const number3 = 332.634;
// const fullNumber3 = Math.floor(number3)
// // console.log(fullNumber3)


// ///random number
// // console.log(Math.random())

// const randomNumber = Math.floor(Math.random()*8555);
// console.log(randomNumber)


//tallest number
function maxInArray (numbers){
    let largest = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        // console.log(index)
        const element = numbers[index]
        // console.log(element)
        if (element > largest){
            largest = element
        }

    }
    return largest;
}
const height = [234, 433, 544, 645, 676]
const tallest = maxInArray (height)
console.log("bigest numbert", tallest)





//splitjoin 
const lyrics = "allah tumi amr kosto chara ar kew valo bijena. I love you allah. Ami tomay valobasi";

const parts = lyrics.split(" ");
const sentence = lyrics.split('.')
const chars = lyrics.split('')
// console.log(chars)



// const  partial = lyrics.slice(6, 10)
// // console.log(partial)



const partial2 = lyrics.substring(6,10)
console.log(partial2)



//// search 

const lyrics = "Tumi bondhu kala pakhi,bosonto kale bolte pari na,kala kala "
const mahin = lyrics.includes("bondhu")
// console.log(mahin)

var search = "BOSONTO"
var lyrise2 = lyrics.toLowerCase()
var oneLine = lyrics.toLowerCase().includes(search.toLowerCase())
// console.log(search)




// console.log(lyrics.indexOf("kala"))

// //not ==
if(lyrics.indexOf("kala") !== -1){
    console.log("Kala Exist")
}
else(console.log("kala not Found"))



//// start with
console.log(lyrics.startsWith("Tumi"))

////end with
var fileName = "myNayokPic.png";
console.log(fileName.endsWith(".png"));

//// arrow function
// let arrow = () => "Mahin Howlader"
// console.log(arrow())



var showMyName =(firstName, LastName) => {
console.log(firstName + " "+ LastName)
}
showMyName("Mahin", "Howlader" )



// function arrow returd
var showMyName =(firstName, LastName) => {
    let fullArrow = (firstName + " "+ LastName)
    return fullArrow;
    }
var nameValue =showMyName("Antor", "Howlader" )
console.log(nameValue)



//// REVERSE
var rev = "HEllOW"
var output = rev.split("").reverse().join("")
console.log(output)



