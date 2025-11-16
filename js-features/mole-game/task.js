const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');
let dead = 0;
let lost = 0;
for (let i = 1; i <=9; i++){
   const hole= document.getElementById('hole'+i);
   hole.addEventListener('click', ()=>{
        if(hole.classList.contains('hole_has-mole')){
            dead++; 
            deadCounter.textContent = dead;
        } else {
            lost++;
            lostCounter.textContent = lost;
        }
        checkGameStatus();
    })
}
function checkGameStatus(){
    if (dead == 10){
        alert('Победа!');
        resetGame();
    } else if(lost ===5){
        alert('Поражение!');
        resetGame();
    }
    function resetGame(){
        dead = 0;
        lost = 0;
    }
}
 
