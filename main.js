const cardArray = [
    {
        name:"fries",
        image: "./images/fries.png"
    },
    {
        name:"cheeseburger",
        image: "./images/cheeseburger.png"
    },
    {
        name:"hotdog",
        image: "./images/hotdog.png"
    },
    {
        name:"Ice Cream",
        image: "./images/ice-cream.png"
    },
    {
        name:"Milk Shake",
        image: "./images/milkshake.png"
    },
    {
        name:"Pizza",
        image: "./images/pizza.png"
    },
    {
        name:"fries",
        image: "./images/fries.png"
    },
    {
        name:"cheeseburger",
        image: "./images/cheeseburger.png"
    },
    {
        name:"hotdog",
        image: "./images/hotdog.png"
    },
    {
        name:"Ice Cream",
        image: "./images/ice-cream.png"
    },
    {
        name:"Milk Shake",
        image: "./images/milkshake.png"
    },
    {
        name:"Pizza",
        image: "./images/pizza.png"
    },
]

let score = 0;
let chance = 0;

cardArray.sort(()=> 0.5 - Math.random())

const grid = document.querySelector("#grid")
let chosenCards = []
let chosenCardsId = []
const cardsWon = []

function createBoard()
{
   for(let i =0;i<12;i++)
   {
    const card = document.createElement("img");
    card.setAttribute("src","./images/blank.png");
    card.setAttribute("data-id",i);
    card.addEventListener("click",flipCard)
    grid.appendChild(card)
   }
   console.log(grid)
}

createBoard()


function checkMatch()
{
    const cards = document.querySelectorAll("#grid img")
    let optionOne = chosenCardsId[0]
    let optionTwo = chosenCardsId[1]

    if(optionOne === optionTwo)
    {
        cards[optionOne].setAttribute("src","./images/blank.png")
        cards[optionTwo].setAttribute("src","./images/blank.png")
        
    }
    else if(chosenCards[0] === chosenCards[1])
    {
        alert("Match Found")
        score++
        cards[optionOne].setAttribute("src","./images/white.png")
        cards[optionTwo].setAttribute("src","./images/white.png")
        cards[optionOne].removeEventListener("click",flipCard)
        cards[optionTwo].removeEventListener("click",flipCard)
        cardsWon.push(chosenCards)
        document.querySelector("#score").textContent = score
        
    }
    else
    {
        cards[optionOne].setAttribute("src","./images/blank.png")
        cards[optionTwo].setAttribute("src","./images/blank.png")
        chance++;
        if(chance === 5)
        {
        document.querySelector("#score").textContent =  "Game Over";
        grid.classList.add("none")
        
        }
    }

    chosenCards = []
    chosenCardsId = []
    
}

function flipCard()
{
    let cardId = this.getAttribute("data-id")
    chosenCards.push(cardArray[cardId].name)
    chosenCardsId.push(cardId)
    this.setAttribute("src",cardArray[cardId].image)
    if(chosenCards.length === 2)
    {
        setTimeout(checkMatch,500)
    }

    
    
}


document.getElementById("restart").addEventListener("click",()=>{
    location.reload();
})