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
            if ((filters.cartegory === 'Pants' && itemNameLower.includes('pants')) ||
                (filters.cartegory === 'T-SHIRTS' && !itemNameLower.includes('pants'))) {
                return true;
            }

            return false;
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
}
