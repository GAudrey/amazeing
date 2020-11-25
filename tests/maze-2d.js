const main = document.querySelector('main');

// lvl1
let lvl1 = 
`***********.*
*S.....**.*.T
*****.....*.*
*****.***.*.*
*****.*****.*
*****.*****.*
*****.......*
*****.*******
*.........***
*.******...**
*....********`;

multiline = lvl1.split('\n');

// map design
for (let line of multiline){
    const tilesLine = document.createElement('div');
    tilesLine.style.marginBottom = '-4px';
    main.appendChild(tilesLine);

    for(let sign of line){
        const tile = document.createElement('div');
        tile.className = 'tile';
        tilesLine.appendChild(tile);

        if(sign === '*'){
            tile.className += ' wall';
        }
        else{
            tile.className += ' path';
            if(sign === 'S'){
                tile.className += ' start';
            }
            else if(sign === 'T'){
                tile.className += ' treasure';
            }
        }
    }
}

// pawn
const pawn = document.createElement('div');
pawn.className = 'player player-color';
document.querySelector("body > main > div:nth-child(2) > div.tile.path.start").appendChild(pawn);
    // hit the wall
    function boum(){
        pawn.className = 'player player-boum';
            setTimeout(()=>{
                pawn.className = 'player player-color';
            },500)
    }