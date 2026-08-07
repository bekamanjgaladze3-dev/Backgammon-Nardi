window.addEventListener("DOMContentLoaded", ()=>{
  // ნარდის დაფის პოზიციების ობიექტი (1-დან 24-ის ჩათვლით)
const nardiBoardState = [
  { player: 'white', count: 2 }, // Point 0  (2 White)
  { player: null,    count: 0 }, // Point 1
  { player: null,    count: 0 }, // Point 2
  { player: null,    count: 0 }, // Point 3
  { player: null,    count: 0 }, // Point 4
  { player: 'black', count: 5 }, // Point 5  (5 Black)
  { player: null,    count: 0 }, // Point 6
  { player: 'black', count: 3 }, // Point 7  (3 Black)
  { player: null,    count: 0 }, // Point 8
  { player: null,    count: 0 }, // Point 9
  { player: null,    count: 0 }, // Point 10
  { player: 'white', count: 5 }, // Point 11 (5 White)
  { player: 'black', count: 5 }, // Point 12 (5 Black)
  { player: null,    count: 0 }, // Point 13
  { player: null,    count: 0 }, // Point 14
  { player: null,    count: 0 }, // Point 15
  { player: 'white', count: 3 }, // Point 16 (3 White)
  { player: null,    count: 0 }, // Point 17
  { player: 'white', count: 5 }, // Point 18 (5 White)
  { player: null,    count: 0 }, // Point 19
  { player: null,    count: 0 }, // Point 20
  { player: null,    count: 0 }, // Point 21
  { player: null,    count: 0 }, // Point 22
  { player: 'black', count: 2 }  // Point 23 (2 Black)
];

const state = {
chekers: document.querySelectorAll("[data-point]"),
dices: document.querySelectorAll(".die > img"),
activePlayerIndex: 0,
players: ["White's turn", "Black's turn"],
turn_Indicator: document.querySelector("#turn-indicator"),
rollDiceBtn: document.querySelector(".roll-btn"),
urlOfDice: ["dice-1.png","dice-2.png","dice-3.png","dice-4.png","dice-5.png","dice-6.png"],
randomIndex: 0,
randomIndex2: 0,
isRoll: false
}


// Code goes Below =======================================================================================


function drawChekers(){

  for (let i = 0; i < nardiBoardState.length; i++) {
  const currentState = nardiBoardState[i];

  if (currentState.player !== null && currentState.count > 0) {
    
    const pointEl = document.querySelector(`[data-point="${i}"]`);
    const stackEl = pointEl.querySelector('.checker-stack') || pointEl.children[1];

    stackEl.insertAdjacentHTML(
      "beforeend",
      `<div class="checker checker-${currentState.player}" id=${i}></div>`.repeat(currentState.count)
    );
  }
}

}
drawChekers();



function rollAnimation(){

   const timeOut = setInterval(()=>{
           state.randomIndex = Math.trunc(Math.random() * state.urlOfDice.length);
  state.randomIndex2 = Math.trunc(Math.random() * state.urlOfDice.length)
    state.dices[0].src = state.urlOfDice[state.randomIndex];
      state.dices[1].src = state.urlOfDice[state.randomIndex2];
     },60)
   setTimeout(()=>{
     
     clearInterval(timeOut)
  
   }, 2000)
}

function assignEventToCheckers(){
   const blackChekers = document.querySelectorAll(".checker-black");
const whiteChekers = document.querySelectorAll(".checker-white");

console.log("Black:", blackChekers.length);
console.log("White:", whiteChekers.length);

         console.log(whiteChekers)
   if(state.players[state.activePlayerIndex] === "White's turn"){
   
     
       whiteChekers.forEach(checker=> checker.addEventListener("click", makePossibleMoves, false))
        blackChekers.forEach(checker=> checker.removeEventListener("click", makePossibleMoves))
   }

      if(state.players[state.activePlayerIndex] === "Black's turn"){
     
     
       blackChekers.forEach(checker=> checker.addEventListener("click", makePossibleMoves, false))
       whiteChekers.forEach(checker=> checker.removeEventListener("click", makePossibleMoves))
   }
}


function makePossibleMoves(e) {

    const diceResult = (state.randomIndex + 1) + (state.randomIndex2 + 1);
    let currentPoint = Number(
        e.target.closest("[data-point]").dataset.point
    );

    const allPoints = Array.from(document.querySelectorAll("[data-point]"))
  .sort((a, b) => Number(a.dataset.point) - Number(b.dataset.point));
  
     



    // Remove previous ghost checkers
    document.querySelectorAll(".checker-ghost").forEach(ghost => ghost.remove());

   for(let i = 0; i < diceResult; i++){

     console.log(allPoints[currentPoint + i + 1])
   }
}


//    for(let i = diceResult; i > 0; i--){

//      console.log( allPoints[currentPoint - i])
//    }
// }



state.rollDiceBtn.addEventListener("click", ()=>{
  

   if(state.isRoll) return;
  rollAnimation(); 
  assignEventToCheckers();
   state.isRoll = true;
})




})



 