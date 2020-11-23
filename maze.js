const main = document.querySelector('main');

const multiline = '***********.**S.....**.*.T*****.....*.******.***.*.******.*****.******.*****.******.......******.********.........****.******...***....********';

multiline.split('');

for (let sign of multiline){
    const tiles = document.createElement('div');
    tiles.className = 'tile';
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