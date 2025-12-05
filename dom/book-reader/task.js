document.addEventListener ( ' DOMContentLoaded ' , function ( ) {  
    const  fontSizeControl  =  document.querySelector ( ' . book__control_font -size' ) ;
    const  bookElement  =  document.getElementById ( ' book ' ) ;


    если  ( ! fontSizeControl  ||  ! bookElement )  вернуть ;

    fontSizeControl.addEventListener ( ' click ' , function ( event ) {  
        событие . preventDefault ( ) ;

        const  target  =  event.target.closest ( '. font - size ' ) ;
        если  ( ! цель )  вернуть ;

        document.querySelectorAll ( ' . font -size_active') ) . forEach ( el => {  
            el.classList.remove ( ' font - size_active ' ) ;
        } ) ;

        target.classList.add ( ' font - size_active ' ) ;


        const  selectedSize  =  target.dataset.size ;​​​​


        bookElement.classList.remove ( ' book_fs - small' , 'book_fs- big ' ) ; 


        если  ( selectedSize  ===  'small' )  {
            bookElement.classList.add ( ' book_fs - small ' ) ;
        }  иначе  если  ( selectedSize  ===  'big' )  {
            bookElement.classList.add ( ' book_fs - big ' ) ;
        }

    } ) ;
} ) ;
