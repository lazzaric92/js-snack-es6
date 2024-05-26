//todo: Abbiamo questa lista di articoli di moda:
/*
    name        type      color
    Poppy       tshirt    red
    Jumping     occhiali  blue
    CrissCross  scarpe    black
    Jenny       borsa     pink
*/

//todo: Questi articoli sono inseriti in un array di oggetti. Dobbiamo attaccare a ognuno un cartellino position con una lettera dell'alfabeto generata casualmente e inserire gli oggetti così modificati in un nuovo array di oggetti.


// || SELECTORS
const outputEl = document.querySelector('#output');

// || VARIABLES
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

const newArticlesList = [];



articlesList.forEach(article => {
    let letter = getRandomLetter();
    const {name, type, color, position = letter} = article;
    newArticlesList.push({position, name, type, color});
});

console.log(newArticlesList);

newArticlesList.forEach(item => {
    const {name, type, color} = item;
    const articleEl = document.createElement('article');
    articleEl.classList.add('card');
    
    const hTwoEl = document.createElement('h2');
    hTwoEl.append(name);
    articleEl.appendChild(hTwoEl);
    
    const pEl = document.createElement('p');
    pEl.append(type);
    articleEl.appendChild(pEl);

    articleEl.style.borderColor = color;
    
    outputEl.appendChild(articleEl);
})


// || FUNCTIONS

function getRandomLetter(){
    let string = 'aquickbrownfoxjumpsoverlazydog';
    let lettersArray = string.split('');
    const randomLetterIndex = getRandomIntNumber(0, lettersArray.length -1);
    return lettersArray[randomLetterIndex];
}

function getRandomIntNumber(min, max){
    return Math.floor((Math.random() * (max - min) + 1) + min);
}


// || MEMO
// <article class="card"></article>
// <h2>Poppy</h2>
// <p>tshirt</p>