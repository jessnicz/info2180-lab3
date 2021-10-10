window.addEventListener("load", () =>{
    board = Array.from(document.querySelectorAll("#board >div"));
    let change =  true;

    board.forEach(el =>{
        el.classList.add("square");
    })
});