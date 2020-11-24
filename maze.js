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
pawn.className = 'player';
document.querySelector('body > main > div:nth-child(15)').appendChild(pawn);

let pos = 15;
// moves
document.body.addEventListener('keyup', (e) =>{
    if(e.key === 'ArrowUp' || e.key === 'z'){
        if(document.querySelector('body > main > div:nth-child('+(pos-13)+')').classList.contains('wall')){
            pawn.style.backgroundColor = 'red';
        }
        else if(document.querySelector('body > main > div:nth-child('+(pos-13)+')').classList.contains('treasure')){
            alert('Congrats');
        }
        else{
            pos -= 13;
            document.querySelector('body > main > div:nth-child('+pos+')').appendChild(pawn);
            pawn.style.backgroundColor = 'darkmagenta';
        }
    }
    else if(e.key === 'ArrowLeft' || e.key === 'q'){
        if(document.querySelector('body > main > div:nth-child('+(pos-1)+')').classList.contains('wall')){
            pawn.style.backgroundColor = 'red';
        }
        else if(document.querySelector('body > main > div:nth-child('+(pos-1)+')').classList.contains('treasure')){
            alert('Congrats');
        }
        else{
            pos--;
            document.querySelector('body > main > div:nth-child('+pos+')').appendChild(pawn);
            pawn.style.backgroundColor = 'darkmagenta';
        }
    }
    else if(e.key === 'ArrowDown' || e.key === 's'){
        if(document.querySelector('body > main > div:nth-child('+(pos+13)+')').classList.contains('wall')){
            pawn.style.backgroundColor = 'red';
        }
        else if(document.querySelector('body > main > div:nth-child('+(pos+13)+')').classList.contains('treasure')){
            alert('Congrats');
        }
        else{
            pos += 13;
            document.querySelector('body > main > div:nth-child('+pos+')').appendChild(pawn);
            pawn.style.backgroundColor = 'darkmagenta';
        }
    }
    else if(e.key === 'ArrowRight' || e.key === 'd'){
        if(document.querySelector('body > main > div:nth-child('+(pos+1)+')').classList.contains('wall')){
            pawn.style.backgroundColor = 'red';
        }
        else if(document.querySelector('body > main > div:nth-child('+(pos+1)+')').classList.contains('treasure')){
            pos++;
            document.querySelector('body > main > div:nth-child('+pos+')').appendChild(pawn);
            alert('Congrats');
        }
        else{
            pos++;
            document.querySelector('body > main > div:nth-child('+pos+')').appendChild(pawn);
            pawn.style.backgroundColor = 'darkmagenta';
        }
    }
    if(e.key === 'r'){
        pos = 15;
        document.querySelector('body > main > div:nth-child(15)').appendChild(pawn);
        pawn.style.backgroundColor = 'darkmagenta';
    }
})