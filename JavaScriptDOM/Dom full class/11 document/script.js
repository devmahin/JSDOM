// let menu = document.querySelector("#menu")
// let lang = ["Python", "JavaScript", "PHP", "Go", "PyScript"]

// let fragment = document.createDocumentFragment()

// lang.forEach((language) => {
//     let li = document.createElement("li")
//     li.textContent = language
//     fragment.appendChild(li)

// })

// menu.appendChild(fragment)



let lang2 = ["Python", "JavaScript", "PHP", "Go", "PyScript"];
let frag = document.createDocumentFragment()


const ul = document.createElement("ul")
ul.id = "lang2"
document.body.appendChild(ul)

     
    lang2.forEach((value) => {
   const li = document.createElement("li")
    li.textContent = value
    frag.appendChild(li)
    })
    
const lang22 = document.getElementById("lang2")
lang22.appendChild(frag);
