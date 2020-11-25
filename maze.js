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

// multiline.split('\n');
// multiline[0].split('');

// map design
for (let sign of multiline){
    if(sign !== '\n'){
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
        if(pos == 12 || document.querySelector('body > main > div:nth-child('+(pos-13)+')').classList.contains('wall')){
            return boum()
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
        if(pos > 130 || document.querySelector('body > main > div:nth-child('+(pos+13)+')').classList.contains('wall')){
            return boum()
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
        if(document.querySelector('body > main > div:nth-child('+(pos+1)+')').classList.contains('wall')){
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
    }
    console.log(pos)

    // reset
    if(e.key === 'r'){
        pos = 15;
        document.querySelector('body > main > div:nth-child(15)').appendChild(pawn);
        pawn.className = 'player player-color';
    }
})