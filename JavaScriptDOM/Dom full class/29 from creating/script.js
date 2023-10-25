let Username = document.getElementById("Username")
let email = document.getElementById("email")
let password = document.getElementById("password")
let password2 = document.getElementById("password2")
let Form = document.getElementById("Form")

function showError(input,message){
    const FromControl = input.parentElement;
    FromControl.className = "form-control error"
    const small = FromControl.querySelector("small")
    small.innerText = message;
}

function showSuccess(input){
    const FromControl = input.parentElement;
    FromControl.className = "form-control success"
}

function chakeMail(input){
    const RegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(RegEx.test(input.value)){
        showSuccess(input)
    }else{
        showError(input, "Email is not valid")
    }
}


function ChakeInputLength(input, min,max){
    if(input.value.length < min){
        showError(input, `${GeyFielName(input)} You Much Be At Least ${min} Characters`)
    }else if(input.value.length > max){
        showError(input, `${GeyFielName(input)} You Much Be less then ${min} Characters`)
    }else{
        showSuccess(input)
    }

}

function GeyFielName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)

}



function ChakePassword(input1,input2){
    if(input1.value !== input2.value){
        showError(input2, "Password Is Not Same")
    }

}


Form.addEventListener("submit", (e)=> {
    e.preventDefault()
    ChakeInputLength(Username,3,20)
    ChakeInputLength(password,6,30)
    chakeMail(email)
    ChakePassword(password, password2)
})


