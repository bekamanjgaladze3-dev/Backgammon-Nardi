window.addEventListener("DOMContentLoaded", ()=>{
  // ნარდის დაფის პოზიციების ობიექტი (1-დან 24-ის ჩათვლით)
const nardiBoardState = [
   { player: 'black', count: 2 },
   { player: null,    count: 0 },
    { player: 'white', count: 1 },
    { player: null,    count: 0 },
   { player: 'black', count: 3 },
   { player: null,    count: 0 },
  { player: 'white', count: 2 },
  { player: null,    count: 0 },
   { player: null,    count: 0 },
   { player: 'black', count: 1 },
     { player: null,    count: 0 },
  { player: 'black', count: 9 }, // შავების დარჩენილი „თავი“
  { player: 'white', count: 3 },
  { player: null,    count: 0 },
  { player: null,    count: 0 },
  { player: 'black', count: 0 },
  { player: 'white', count: 2 },
  { player: null,    count: 0 },
  { player: 'white', count: 2 },
  { player: null,    count: 0 },
  { player: null,    count: 0 },
  { player: null,    count: 0 },
  { player: null,    count: 0 },
  { player: 'white', count: 5 }  // თეთრების დარჩენილი „თავი“
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
    
    const pointEl = document.querySelector(`[data-point="${i + 1}"]`);
    const stackEl = pointEl.querySelector('.checker-stack') || pointEl.children[1];

    stackEl.insertAdjacentHTML(
      "beforeend",
      `<div class="checker checker-${currentState.player}"></div>`.repeat(currentState.count)
    );
  }
}

}
drawChekers();



function rollAnimation(){

   const timeOut = setInterval(()=>{
           state.randomIndex = Math.trunc(Math.random() * state.urlOfDice.length - 1);
  state.randomIndex2 = Math.trunc(Math.random() * state.urlOfDice.length - 1);
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


function makePossibleMoves(e){

   const diceresult = state.randomIndex + state.randomIndex2;
    
}





state.rollDiceBtn.addEventListener("click", ()=>{
  

   if(state.isRoll) return;
  rollAnimation(); 
  assignEventToCheckers();
   state.isRoll = true;
})




})



 