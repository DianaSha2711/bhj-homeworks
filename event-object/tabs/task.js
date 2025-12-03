document.addEventListener('DOMContentLoaded', function() {
    const tabContainer = document.querySelector('.tab__navigation');
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab__content');
    
    if (!tabContainer || tabs.length === 0 || tabContents.length === 0) {
        console.error('Элементы вкладок не найдены');
        return;
    }
    

    tabContainer.addEventListener('click', function(event) {
      
        const clickedTab = event.target.closest('.tab');
        
    
        if (!clickedTab) return;
        
        
        const tabIndex = Array.from(tabs).indexOf(clickedTab);

        if (clickedTab.classList.contains('tab_active')) return;
        

        deactivateAllTabs();
        
      
        activateTab(clickedTab, tabIndex);
    });
    
    initFirstTab();
 
    function deactivateAllTabs() {
        tabs.forEach(tab => {
            tab.classList.remove('tab_active');
        });
        
        tabContents.forEach(content => {
            content.classList.remove('tab__content_active');
        });
    }
    
    function activateTab(tab, index) {
        tab.classList.add('tab_active');
        
        if (tabContents[index]) {
            tabContents[index].classList.add('tab__content_active');
        }
    }
    
    function initFirstTab() {
        const hasActiveTab = document.querySelector('.tab_active');
        
        if (!hasActiveTab && tabs.length > 0) {
            tabs[0].classList.add('tab_active');
            if (tabContents[0]) {
                tabContents[0].classList.add('tab__content_active');
            }
        }
    }
});
