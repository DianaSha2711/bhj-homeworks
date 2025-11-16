const clickerCounter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
let clickCount = 0;
cookie.addEventListener('click', handleCookieClick);
let bIsIncreasing = false;
function handleCookieClick(){
    clickCount++;
    clickerCounter.textContent = clickCount;
    cookie.width = bIsIncreasing?200:250;
    bIsIncreasing= !bIsIncreasing;
}
