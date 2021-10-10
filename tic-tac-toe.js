window.addEventListener("load", () =>{
    board = Array.from(document.querySelectorAll("#board >div"));
    let change =  true;

    board.forEach(el =>{
        el.classList.add("square");
        el.onclick = () => {
            if (el.innerHTML == "X" || el.innerHTML == "O"){
                el.innerHTML = el.innerHTML;
            }
            else if (change){
                el.classList.add("X");
                el.innerHTML = "X";
                change = false;
            }
            else if(change == false){

                el.classList.add("O");
                el.innerHTML = "O";
                change = true;
            }
            }
    })

});