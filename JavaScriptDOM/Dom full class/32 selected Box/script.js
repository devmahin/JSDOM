let Frameworks = document.getElementById("Frameworks")
let btn = document.getElementById("btn")


btn.onclick = (event) => {
    event.preventDefault()

const optionValue = [].filter
.call(Frameworks.options, (option) => option.selected)

.map((option) => option.text)
alert(optionValue)
}