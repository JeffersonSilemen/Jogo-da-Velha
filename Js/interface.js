document.addEventListener('DOMContentLoaded', ()=>{
    let squares = document.querySelectorAll('.square');
    squares.forEach((square)=>{
        square.addEventListener('click', handleClick);
    })
})
function handleClick(event){
    let square = event.target;
    let position = square.id;
    if(handleMove(position)){
        setTimeout(()=>{
            let result = document.getElementById('result');
            result.style.display = 'inline-block';
        },10);
    }
    updateSquare(position);
    
}
function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
    turnIndicator();
    score(playerTime);
}
function turnIndicator (){
    let player1Indicator = document.getElementById('player1_name');
    let player2Indicator = document.getElementById('player2_name');
    if(playerTime == 0){
        player1Indicator.style.backgroundColor = 'rgb(17, 17, 216)';
        player1Indicator.style.color = 'black';
        player2Indicator.style.backgroundColor = 'black';
        player2Indicator.style.color = 'white';
    }else{
        player2Indicator.style.backgroundColor = 'rgb(17, 17, 216)';
        player2Indicator.style.color = 'black';
        player1Indicator.style.backgroundColor = 'black';
        player1Indicator.style.color = 'white';
    }    
}
function score(playerTime){
    player1 = document.getElementById("player1_score");
    player2 = document.getElementById("player2_score");
    player1_score = parseInt(player1.innerHTML);
    player2_score = parseInt(player2.innerHTML);
    if (player_time) {
        player2_score += 1;
        player2.innerHTML = player2_score;
      } else {
        player1_score += 1;
        player1.innerHTML = player1_score;
      }
}
function closeResult(){
    let result = document.getElementById('result');
    result.style.display = 'none';
}
function handleResetGame(){
    document.querySelectorAll('.square').forEach((square)=>{
        square.innerHTML = '';
        resetGame();
        turnIndicator();
    });
}