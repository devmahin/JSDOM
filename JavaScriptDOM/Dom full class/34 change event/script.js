const message = document.querySelector("#Message")

const result = document.querySelector("#result")



Message.addEventListener("change", () => {
    result.textContent = Message.value
})