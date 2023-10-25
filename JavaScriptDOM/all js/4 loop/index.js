// for(var i = 0; i <= 20; i++){

//     console.log(i)
// }

// var mahin = 10;
// while(mahin < 20){
//     console.log(mahin)
//     mahin++
// }

// var arry = ['hasan', 'mahin', 'raj', 'alu', 'potol', 'mula','sosa','pias']
// for(i =0; i < arry.length; i++){
//     console.log(arry[i])
    
// }


////break
var arry = ['hasan', 'mahin', 'raj', 'alu', 'potol', 'mula','sosa','pias']
for(i =0; i < arry.length; i++){


    if(i === 4){
        break;
    }
    console.log(arry[i])
}


var num = [ 12, 33, 43, 55, 66, 77, 89]
for(i = 0; i < num.length; i++){
    if(num[i] >= 60){
        break;
    }
    console.log(num[i])
}


var num = [11, 33, 55, 66, 77, 88, 99,]
for(i= 0; i < num.length; i++){
if(num[i]>= 33 && num[i]<= 77){
    continue;
}
console.log(num[i])

}
