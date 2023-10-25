let target = document.querySelector("#box")




/////mouseddown,mousedEvent,mouseEvent
function mouseEvent (e){
    console.log(e.type)
}
target.addEventListener("mousedown", mouseEvent)
target.addEventListener("mouseup", mouseEvent)
target.addEventListener("click", mouseEvent)


//// dblclick
target.addEventListener("dblclick",mouseEvent )



///mouseover-mouseout
target.addEventListener("mouseover", mouseEvent)
target.addEventListener("mouseout", mouseEvent)




////mouseenter / mouseleave
target.addEventListener("mouseenter", mouseEvent)
target.addEventListener("mouseleave", mouseEvent)

///mousemove
target.addEventListener("mousemove", mouseEvent)