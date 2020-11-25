const main = document.querySelector('main');

const lvl1 = `***********.*
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

const lvl1Size = [lvl1.split('\n')][0]; // 1rst line of lvl1
const lvl1SizeLine = lvl1Size[0].length; // 1rst line size

const lvl2 = `**********************
*..S.................*
********************.*
*....................*
*.********************
*...................T*`;

const lvl2Size = [lvl2.split('\n')][0]; // 1rst line of lvl2
const lvl2SizeLine = lvl2Size[0].length; // 1rst line size

const lvl3 = `********
****S***
****.***
****.***
****.***
*......*
*.****.*
*..***.*
*..***.*
**.*****
*T.*****
********`;

const lvl3Size = [lvl3.split('\n')][0]; // 1rst line of lvl3
const lvl3SizeLine = lvl3Size[0].length; // 1rst line size

// map design
for (let sign of lvl1){
    if(sign !== '\n'){
    const tiles = document.createElement('div');
    tiles.className = 'tile'
    main.appendChild(tiles);
        if(sign === '*'){
            tiles.className += ' wall';
        }
        else{
            tiles.className += ' path';
            if(sign === 'S'){
                tiles.className += ' start';
            }
            else if(sign === 'T'){
                tiles.className += ' treasure';
            }
        }
    }
}

// pawn
const pawn = document.createElement('div');
pawn.className = 'player player-color';
document.querySelector('body > main > div:nth-child(15)').appendChild(pawn);
    // hit the wall
    function boum(){
        pawn.className = 'player player-boum';
        setTimeout(()=>{
            pawn.className = 'player player-color';
        },500)
    }

// moves
let pos = 15;

document.body.addEventListener('keyup', (e) =>{
    // up
    if(e.key === 'ArrowUp' || e.key === 'z'){
        if(document.querySelector('body > main > div:nth-child('+(pos-13)+')').classList.contains('wall')){
            boum()
        }
        else if(document.querySelector('body > main > div:nth-child('+(pos-13)+')').classList.contains('treasure')){
            alert('Congrats');
        }
        else{
            pos -= 13;
            document.querySelector('body > main > div:nth-child('+pos+')').appendChild(pawn);
            pawn.className = 'player player-color';
        }
        console.log(pos)
    }

    // left
    else if(e.key === 'ArrowLeft' || e.key === 'q'){
        if(document.querySelector('body > main > div:nth-child('+(pos-1)+')').classList.contains('wall')){
            boum()
        }
        else if(document.querySelector('body > main > div:nth-child('+(pos-1)+')').classList.contains('treasure')){
            alert('Congrats');
        }
        else{
            pos--;
            document.querySelector('body > main > div:nth-child('+pos+')').appendChild(pawn);
            pawn.className = 'player player-color';
        }
        console.log(pos)
    }

    // down
    else if(e.key === 'ArrowDown' || e.key === 's'){
        if(document.querySelector('body > main > div:nth-child('+(pos+13)+')').classList.contains('wall')){
            boum()
        }
        else if(document.querySelector('body > main > div:nth-child('+(pos+13)+')').classList.contains('treasure')){
            alert('Congrats');
        }
        else{
            pos += 13;
            document.querySelector('body > main > div:nth-child('+pos+')').appendChild(pawn);
            pawn.className = 'player player-color';
        }
        console.log(pos)
    }

    // right
    else if(e.key === 'ArrowRight' || e.key === 'd'){
        if(document.querySelector('body > main > div:nth-child('+(pos+1)+')').classList.contains('wall') || document.querySelector('body > main > div:nth-child('+(pos+1)+')').classList.contains('wall')){
            boum()
        }
        else if(document.querySelector('body > main > div:nth-child('+(pos+1)+')').classList.contains('treasure')){
            pos++;
            document.querySelector('body > main > div:nth-child('+pos+')').appendChild(pawn);
            alert('Congrats');
        }
        else{
            pos++;
            document.querySelector('body > main > div:nth-child('+pos+')').appendChild(pawn);
            pawn.className = 'player player-color';
        }
        console.log(pos)
    }

    // reset
    if(e.key === 'r'){
        pos = 15;
        document.querySelector('body > main > div:nth-child(15)').appendChild(pawn);
        pawn.className = 'player player-color';
    }
})