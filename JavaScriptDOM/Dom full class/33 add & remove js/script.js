let lang = document.querySelector("#lang")
let btnAdd = document.querySelector("#btnAdd") 
let list = document.querySelector("#list")
let btnRemove = document.querySelector("#btnRemove")

btnAdd.onclick = (e) => {
    e.preventDefault()


    if(lang.value === ""){
        console.log("Please add an name")
    }

    const option = new Option(lang.value)
    list.add(option);

    lang.value = "";
}





btnRemove.onclick = (e)=> {
    e.preventDefault()

    
    let Selected = [];
    for(let i=0; i<list.options.length; i++){
        Selected[i] = list.options[i].selected
    }


    let index = list.options.length;

    while (index--){
        if(Selected [index]){
            list.remove(index)
        }
    }
}