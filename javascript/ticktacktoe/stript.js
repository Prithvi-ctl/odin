console.log("Tic Tac Toe Game Initialized");    
const Module = (function(){
    let gameboard = [];

    const placeMark = (index, symbol) => {
    if (gameboard[index] === undefined) {
        gameboard[index] = symbol;
        return true;
    }

    return false;
    };
    
    let resetGameboard = () => {
        gameboard.splice(0,gameboard.length);
    }

        const getBoard = () => gameboard.slice();
    return {
        placeMark,
        resetGameboard,
        getBoard
        
        
    };

})();


function PlayerInfo(name,symbol){
    let status = "";
    let score = 0;

    const increaseScore = () =>{score++};
    const decreaseScore = () =>(score--);
    const resetScore = () => score = 0;
    const getScore = () => score;       

    const getStatus = () => status;
    const turn = () => false;
    const setStatus = (newStatus) => status = newStatus;

    return {name,symbol,turn,getScore,increaseScore,decreaseScore,resetScore,getStatus,setStatus};
}


const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]
];
function GameController(player1,player2){
    let currentPlayer = player1;
    let gameOver = false;

    
    const switchPlayer = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    };

    
    const reset = () => {
        Module.resetGameboard();
        player1.resetScore();
        player2.resetScore();
        player1.setStatus("");
        player2.setStatus("");
        currentPlayer = player1;
        gameOver = false;
    }
    const getCurrentPlayer = () => currentPlayer;

    const checkWinner = () =>{
        const board = Module.getBoard();
        
        return winningCombinations.some(combination => {
            return combination.every(index => board[index] === currentPlayer.symbol);
        });
    };

    const checkDraw = () =>{
        const board = Module.getBoard();
        for(let i = 0; i < 9; i++){
            if(board[i] === undefined) return false;
        }
        return true;    
    }

    const playRound = (index) => {
        if(gameOver) return;
        const success = Module.placeMark(index,currentPlayer.symbol);

        if(!success) return ;

        if(checkWinner()){
            currentPlayer.increaseScore();
            currentPlayer.setStatus("win");
            gameOver = true;
            return;
        }
        
        if(checkDraw()){
            player1.setStatus("draw");
            player2.setStatus("draw");
            gameOver = true;
            return;
        }
        switchPlayer();
    }
   

    return {switchPlayer,reset,getCurrentPlayer,checkWinner,checkDraw,playRound};

}

const displayController =(() => {
        let gameController,player1,player2;

        const cells = document.querySelectorAll(".cell");
        const player1Score = document.querySelector("#score");
        const player2Score = document.querySelector("#score2");
        const player1Status = document.querySelector("#status");
        const player2Status = document.querySelector("#status2");
        
        const init = (gc,p1,p2) => {
            gameController = gc;
            player1 = p1;
            player2 = p2;
            



        cells.forEach((cell,index) => {
            cell.addEventListener("click",()=>{
                gameController.playRound(index);

                renderBoard();
                renderScores();
                renderStatus();

            })
        })

        const resetBtn = document.querySelector("#reset");
        resetBtn.addEventListener("click",()=>{
            gameController.reset();
            renderBoard();
            renderScores();
            renderStatus();
        })  
    };

        const renderBoard = () =>{
            const board = Module.getBoard();

            cells.forEach((cell,index) => {
                cell.textContent = board[index] || "";
            });
        }
        const renderScores = () =>{
            player1Score.textContent = `Score: ${player1.getScore()}`;
            player2Score.textContent = `Score: ${player2.getScore()}`;
        }
        const renderStatus = () =>{
            player1Status.textContent = player1.getStatus();
            player2Status.textContent = player2.getStatus();
        }

        return {
            renderBoard,init
        }
})();

const App  = (() => {
    const player1 = PlayerInfo("Player 1","X");
const player2 = PlayerInfo("Player 2","O");
const gameController = GameController(player1,player2);
displayController.init(gameController,player1,player2);    
displayController.renderBoard();
})();

