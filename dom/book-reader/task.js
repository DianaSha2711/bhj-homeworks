
document.addEventListener('DOMContentLoaded', function() {
    const fontSizeControl = document.querySelector('.book__control_font-size');
    const bookElement = document.getElementById('book');
    
    if (!fontSizeControl || !bookElement) return;
    fontSizeControl.addEventListener('click', function(event) {
        event.preventDefault();
        
        const target = event.target.closest('.font-size');
        if (!target) return;
        
  
        document.querySelectorAll('.font-size_active').forEach(el => {
            el.classList.remove('font-size_active');
        });
        

        target.classList.add('font-size_active');
        
        const selectedSize = target.dataset.size;
        
 
        bookElement.classList.remove('book_fs-small', 'book_fs-big');
        
        if (selectedSize === 'small') {
            bookElement.classList.add('book_fs-small');
        } else if (selectedSize === 'big') {
            bookElement.classList.add('book_fs-big');
        }
 
    });
});
