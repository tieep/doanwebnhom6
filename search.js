let filters = {
    name: '',
    cartegory: '',
    minPrice: '',
    maxPrice: ''
};
let listProduct = document.getElementById("ctgrr");
let filter = document.querySelector(".filter");
let filteredProducts = [];
filter.addEventListener('submit', function (event) {
    event.preventDefault();
    let valueFilter = event.target.elements;
    filters = {
        name: valueFilter.name.value,
        cartegory: valueFilter.cartegory.value,
        minPrice: valueFilter.minPrice.value,
        maxPrice: valueFilter.maxPrice.value
    };

    applyFilters();
    loadItem(filteredProducts);
});

function applyFilters() {
    filteredProducts = arrSp.filter(item => {
        let itemNameLower = item.name.toLowerCase();

        if (filters.name !== '' && !itemNameLower.includes(filters.name.toLowerCase())) {
            return false;
          }
      
          if (filters.cartegory !== '') {
            if (filters.cartegory === 'Pants' && !itemNameLower.includes('pants')) {
                return false;
            }

            if (filters.cartegory === 'T-SHIRTS' && itemNameLower.includes('pants')) {
                return false;
            }
        }
      
          if (filters.minPrice !== '' && item.price < filters.minPrice) {
            return false;
          }
      
          if (filters.maxPrice !== '' && item.price > filters.maxPrice) {
            return false;
          }
      
          return true;
        });
    thisPage=1;
    limit = 12;
    
        loadItem(filteredProducts);
        listPage(filteredProducts);
        showProduct(filteredProducts);
    if(filteredProducts.length===0)
       {
        alert("Không tìm thấy sản phẩm");
       }
       if(filteredProducts.length===1) 
       {
        document.getElementById("ctgr-content-item").style.width="100%";
    }
    if(filteredProducts.length===2) 
    {
    
     document.getElementById("ctgr-content-item").style.margin="0 -10px 0 0 ";
 }
    
}
