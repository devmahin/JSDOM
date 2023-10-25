// window.onscroll = ()=> {
//     console.log("Scroll")
// }


///scroll
// window.addEventListener("scroll", ()=> {
//     console.log("Scroll Bar")
// })

let scroller = 0;

window.addEventListener("scroll", ()=>{
    let newScroller = window.scrollYOffset || document.documentElement.scrollTop 
    if(newScroller > scroller){
        console.log("Scroll is down")
    }else{
        console.log("Scroll is up")
    }
    scroller = newScroller
})