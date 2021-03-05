// cariables and constants

let deck1 = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
let deck2 = []
let cardToRemove = []

// cached element references 
let deck1El = document.getElementById('deck1')
let deck2El = document.getElementById('deck2')
let flipBtn = document.getElementById('btn')


// event listeners

flipBtn.addEventListener('click', handleClick)

// functions

function handleClick(){
    if (deck1.length > 0){
        
    }
// assign a random card to a variable
let cardPicked 
let randIdx = Math.floor(Math.random()*deck1.length)


// splice the picked card out of deck1El
cardPicked = deck1.splice(randidx, 1)

// add the picked card to deck 2
deck2.push(cardPicked)

console.log('deck1', deck1)
console.log('deck2', deck2)

// call render function (refresh the card being displayed)
render(cardPicked)
}

function render(cardPicked){

    // removes the card outline for deck1 on the first card draw
if (deck2.length === 1) {
    deck2El.classList.remove('outline')
}

    // remove the previous card's CSS selector
if (deck2.length > 1) {
    deck2El.classList.remove(cardToRemove)
}

    // store the card to remove next round as a variable
    let cardToRemove = cardPicked


    // add cardPicked CSS selector to deck2
deck2El.classList.add(cardPicked)

    // adjusting shadow when halfway through the deck
if (deck2.length === 26) {
    deck2El.classList.add('shadow')
    deck1El.classList.add('shadow')
}

    // remove the card deck color and add an outline to deck1
if (deck1.length === 0) {
    deck1El.classList.add('outline')
    deck1El.classList.remove('back-blue')
}
}
