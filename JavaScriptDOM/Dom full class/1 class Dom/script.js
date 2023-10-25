////document object model
// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByName()
// document.getElementsByTagName()
// document.querySelector()
// document.querySelectorAll()


///ID
let ID1 = document.getElementById("ID1")
ID1.innerHTML = "HELLOW MAHIN"


//// class ===  index poriborton er madhome value change hoy
let CL1 = document.getElementsByClassName("CL1")[0]
CL1.innerHTML = "SUBSCRIBE MAHIN"



////name tag == value change index er madhome
let heading = document.getElementsByName("heading")[0]

heading.innerHTML = "Mahin"


///tagName ===value change index er madhome
let h4 = document.getElementsByTagName("h4")[0];
h4.innerHTML = "Tag Value change "



///querySelector
let ID3 = document.querySelector("#ID3")
ID3.innerHTML = "querySelector"



////querySelectorAll
let h2 = document.querySelectorAll("h2")[5]
h2.innerHTML = "Mahin howlader"
