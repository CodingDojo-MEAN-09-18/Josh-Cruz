class Card {
    constructor(suit, numValue, strValue){
        this.suit = suit;
        this.numValue=numValue;
        this.strValue=strValue;
        this.show = ()=> {
            console.log(`Suit: ${this.suit} `);
            console.log(`Value: ${this.strValue} and its worth ${this.numValue}`);
            return this;
        };
    }

}

class Deck {
    constructor() {
        this.deck = [];
        this.reset();
        this.shuffle();
    }

    reset() {
        this.deck = [];

        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

        for (let suit in suits) {
            for (let value in values) {
                this.deck.push(`${values[value]} of ${suits[suit]}`);
            }
        }
    }

    function shuffle(array) {
    var random = array.map(Math.random);
        array.sort(function (a, b) {
            return random[a] - random[b];
        });
    }

    deal() {
        return this.deck.pop();
    }
}

const deck1 = new Deck();
console.log(deck1.deck);
deck1.reset();
console.log(deck1.deck);
