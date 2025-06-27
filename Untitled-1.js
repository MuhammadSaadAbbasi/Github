for (let i = 0; i < tiles.length; i++) {
  tiles[i].addEventListener("click", () => {
    if (board[i] == "" && gameOver == false) {
      move(tiles[i], i, currentPlayer);
      currentPlayer = currentPlayer == "X" ? "O" : "X";

      if (isDraw()) {
        resultText.textContent = "It's a Draw";
        gameOver = true;
      }

      if (!isMultiplayer && !gameOver) {
        
        aiMove(board, currentPlayer);
        currentPlayer = currentPlayer == "O" ? "X" : "O";
        if (isDraw()) {
          resultText.textContent = "It's a Draw";
          gameOver = true;
        }
      }
    }
  });
}

    
    
      // Single Player Mode
      (currentPlayer == "X")
        ? turnText.textContent = `${playerName}'s Turn`
        : turnText.textContent = `Computer's turn`;

      if (checkWin(board, currentPlayer)) {
        (currentPlayer == "X")
          ? resultText.textContent = `You Won`
          : resultText.textContent = `Computer Won`;

          gameOver = true;
      }
    


      let aiMove = function (board, currentPlayer) {
        turnText.textContent = `Computer's Turn`; // show this before move
              // turnText.textContent = `Computer's Turn`;
    
          let aiChoose = aiIntelligence(board, "O", "X");
    
          if (aiChoose === null) {
            let emptyBoard = [];
            for (let i = 0; i < board.length; i++) {
              if (board[i] === "") {
                emptyBoard.push(i);
              }
            }
            aiChoose = emptyBoard[Math.floor(Math.random() * emptyBoard.length)];
          }
    
          move(tiles[aiChoose], aiChoose, currentPlayer);     
       
        // see bro the thing is that u have empty indices stored in emptyboard
        // it will give u an index in limit of emptyboard length . It not means that number is ur index of real one board
        // suppose emptyBoard =[3,2,5,7,8]
        // emptyBoard[Math.floor(0.72*5)] => emptyBoard[3] => 5
      }
    