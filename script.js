function toggleSelectContainer(selectedRadio) {
   
    const selectContainers = document.querySelectorAll('.select-container');
    
    
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach(item => {
        item.classList.remove('selected'); 
        item.querySelector('.select-container').style.display = 'none'; 
    });

    
    const selectedContainerId = `select-container${selectedRadio.value.charAt(0)}`; 
    const selectedContainer = document.getElementById(selectedContainerId);
    if (selectedContainer) {
        selectedContainer.style.display = 'block'; 
        selectedRadio.closest('.product-item').classList.add('selected'); 
    }
}

