let Message = document.querySelector("#Message")
let result = document.querySelector("#result")

Message.addEventListener("input", () => {
    result.textContent = Message.value
})


