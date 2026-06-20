function generateMoves(position){
    [x,y] = position;
    return [[x+2,y+1],[x+2,y-1],[x-2,y+1],[x-2,y-1],[x+1,y+2],[x+1,y-2],[x-1,y+2],[x-1,y-2]];
}

function isValidMove(position){
    [x,y] = position;
    return x >= 0 && x < 8 && y >= 0 && y < 8;
}

function goalChecking(start,destination){
    return start[0] === destination[0] && start[1] === destination[1];
}


function isVisited(visited,position){
    if(visited.has(String(position))) return true;
    else return false;
}



function pathTracing(parent,destination){
    let path = destination;
    let temp = [];

    while(path !== null){
        temp.push(path);
        path = parent[String(path)];
    }
    return temp;
}

function knightMoves(start,destination){
    let visited = new Set();
    let parent  = {};
    let queue = [start];
    visited.add(String(start));
    parent[String(start)] = null;

    while(queue.length > 0){
        temp = queue.shift();
        tomp = generateMoves(temp);

        for(let i= 0;i<tomp.length;i++){
            if(isValidMove(tomp[i]) && !isVisited(visited,tomp[i]))  {
                queue.push(tomp[i]);
                visited.add(String(tomp[i]));
                parent[String(tomp[i])] = temp;
                if(goalChecking(tomp[i],destination)) return  pathTracing(parent, destination);
            }


}
    }
    
}


