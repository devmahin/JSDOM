// var ditails = {
//     names :"mahin",
//     age : 18,
//     bestFriends : "johir",
//     class: "Honours"


// }
// let mahin = ditails.names

//  let mahin = ditails['age']

// let mahin = "class";
// let mahin2 = ditails[mahin]
// console.log(mahin2)

var adib = {
    name: "ADIB HOSSION",
    fatherName: "ABUL HOWLADER",
    motherName:"SOKINA KHTUN",
    age : 19,
    class: "inter 2nd year",
  

}

// const ditails = adib.age;
// console.log(ditails)


// var ditails = adib["class"]
// console.log(ditails)


// var ditails = "motherName"
// var sum = adib[ditails]
// console.log(sum)


//// value add 
adib["age"]= 21
console.log(adib)

adib.age = 41
console.log(adib)

var hasan = "age";
adib[hasan]= 50;
console.log(adib)

var mahin = Object.keys(adib)
console.log(mahin)

var hasan = Object.values(adib)
console.log(hasan)

