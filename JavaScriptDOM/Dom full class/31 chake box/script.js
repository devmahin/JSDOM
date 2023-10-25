const btn = document.getElementById("btn")


// let values =[]
// checkBox.forEach((value)=> {
//     values.push(checkBox.value)
// })

btn.addEventListener("click", (e) => {
    let checkBox = document.querySelectorAll("input[name='color']:checked")

    let values =[]
    checkBox.forEach((checkBox)=> {
    values.push(checkBox.value)
    })
// console.log(values)
let output = document.getElementById("output")
output.innerText = values
})
