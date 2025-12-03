unction initDropdowns() {
  
  const dropdowns = document.querySelectorAll('.dropdown');
  
  dropdowns.forEach(dropdown => {

    const dropdownValue = dropdown.querySelector('.dropdown__value');
    const dropdownList = dropdown.querySelector('.dropdown__list');
    const dropdownItems = dropdown.querySelectorAll('.dropdown__item');
    
    dropdownValue.addEventListener('click', (event) => {
      event.stopPropagation(); 
      
      
      document.querySelectorAll('.dropdown__list_active').forEach(list => {
        if (list !== dropdownList) {
          list.classList.remove('dropdown__list_active');
        }
      });
      
     
      dropdownList.classList.toggle('dropdown__list_active');
    });
    

    dropdownItems.forEach(item => {
      const link = item.querySelector('.dropdown__link');
      
      link.addEventListener('click', (event) => {
        event.preventDefault(); 
        event.stopPropagation(); 
        
        const newValue = link.textContent.trim();
        
       
        dropdownValue.textContent = newValue;
        
       
        dropdownList.classList.remove('dropdown__list_active');
      });
    });
  });
  

  document.addEventListener('click', (event) => {
   
    const isClickInsideDropdown = event.target.closest('.dropdown');
    
    if (!isClickInsideDropdown) {
     
      document.querySelectorAll('.dropdown__list_active').forEach(list => {
        list.classList.remove('dropdown__list_active');
      });
    }
  });
  
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      document.querySelectorAll('.dropdown__list_active').forEach(list => {
        list.classList.remove('dropdown__list_active');
      });
    }
  });
}


document.addEventListener('DOMContentLoaded', initDropdowns);
