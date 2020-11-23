const main = document.querySelector('main');

const multiline = `***********.*
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

multiline.split('\n');
multiline[0].split('');

// map
for (let sign of multiline){
    const tiles = document.createElement('div');
    main.appendChild(tiles);

    if(sign === '*'){
        tiles.className = 'tile wall';
    }
    else if(sign === '.'){
        tiles.className = 'tile path';
    }
    else if(sign === 'S'){
        tiles.className = 'tile start';
    }
    else if(sign === 'T'){
        tiles.className = 'tile treasure';
    }
}

// pawn
const pawn = document.createElement('div');
pawn.className = 'player';
document.querySelector("body > main > div:nth-child(16)").appendChild(pawn);

let pos = 16;
// moves
document.body.addEventListener('keyup', (e) =>{
    if(e.key === 'ArrowUp' || e.key === 'z'){
        pos -= 14;
        document.querySelector('body > main > div:nth-child('+pos+')').appendChild(pawn);
    }
    else if(e.key === 'ArrowLeft' || e.key === 'q'){
        pos--;
        document.querySelector('body > main > div:nth-child('+pos+')').appendChild(pawn);
    }
    else if(e.key === 'ArrowDown' || e.key === 's'){
        pos += 14;
        document.querySelector('body > main > div:nth-child('+pos+')').appendChild(pawn);
    }
    else if(e.key === 'ArrowRight' || e.key === 'd'){
        pos++;
        document.querySelector('body > main > div:nth-child('+pos+')').appendChild(pawn);
    }
    else if(e.key === 'r'){
        document.querySelector("body > main > div:nth-child(16)").appendChild(pawn);
    }
})