////firstElementChild
let menu = document.querySelector("#menu")

// let li = document.createElement("li")
// li.textContent = "Home"

// menu.replaceChild(li, menu.firstElementChild)

// menu.replaceChild(li, menu.lastElementChild)



// Element remove
// menu.removeChild(menu.firstElementChild)
// menu.removeChild(menu.lastElementChild)




////Clone node
let cloneNode = menu.cloneNode(true);
cloneNode.id = "colne"
document.body.appendChild(cloneNode)