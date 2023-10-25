//<!-- Dom level 0 event handlers -->
let btn = document.querySelector("#btn")
btn.onclick = function (){
    alert("Dom 0 level Handler")
}




////<!-- Dom level 2 event handlers -->

let dom2 = document.querySelector("#dom2")
dom2.addEventListener("click",()=> {
    alert("Dom 2 level hanlers")
})