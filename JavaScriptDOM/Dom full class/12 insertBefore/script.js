///////insertBefore


let menu = document.querySelector("#menu")


let li = document.createElement("li");
li.textContent = "Home";

menu.insertBefore(li, menu.firstElementChild);


let li2 = document.createElement("li")
li2.textContent = "First"
menu.insertBefore(li2, menu.firstElementChild)




//21 