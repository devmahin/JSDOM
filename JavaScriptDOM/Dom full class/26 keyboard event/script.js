let message = document.querySelector("#message")



function eventName(event){
    console.log(event.type)
}
message.addEventListener("keydown", eventName)
message.addEventListener("keyup", eventName)

// message.addEventListener("keypress", eventName)


