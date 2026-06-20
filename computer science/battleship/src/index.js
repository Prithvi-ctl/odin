import "./style.css";
import {Gameboard,Ship} from "./battlebs.js";

const p1 = new Gameboard();
const p2 = new Gameboard();

let currentTurn = "player";



const board = document.querySelector(".board");
for(let row = 0; row < 10; row++){
    for(let col = 0; col < 10; col++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.row = row;
        cell.dataset.col = col;
        board.appendChild(cell);
    }
}


// board.addEventListener("click", (e) => {
//     const cell = e.target.closest(".cell");
//     if(!cell)  return;

//     const row = Number(cell.dataset.row);
//     const col = Number(cell.dataset.col);
    

//     //preventing reattack
//     const val = p2.board[row][col];
//     if(val === 'hit' || val === 'miss') return;

//     p2.recieveAttack([row,col]); 
//     render(p2,board);       
//     if(p2.isGameOver()){
//         alert("computer wins!");
//     }

// });


//ship thingy
const ship1 = new Ship(3,"O");
const ship2 = new Ship(3,"O");
const ship3 = new Ship(3,"O");
const ship4 = new Ship(4,"O");
const ship5 = new Ship(5,"O");



const destroyer = document.getElementById("destroyer");
const submarine = document.getElementById("submarine");
const cruiser = document.getElementById("cruiser");
const battleship = document.getElementById("battleship");
const carrier = document.getElementById("carrier");

let ship = null;

destroyer.addEventListener("click", () => {
    ship = ship1;
    
});
submarine.addEventListener("click", () => {
    ship = ship2;
    
}); 
cruiser.addEventListener("click", () => {
    ship = ship3;
});
battleship.addEventListener("click", () => {
    ship = ship4;
});
carrier.addEventListener("click", () => {
    ship = ship5;
});   

const orientationSelect = document.getElementById("orientation");
const orien = document.getElementById("orien");
let orientation = "horizontal";

function updateOrientationDisplay(){
    orien.textContent = orientation;
}
updateOrientationDisplay();
orientationSelect.addEventListener("click", () => {
    orientation = orientation === "horizontal" ? "vertical" : "horizontal";
    updateOrientationDisplay();
});


    




board.addEventListener("click",(e) =>{

    
    const cell = e.target.closest(".cell");

    if(!cell) return;

    const row = Number(cell.dataset.row);
    const col = Number(cell.dataset.col);

    


    //placing ships
    
    if(ship){
        p1.placeShip(ship,[row,col],orientation);
        render(p1,board);
        ship = null;    
    }
    
    if(p1.ships.length === 5){
        alert("All ships placed! Computer's turn to place ships.");

        //computer places Ships
        computerPlaceShips(p2);
    }

    

})





const board2 = document.querySelector(".p2 .board");
for(let row = 0; row < 10; row++){
    for(let col = 0; col < 10; col++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.row = row;
        cell.dataset.col = col;
        board2.appendChild(cell);
    }
}   

board2.addEventListener("click", (e) => {
    if(currentTurn !== "player" ) return;
    const cell = e.target.closest(".cell");
    if(!cell) return;


    const row = Number(cell.dataset.row);
    const col = Number(cell.dataset.col);

    //preventing reattack
    const val = p2.board[row][col];
    if(val === 'hit' || val === 'miss') return;

    p2.recieveAttack([row,col]);
    currentTurn = "computer";
    render(p2,board2,true);    
    setTimeout(() => {
        computerAttack(p1);
    },1000);


   
});

function render(gameboard,boardElement,isEnemyBoard=false){
    const cells = boardElement.querySelectorAll(".cell");
    cells.forEach(cell => {
        const row = Number(cell.dataset.row);
        const col = Number(cell.dataset.col);
        const value = gameboard.board[row][col];
        cell.textContent = value ? value : "";

        if(isEnemyBoard){
            cell.textContent = (value === 'hit' || value === 'miss') ? value : "";
        }else{
            cell.textContent = value? value: "";
        }
    })

}





function computerAttack(gameboard){
    

    let row,col;
    
        row = Math.floor(Math.random() * 10);
        col = Math.floor(Math.random() * 10);
        gameboard.recieveAttack([row,col]);
        render(gameboard,board);
        currentTurn = "player";
    
    
}

function computerPlaceShips(gameboard){
    let row,col;
    const ships = [ship1,ship2,ship3,ship4,ship5];
    const orientations = ["horizontal", "vertical"];

    for(let ship of ships){
        let placed = false;
        let attempts = 0;
        const maxAttempts = 100;
        console.log(gameboard.ships.length);
        while(!placed && attempts < maxAttempts && gameboard.ships.length < 5 ){

            row = Math.floor(Math.random() * 10);
            col = Math.floor(Math.random() * 10);
            const orientation = orientations[Math.floor(Math.random() * orientations.length)];
            placed = gameboard.placeShip(ship,[row,col],orientation);
            attempts++;

        }
        
        
    }
}
console.log(p2.ships);