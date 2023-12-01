// Hàm để lọc sản phẩm theo giá
function filterByPrice(arr, min, max) {
    // Trả về một mảng mới với những sản phẩm có giá nằm trong khoảng từ min đến max
    return arr.filter(function (product) {
      return product.price >= min && product.price <= max;
    });
  }

    // Gán kết quả vào phần tử HTML có class là cartegory-right-content
   
  function filterByPriceUnder100() {
    var checkbox = document.getElementById("filter-duoi-100-000d");
    // Kiểm tra xem checkbox có được tích hay không
    if (checkbox.checked) {
      var filteredProducts = filterByPrice(arrSp, 0, 100000);
      showProduct(filteredProducts);
      if(filteredProducts=='') {alert("hiện tại không có sản phẩm nào nằm trong khoảng giá này");
     showProduct(arrSp);
    }
    list = document.querySelectorAll('.cartegory-right-content .cartegory-right-content-item');
    }
    else showProduct(arrSp);
    loadItem();
  }
  document.getElementById("filter-duoi-100-000d").addEventListener("change", filterByPriceUnder100);
  
// -------- hàm lọc sản phẩm giá từ 100.000 đến 300.000đ
function filterByPriceFrom100To300(){
    var check=document.getElementById("filter-100-000d-300-000d");
    if(check.checked){
        var filteredProducts=filterByPrice(arrSp,100000,300000);
        showProduct(filteredProducts);
        if(filteredProducts=='') {alert("hiện tại không có sản phẩm nào nằm trong khoảng giá này");
        showProduct(arrSp);
    }
    list = document.querySelectorAll('.cartegory-right-content .cartegory-right-content-item');
    }
    else showProduct(arrSp);
    loadItem();
}
document.getElementById("filter-100-000d-300-000d").addEventListener("change",filterByPriceFrom100To300);
//----- hàm check giá từ 300-000d-500-000d
function filterByPriceFrom300To500(){
    var check=document.getElementById("filter-300-000d-500-000d");
    if(check.checked){
        var filteredProducts=filterByPrice(arrSp,300000,500000);
        showProduct(filteredProducts);
        if(filteredProducts=='') {alert("hiện tại không có sản phẩm nào nằm trong khoảng giá này");
        showProduct(arrSp);
    }
    else {
        showProduct(filteredProducts);
        list = document.querySelectorAll('.cartegory-right-content .cartegory-right-content-item');
        loadItem();  // Call loadItem() to update pagination
    }
} else {
    showProduct(arrSp);
    loadItem();  // Call loadItem() to update pagination
}
    
}
document.getElementById("filter-300-000d-500-000d").addEventListener("change",filterByPriceFrom300To500);

//------- hàm check giá từ 500k đến 1m
function filterByPriceFrom500To1000(){
    var check=document.getElementById("filter-500-000d-1-000-000d");
    if(check.checked){
        var filteredProducts=filterByPrice(arrSp,500000,1000000);
        showProduct(filteredProducts);
        if(filteredProducts=='') {alert("hiện tại không có sản phẩm nào nằm trong khoảng giá này");
        showProduct(arrSp);
    }
    list = document.querySelectorAll('.cartegory-right-content .cartegory-right-content-item');
    }
    else{
        showProduct(arrSp);
    }
    loadItem();
}
document.getElementById("filter-500-000d-1-000-000d").addEventListener("change",filterByPriceFrom500To1000);
//------- hàm check giá trên 1m
function filterByPriceBelow1000(){
    var check=document.getElementById("filter-tren1-000-000d");
    if(check.checked){
        var filteredProducts=filterByPrice(arrSp,1000000,1000000000000000000000);
        showProduct(filteredProducts);
        if(filteredProducts=='') {alert("hiện tại không có sản phẩm nào nằm trong khoảng giá này");
        showProduct(arrSp);
    }
    list = document.querySelectorAll('.cartegory-right-content .cartegory-right-content-item');

    // Đặt lại trang về 1
    thisPage = 1;
    }
    else{
        showProduct(arrSp);
    }
    loadItem();
   
}
document.getElementById("filter-tren1-000-000d").addEventListener("change",filterByPriceBelow1000);

///********************************** */
