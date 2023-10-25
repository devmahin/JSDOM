///createElement,appendChild,id,className


///111111
let div = document.createElement("div")
div.id = "mahinID"
div.className = "mahinID"


div.innerHTML = "<p> this is p tag </p>"



let text = document.createTextNode("Inter text into the DIV")
div.appendChild(text)



let h1 = document.createElement("h1")
h1.textContent ="Inner h1"
div.appendChild(h1)
document.body.appendChild(div)



//////222
let ul = document.createElement("ul")
ul.id = "manu"

let li1 = document.createElement("li")
li1.textContent = "Home"
ul.appendChild(li1)

let li2 = document.createElement("li")
li2.textContent = "About"
ul.appendChild(li2)


let li3 = document.createElement("li")
li3.textContent = "Contact"
ul.appendChild(li3)

document.body.appendChild(ul)




 let script = document.createElement("script")
 script.src = "hablu.js"
 document.body.appendChild(script)