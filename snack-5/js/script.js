//todo: Abbiamo questa lista di articoli di moda:
/*
    name        type      color
    Poppy       tshirt    red
    Jumping     occhiali  blue
    CrissCross  scarpe    black
    Jenny       borsa     pink
*/

//todo: Questi articoli sono inseriti in un array di oggetti. Dobbiamo attaccare a ognuno un cartellino position con una lettera dell'alfabeto generata casualmente e inserire gli oggetti così modificati in un nuovo array di oggetti.

const articlesList = [
    {
        name: 'Poppy',
        type: 'tshirt',
        color:  'red'
    },
    {
        name: 'Jumping',
        type: 'occhiali',
        color:  'blue'
    },
    {
        name: 'CrissCross',
        type: 'scarpe',
        color:  'black'
    },
    {
        name: 'Jenny',
        type: 'borsa',
        color:  'pink'
    }
]

console.log(articlesList);


function getRandomLetter(){
    let string = 'aquickbrownfoxjumpsoverlazydog';
    let lettersArray = string.split('');
    const randomLetterIndex = getRandomIntNumber(0, lettersArray.length -1);
    return lettersArray[randomLetterIndex];
}

function getRandomIntNumber(min, max){
    return Math.floor((Math.random() * (max - min) + 1) + min);
}