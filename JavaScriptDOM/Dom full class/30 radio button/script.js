let group= document.querySelector("#group")

let sizes = ["XS", "S", "L","M","XL","XXL"]
group.innerHTML = sizes.map((size) => `<div>
    <input type="radio" value="${size}" name="size" id="">
    <label for="${size}"> ${size}</label>
    </div>`
).join(" ")



const radiobtn = document.querySelectorAll("input")
for(const radioButton of radiobtn){
    radioButton.addEventListener("change", showOutput)
}





let output = document.querySelector(".output")
function showOutput(e){
    if(this.checked){
        output.innerHTML = `You selected ${this.value}`
    }
}