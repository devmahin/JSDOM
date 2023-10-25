///focus
let focuse = document.querySelector("#focuse")

focuse.addEventListener("focus", (e)=>{
     e.target.style.backgroundColor = "red";
    e.target.style.color = "white"

//    let target1 = e.target.className = "Input1"
//    console.log(focuse)


})



///blur
focuse.addEventListener("blur", (ev) => {
    ev.target.style.backgroundColor ="yellow"
    ev.target.style.color = "black"


})