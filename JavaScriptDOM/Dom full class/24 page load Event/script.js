// document.addEventListener("DOMContentLoaded", (e)=> {
//     alert("DOM is fully loaded")
// })



// addEventListener("load", (e)=> {
//     alert("DOM is fully loaded")
// })


addEventListener("beforeunload", (e)=> {
    e.preventDefault();
    e.returnValue = ''

})