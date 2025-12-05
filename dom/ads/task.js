class Rotator {
    constructor(element) {
        this.container = element;
        this.cases = Array.from(element.querySelectorAll('.rotator__case'));
        this.currentIndex = this.cases.findIndex(caseEl => 
            caseEl.classList.contains('rotator__case_active')
        );
        
        if (this.currentIndex === -1) {
            this.currentIndex = 0;
            this.cases[0].classList.add('rotator__case_active');
        }
        
        this.startRotation();
    }
    
    startRotation() {
     
        this.interval = setInterval(() => {
            this.nextCase();
        }, 1000);
    }
    
    nextCase() {
        this.cases[this.currentIndex].classList.remove('rotator__case_active');
        
        this.currentIndex = (this.currentIndex + 1) % this.cases.length;

        this.cases[this.currentIndex].classList.add('rotator__case_active');
    }
    
    stopRotation() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const rotators = document.querySelectorAll('.rotator');
    

    const rotatorInstances = Array.from(rotators).map(rotator => new Rotator(rotator));
   
    window.addEventListener('beforeunload', () => {
        rotatorInstances.forEach(rotator => rotator.stopRotation());
    });
});
