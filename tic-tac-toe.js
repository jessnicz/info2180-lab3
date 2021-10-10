window.addEventListener("load", () =>{
    board = Array.from(document.querySelectorAll("#board >div"));
    let change =  true;

    let winnerLog = [[0,1,2],[3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8] , [2,4,6]];
    let winner;
    let xWins;
    let oWins;


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
            winner = gameWinner();
            if (winner == 1)
            {
                state.classList.add("you-won");
                state.innerHTML = "Congratulations! X is the Winner!";
                board.forEach((sqr) => {
                    sqr.onclick = (s) =>{
                        s.preventDefault();
                    }

                })
            }
            else if (winner == 0)
            {
                state.classList.add("you-won");
                state.innerHTML = "Congratulations! O is the Winner!";
                board.forEach((sqr) => {
                    sqr.onclick = (s) =>{
                        s.preventDefault();
                    }

                })
            }

            }
    })
    el.onmouseover = () => {
        el.classList.add("hover");
    }

    el.onmouseout = () => {
        el.classList.remove("hover");
    }

});