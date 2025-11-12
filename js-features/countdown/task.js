const initialSeconds = document.getElementById("timer");
if (initialSeconds){
    let nSec = +(initialSeconds.innerText);
    const timerId= setInterval(()=>{
        nSec--; 
        initialSeconds.innerText=nSec;
        if (nSec<=0){
            clearInterval(timerId);
            alert("Вы победили в конкурсе!");
        }
    },1000)
}
