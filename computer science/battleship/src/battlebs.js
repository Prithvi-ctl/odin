export class Ship{
    constructor(length,name){
        this.length = length;
        this.name = name;
        this.hits = 0;
        this.coordinates = [];
        }
        
        
    hit(){
        this.hits += 1;
    }

    isSunk(){
        if(this.hits >= this.length) return true;
        else return false;
    }
}
export class Gameboard{ 
    constructor(){
        this.board =this.createBoard();
        this.ships = [];
    
    }

    createBoard(){
        return Array(10).fill(null).map(() => Array(10).fill(null));
    }

    placeShip(ship,coordinates,orientation){

            let coords = []
            //checking orientation
            for(let i = 0; i < ship.length; i++){
                let x = coordinates[0] +(orientation === 'vertical' ? i : 0);
                let y = coordinates[1] + (orientation === 'horizontal' ? i : 0);


                //boundary check
                if(x<0 || x >= 10 || y < 0 || y >= 10) return false;
                //overlappcheck
                if(this.board[x][y] !== null) return false;

                coords.push([x,y]);
            }

            //placing in the board
            for(let i = 0; i < coords.length; i++){
                let [x,y] = coords[i];
                this.board[x][y] = ship;

            } 

            //place ship
            ship.coordinates = coords;
            this.ships.push(ship);
            if(this.ships.length === 5) return true;
            else return false;
    }

    recieveAttack(coordinates){
        let [x,y] = coordinates;
        const target = this.board[x][y];

        if(target instanceof Ship){
            target.hit();
            this.board[x][y] = 'hit';
            return 'hit';
        } else {
            this.board[x][y] = 'miss';
            return 'miss';
        }


}

isGameOver(){
    return this.ships.every(ship => ship.isSunk());
}
}


