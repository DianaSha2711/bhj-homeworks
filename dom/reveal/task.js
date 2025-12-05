document.addEventListener('DOMContentLoaded', function() {

    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length === 0) return;
 
    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
       
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    

    function handleScroll() {
        reveals.forEach(reveal => {
          
            if (reveal.classList.contains('reveal_active')) {
                return;
            }
            
          
            if (isElementInViewport(reveal)) {
                reveal.classList.add('reveal_active');
            }
        });
    }
    
    handleScroll();
    
    let isThrottled = false;
    function throttleScroll() {
        if (!isThrottled) {
            isThrottled = true;
            
            handleScroll();
            
            setTimeout(() => {
                isThrottled = false;
            }, 100); 
        }
    }
   
    window.addEventListener('scroll', throttleScroll);
   
    window.addEventListener('resize', handleScroll);
});
