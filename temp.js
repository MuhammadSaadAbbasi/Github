  let board = ["", "", "", "", "", "", "", "", ""];
  const tiles = document.querySelectorAll(".play");
  let currentPlayer = "X";
  let gameOver = false;
  let isMultiplayer = false;
  let playerName ="Player 1";
  let mPlayerName ="Player 2";

  // 🎯 DOM Element Shortcuts
  const turnText = document.querySelector(".turn");
  const resultText = document.querySelector(".result");
  const selectScreen = document.querySelector(".select");
  const gameScreen = document.querySelector(".game");
  const startScreenSingle = document.querySelector(".startScreen");
  const startScreenMulti = document.querySelector(".mStartScreen");
  const inputSection = document.querySelector(".input");
  const teaseBox = document.querySelector(".tease");
  const nameInput = document.getElementById("name");
  const name1Input = document.getElementById("name1");
  const name2Input = document.getElementById("name2");
  const singleBtn = document.querySelector(".single");
  const multiBtn = document.querySelector(".double");
 

  function assignName(){
    if(isMultiplayer){
      playerName = name1Input;
      mPlayerName = name2Input;
    }
    else{
      playerName = nameInput;
    }

  }
  
   singleBtn.addEventListener("click",()=>{
   selectScreen.style.display = "none";
   inputSection.style.display = "flex";
   startScreenSingle.style.display = "flex";
   isMultiplayer=false;
   })

   multiBtn.addEventListener("click",()=>{
   selectScreen.style.display = "none";
   inputSection.style.display = "flex";
   startScreenMulti.style.display = "flex";
   isMultiplayer=true;
   })

   function start(){
  assignName();
   inputSection.style.display = "none";
   startScreenMulti.style.display = "none";
   startScreenSingle.style.display = "none";
   gameScreen.style.display = "flex"; 
   }
   function mainMenu(){
   selectScreen.style.display = "flex";
   inputSection.style.display = "none";
   startScreenMulti.style.display = "none";
   startScreenSingle.style.display = "none";
   gameScreen.style.display = "none"; 
 }

 function initGame(){
  if(!gameOver){
  tiles.forEach(tile=>{
    tile.addEventListener("click",tileClicked(tile));
  })
}
 }

function tileClicked(tile){
 if(tile.textContent==""){
  console.log(tile.dataset.index);
   move();
 }
}

 function move(){
  tile.textContent = currentPlayer;
   currentPlayer = currentPlayer == "X"? "O":"X";
 }
 function winCheck(){

 }
 function aiSaga(){

 }