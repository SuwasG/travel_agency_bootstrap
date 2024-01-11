
const displayMsg = (msg, idName, colorName) => {
    document.getElementById(idName).innerHTML = msg
    document.getElementById(idName).style.backgroundColor = colorName
  
  }
  // Get the price input elements
  const minPriceInput = document.getElementById('minPrice');
  const maxPriceInput = document.getElementById('maxPrice');
  
  // Get the filter button
  const filterButton = document.getElementById('filterButton');
  
  // Get all package cards
  const packageCards = Array.from(document.getElementsByClassName('packageCard'));
  
  // Attach event listeners to the filter button
  filterButton.addEventListener('click', filterPackages);
  
  // Function to filter packages based on the selected price range
  function filterPackages() {
  const minPrice = parseFloat(minPriceInput.value);
  const maxPrice = parseFloat(maxPriceInput.value);
  
  packageCards.forEach((card) => {
    const price = parseFloat(card.getAttribute('data-price'));
  
    if (price >= minPrice && price <= maxPrice) {
      const number_cards=packageCards.length
      if(number_cards>=1){
        card.style.display = 'block';
      }
    else {
      card.style.display = 'none';
      // document.getElementsByClassName('message').innerHtml=span
     displayMsg('Sorry, did not found any packages/offers for this price range.','msg','red')
    }
  }
  });
  }



  