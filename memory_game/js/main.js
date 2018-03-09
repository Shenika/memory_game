
var cardsInPlay = [];

//card choices for user to select
var cards = [
  {
    card: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    card: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    card: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    card: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
];


/*
 * flipCard - reveals the card selected by user
 */
var flipCard = function () {

  //this conditional statement prevent clicking more than two cards
  if(cardsInPlay.length < 2)
  {
  var cardId = this.getAttribute('data-id');
  console.log('card id:' +cardId);

      cardsInPlay.push(cards[cardId].card);
      console.log("cardsInPlay: " + cardsInPlay);
      this.setAttribute('src', cards[cardId].cardImage);

    //tells the browser to check for 2 cards
    if (cardsInPlay.length === 2) {
      checkForMatch();
    }
  }

};


//checkForMatch - checks to see if card0 matches card1

var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {

    //will prevent alert from interrupting the player's card selection
    
    setTimeout(function(){
      alert("You found a match!");
      cardsInPlay = [];
    },200);

  } else {

  
    if(cardsInPlay.length == 2)
    {
      setTimeout(function(){
        alert("Sorry, try again!");
        cardsInPlay = [];
      },200);

    }

  }

  setTimeout(resetCards,1000);

};


var resetCards = function(){
    for(var i = 0; i < cards.length; i++)
    {
      document.getElementById('card'+i).setAttribute('src','images/back.png');
    }
};


var createBoard = function () {
  for (var i = 0; i < cards.length; i++) {

    var cardElement = document.createElement('img');
        cardElement.setAttribute('id','card'+i);
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);

    document.getElementById('game-board').appendChild(cardElement);

  }

}
createBoard(0);
