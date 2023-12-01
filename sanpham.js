let sp={name: "Essentials Pants", img: "../image/product_44.jpg", price: 640000, id: "p42", quantity: 100,brand:"adidas",size:"L"};
let pants=[];
let shirt=[];
let currentCategory = "all";
const arrSp=[
    {name: "Essentials Pants", img: "../image/product_44.jpg", price: 640000, id: "p42", quantity: 100,brand:"adidas",size:"L"},
    {name: "Tiro 19 Training Pants", img: "../image/product_45.jpg", price: 800000, id: "p43", quantity: 100,brand:"adidas",size:"L"},
    {name: "3-Stripes Pants", img: "../image/product_46.jpg", price: 900000, id: "p44", quantity: 100,brand:"adidas",size:"L"},
    {name: "Arsenal Third Jersey", img: "../image/product_14.jpg", price: 1800000, id: "s14", quantity: 100,brand:"adidas",size:"L"},
    {name: "Chile 20 Tee", img: "../image/product_15.jpg", price: 900000, id: "s15", quantity: 100,brand:"adidas",size:"L"},
    {name: "3D Trefoil Graphic Tee", img: "../image/product_16.jpg", price: 600000, id: "s16", quantity: 100,brand:"adidas",size:"L"},
    {name: "Trefoil Tee", img: "../image/product_17.jpg", price: 600000, id: "s17", quantity: 100,brand:"adidas",size:"L"},
    {name: "Pride Trefoil Flag Fill Tee", img: "../image/product_32.jpg", price: 600000, id: "s30", quantity: 100,brand:"adidas",size:"L"},
    {name: "Big Badge of Sport Boxy Tee", img: "../image/product_33.jpg", price: 600000, id: "s31", quantity: 100,brand:"adidas",size:"L"},
    {name: "Lil Stripe Splash Tee", img: "../image/product_34.jpg", price: 500000, id: "s32", quantity: 100,brand:"adidas",size:"L"},
    {name: "Adiprene Tee", img: "../image/product_35.jpg", price: 700000, id: "s33", quantity: 100,brand:"adidas",size:"L"},
    {name: "Juventus 20/21 Third Jersey", img: "../image/product_36.jpg", price: 1800000, id: "s34", quantity: 100,brand:"adidas",size:"L"},
    {name: "adidas Z.N.E. Pants", img: "../image/product_47.jpg", price: 640000, id: "p45", quantity: 100,brand:"adidas",size:"L"},
    {name: "Tiro 19 Training Pants", img: "../image/product_48.jpg", price: 800000, id: "p46", quantity: 100,brand:"adidas",size:"L"},
    {name: "Aeroready Knit Pants", img: "../image/product_55.jpg", price: 860000, id: "p53", quantity: 100,brand:"adidas",size:"L"},
    {name: "Outline Sweat Pants", img: "../image/product_56.jpg", price: 1240000, id: "p54", quantity: 100,brand:"adidas",size:"L"},
    {name: "3-Stripes Pants", img: "../image/product_57.jpg", price: 780000, id: "p55", quantity: 100,brand:"adidas",size:"L"},
    {name: "3-Stripes Tee", img: "../image/product_18.jpg", price: 700000, id: "s18", quantity: 100,brand:"adidas",size:"L"},
    {name: "Adiprene Tee", img: "../image/product_19.jpg", price: 560000, id: "s19", quantity: 100,brand:"adidas",size:"L"},
    {name: "Chile 20 Tee", img: "../image/product_20.jpg", price: 800000, id: "s20", quantity: 100,brand:"adidas",size:"L"},
    {name: "M.U Long Sleeve Tee", img: "../image/product_21.jpg", price: 1400000, id: "s21", quantity: 100,brand:"adidas",size:"L"},
    {name: "Tiro 19 Training Pants", img: "../image/product_58.jpg", price: 1100000, id: "p56", quantity: 100,brand:"adidas",size:"L"},
    {name: "Essentials Wind Pants", img: "../image/product_59.jpg", price: 1200000, id: "p57", quantity: 100,brand:"adidas",size:"L"},
    {name: "Tiro 19 Training Pants", img: "../image/product_60.jpg", price: 1200000, id: "p58", quantity: 100,brand:"adidas",size:"L"},
    {name: "French Terry Pants", img: "../image/product_61.jpg", price: 1600000, id: "p59", quantity: 100,brand:"adidas",size:"L"},
    {name: "Alphaskin 2.0 Sport Tights Pants", img: "../image/product_62.jpg", price: 1120000, id: "p60", quantity: 100,brand:"adidas",size:"L"},
    {name: "Firebird Track Pants", img: "../image/product_63.jpg", price: 1400000, id: "p61", quantity: 100,brand:"adidas",size:"L"},
    {name: "Essentials Fleece Jogger Pants", img: "../image/product_64.jpg", price: 640000, id: "p62", quantity: 100,brand:"adidas",size:"L"},
    {name: "Adicolor SST Track Pants", img: "../image/product_65.jpg", price: 800000, id: "p63", quantity: 100,brand:"adidas",size:"L"},
    {name: "Must Haves Primeblue Pants", img: "../image/product_66.jpg", price: 900000, id: "p64", quantity: 100,brand:"adidas",size:"L"},
    {name: "Classics Track Pants", img: "../image/product_67.jpg", price: 640000, id: "p65", quantity: 100,brand:"adidas",size:"L"},
    {name: "ID Pants", img: "../image/product_68.jpg", price: 900000, id: "p66", quantity: 100,brand:"adidas",size:"L"},
    {name: "Cross Up 365 Pants", img: "../image/product_69.jpg", price: 900000, id: "p67", quantity: 100,brand:"adidas",size:"L"},
    {name: "Bouclette Pants", img: "../image/product_70.jpg", price: 1000000, id: "p68", quantity: 100,brand:"adidas",size:"L"},
    {name: "Own the Run Astro Pants", img: "../image/product_71.jpg", price: 640000, id: "p69", quantity: 100,brand:"adidas",size:"L"},
    {name: "R.Y.V. Sweat Pants", img: "../image/product_72.jpg", price: 900000, id: "p70", quantity: 100,brand:"adidas",size:"L"},
    {name: "O Shape Pants", img: "../image/product_73.jpg", price: 1120000, id: "p71", quantity: 100,brand:"adidas",size:"L"},
    {name: "Must Haves Stadium Pants", img: "../image/product_74.jpg", price: 1400000, id: "p72", quantity: 100,brand:"adidas",size:"L"},
    {name: "3-Stripes Pants", img: "../image/product_75.jpg", price: 900000, id: "p73", quantity: 100,brand:"adidas",size:"L"},
    {name: "Essentials Tapered Pants", img: "../image/product_76.jpg", price: 1300000, id: "p74", quantity: 100,brand:"adidas",size:"L"},
    {name: "Brilliant Basics Pants", img: "../image/product_77.jpg", price: 840000, id: "p75", quantity: 100,brand:"adidas",size:"L"},
    {name: "adidas Z.N.E. Woven Pants", img: "../image/product_78.jpg", price: 1200000, id: "p76", quantity: 100,brand:"adidas",size:"L"},
    {name: "3-Stripes Tapered Pants", img: "../image/product_79.jpg", price: 1120000, id: "p77", quantity: 100,brand:"adidas",size:"L"},
    {name: "Camouflage Pants", img: "../image/product_80.jpg", price: 1400000, id: "p78", quantity: 100,brand:"adidas",size:"L"},
    {name: "Essentials Colorblock Pants", img: "../image/product_81.jpg", price: 840000, id: "p79", quantity: 100,brand:"adidas",size:"L"},
    {name: "Adventure Track Pants", img: "../image/product_82.jpg", price: 1200000, id: "p80", quantity: 100,brand:"adidas",size:"L"},
    {name: "Essentials 3-StripesPants", img: "../image/product_83.jpg", price: 1200000, id: "p81", quantity: 100,brand:"adidas",size:"L"},
    {name: "Adi Primeblue Track Pants", img: "../image/product_84.jpg", price: 1600000, id: "p82", quantity: 100,brand:"adidas",size:"L"},
    {name: "Tiro 19 Training Pants", img: "../image/product_85.jpg", price: 840000, id: "p83", quantity: 100,brand:"adidas",size:"L"},
    {name: "3D Trefoil Graphic Sweat Pants", img: "../image/product_86.jpg", price: 1200000, id: "p84", quantity: 100,brand:"adidas",size:"L"},
    {name: "Trefoil Tee", img: "../image/product_0.jpg", price: 600000, id: "s1", quantity: 100,brand:"adidas",size:"L"},
    {name: "Short Sleeve Shmoo Tee", img: "../image/product_1.jpg", price: 700000, id: "s2", quantity: 100,brand:"adidas",size:"L"},
    {name: "Must Haves Stadium Tee", img: "../image/product_2.jpg", price: 560000, id: "s3", quantity: 100,brand:"adidas",size:"L"},
    {name: "Run It 3-Stripes PB Tee", img: "../image/product_3.jpg", price: 700000, id: "s4", quantity: 100,brand:"adidas",size:"L"},
    {name: "Own Long Sleeve Tee", img: "../image/product_4.jpg", price: 700000, id: "s5", quantity: 100,brand:"adidas",size:"L"},
    {name: "Own the Run Tee", img: "../image/product_5.jpg", price: 700000, id: "s6" , quantity: 100,brand:"adidas",size:"L"},
    {name: "3-Stripes Tee", img: "../image/product_6.jpg", price: 700000, id: "s7", quantity: 100,brand:"adidas",size:"L"},
    {name: "Chile 20 Tee", img: "../image/product_7.jpg", price: 800000, id: "s8", quantity: 100,brand:"adidas",size:"L"},
    {name: "Trefoil Tee", img: "../image/product_8.jpg", price: 600000, id: "s9", quantity: 100,brand:"adidas",size:"L"},
    {name: "Real Madrid Third Jersey", img: "../image/product_9.jpg", price: 1800000, id: "s10", quantity: 100,brand:"adidas",size:"L"},
    {name: "25/7 Primeblue Tee", img: "../image/product_10.jpg", price: 900000, id: "s11", quantity: 100,brand:"adidas",size:"L"},
    {name: "3-Stripes Tee", img: "../image/product_11.jpg", price: 800000, id: "s12", quantity: 100,brand:"adidas",size:"L"},
    {name: "NY Pigeon Tee", img: "../image/product_12.jpg", price: 600000, id: "s13", quantity: 100,brand:"adidas",size:"L"},
    {name: "R.Y.V. Graphic Tee", img: "../image/product_22.jpg", price: 800000, id: "s22", quantity: 100,brand:"adidas",size:"L"},
    {name: "New Stacked LA Trefoil Tee", img: "../image/product_23.jpg", price: 600000, id: "s23", quantity: 100,brand:"adidas",size:"L"},
    {name: "M.U Third Jersey", img: "../image/product_24.jpg", price: 1800000, id: "s24", quantity: 100,brand:"adidas",size:"L"},
    {name: "Badge of Sport Tee", img: "../image/product_26.jpg", price: 500000, id: "s25", quantity: 100,brand:"adidas",size:"L"},
    {name: "Own the Run Tee", img: "../image/product_27.jpg", price: 700000, id: "s26", quantity: 100,brand:"adidas",size:"L"},
    {name: "TAN Logo Tee", img: "../image/product_29.jpg", price: 800000, id: "s27", quantity: 100,brand:"adidas",size:"L"},
    {name: "Torsion Tee", img: "../image/product_30.jpg", price: 700000, id: "s28", quantity: 100,brand:"adidas",size:"L"},
    {name: "Big Trefoil Outline Tee", img: "../image/product_31.jpg", price: 600000, id: "s29", quantity: 100,brand:"adidas",size:"L"},
    {name: "Real Madrid DNA Graphic Tee", img: "../image/product_37.jpg", price: 500000, id: "s35", quantity: 100,brand:"adidas",size:"L"},
    {name: "Captain Tsubasa Tee", img: "../image/product_38.jpg", price: 800000, id: "s36", quantity: 100,brand:"adidas",size:"L"},
    {name: "USA Volleyball 1/4 Zip Tee", img: "../image/product_39.jpg", price: 1100000, id: "s37", quantity: 100,brand:"adidas",size:"L"},
    {name: "Unity Tee", img: "../image/product_40.jpg", price: 800000, id: "s38", quantity: 100,brand:"adidas",size:"L"},
    {name: "R.Y.V. Tee", img: "../image/product_41.jpg", price: 600000, id: "s39", quantity: 100,brand:"adidas",size:"L"},
    {name: "Badge of Sport Tee", img: "../image/product_42.jpg", price: 600000, id: "s40", quantity: 100,brand:"adidas",size:"L"},
    {name: "New Stacked Trefoil Tee", img: "../image/product_43.jpg", price: 600000, id: "s41", quantity: 100,brand:"adidas",size:"L"},
    {name: "Essentials 3-Stripes Wind Pants", img: "../image/product_49.jpg", price: 1200000, id: "p47", quantity: 100,brand:"adidas",size:"L"},
    {name: "Sport French Terry Pants", img: "../image/product_50.jpg", price: 1700000, id: "p48", quantity: 100,brand:"adidas",size:"L"},
    {name: "Woven Tape Pants", img: "../image/product_51.jpg", price: 900000, id: "p49", quantity: 100,brand:"adidas",size:"L"},
    {name: "Trefoil Essentials Pants", img: "../image/product_52.jpg", price: 640000, id: "p50", quantity: 100,brand:"adidas",size:"L"},
    {name: "3-Stripes Pants", img: "../image/product_53.jpg", price: 900000, id: "p51", quantity: 100,brand:"adidas",size:"L"},
    {name: "Run It 3-Stripes Astro Pants", img: "../image/product_54.jpg", price: 1000000, id: "p52", quantity: 100,brand:"adidas",size:"L"}
    ];
    function getCurrentCategoryList() {
        if (currentCategory === "all") {
            return arrSp;
        } else if (currentCategory === "pants") {
            return pants;
        } else if (currentCategory === "shirt") {
            return shirt;
        }
    }
    function listPage() {
        let currentCategoryList = getCurrentCategoryList();
        let count = Math.ceil(currentCategoryList.length / limit);
    
        document.querySelector('.pagination').innerHTML = '';
    
        if (count > 1) {
            if (thisPage != 1) {
                let prev = document.createElement('li');
                prev.innerText = '<<';
                prev.setAttribute('onclick', "changePage(" + (thisPage - 1) + ")");
                document.querySelector('.pagination').appendChild(prev);
            }
    
            for (let i = 1; i <= count; i++) {
                let newPage = document.createElement('li');
                newPage.innerText = i;
                if (i == thisPage) {
                    newPage.classList.add('active');
                }
                newPage.setAttribute('onclick', "changePage(" + i + ")");
                document.querySelector('.pagination').appendChild(newPage);
            }
    
            if (thisPage != count) {
                let next = document.createElement('li');
                next.innerText = '>>';
                next.setAttribute('onclick', "changePage(" + (thisPage + 1) + ")");
                document.querySelector('.pagination').appendChild(next);
            }
        }
    }
    function showProduct(arr) {
        // Khởi tạo một chuỗi rỗng để lưu kết quả
        var str = "";
        // Duyệt qua mảng sản phẩm truyền vào
        for (let i = 0; i < arr.length; i++) {
          // Chuyển đổi mỗi sản phẩm thành một chuỗi JSON
          var obj = JSON.stringify(arr[i]);
          // Nối thêm một đoạn HTML để hiển thị thông tin sản phẩm
          str += ` <div class="cartegory-right-content-item">
              <div class=".product-item">
                  <div class="product-wrapper">
                      <div class="product-image product-image-block">
                          <a href="#" title="ÁO GIỮ NHIỆT THỂ THAO NAM ARSUXEO MS05 - CO DÃN - THOÁNG KHÍ">
                              <img src="./image/${arr[i].img}" alt="ÁO GIỮ NHIỆT THỂ THAO NAM ARSUXEO MS05 - CO DÃN - THOÁNG KHÍ" class="image_main img-responsive center-block image_product">
                          </a>
                          <button class="buynow" onclick='addCart(\`${obj}\`)' >Mua ngay</button>
                      </div>
                      <h3 class="product_name">
                          <a href="#" title="ÁO GIỮ NHIỆT THỂ THAO NAM ARSUXEO MS05 - CO DÃN - THOÁNG KHÍ">${arr[i].name}</a>
                      </h3>
                      <div class="product_prices">
                          <span class="special-price">${arr[i].price}</span><sup class="special-price-sup">đ</sup>
                          <button class="btndetail" onclick='showDetail(\`${obj}\`)' >Detail</button>
                      </div>
                  </div>
              </div>
              </div>
              `;
             
        }
        // Gán kết quả vào phần tử HTML có class là cartegory-right-content
        document.querySelector(".cartegory-right-content").innerHTML = str;
        listPage();
      }
    let thisPage=1;
let limit=12;
let list=document.querySelectorAll('.cartegory-right-content .cartegory-right-content-item');
function loadItem(){
    let begin=limit*(thisPage-1);
    let end=limit*thisPage-1;
    let list=document.querySelectorAll('.cartegory-right-content .cartegory-right-content-item');
    list.forEach((item,key)=>{ // item : tung item key: local
        if(key>=begin && key<=end){
            item.style.display='block';
        }
        else{
            item.style.display='none';
         }
        });
        listPage();
}



function changePage(i){
    thisPage=i;
    loadItem();
}
function initializePage() {
    loadItem();
    listPage();
}
document.addEventListener('DOMContentLoaded', initializePage);
   
      
     showProduct(arrSp);
    
    
  
let soluong=0;
const arrCart=[];
    function addCart(objSP){
        console.log(objSP);
var item;
var qtyItem=0;
var flag=false
;
for(let i=0;i<arrCart.length;i++){
    if(arrCart[i].sp.id==objSP.id){
        arrCart[i].quantity++;
        flag=true;
        break;
    }
}
if(flag=false){
    document.querySelector(".cartNum").innerText=soluong;
    let cartItem={sp: objSP,quantity:1};
    addCart.push(cartItem);
}
soluong++;
document.querySelector(".cartNum").innerText=soluong;

}
function showDetail(objSP){
    window.localStorage.clear();
    console.log(objSP);
    window.localStorage.setItem("sanpham", objSP);
    var product = JSON.parse(localStorage.getItem('sanpham'));
    var temp1 = '<img src="image/' + product.img + '">';

    var temp2 = '<h2>' + product.name + '</h2><div class="rating"><span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span></div><p class="price-p">' + product.price.toLocaleString('sanpham', {style : 'currency', currency : 'VND'}) + '</p>';
    
    document.getElementById('image').innerHTML = temp1;
    document.getElementById('productInfo').innerHTML = temp2;
   // document.querySelector("#image").src=`./image/${product.img}`;
  // document.querySelector("#productInfo").innerHTML=product.name;
    document.getElementById('product_detail').style.top="10%";
    document.getElementById("atc").innerHTML = '<a class="btnAddtoCart" onclick=\'addCart(\`${obj}\`)\' >Add to cart</a>'
}

function closeDetail()
{
	document.getElementById('product_detail').style.top = "-300%";
    document.getElementById('product_detail1').style.top = "-300%";
    document.getElementById('product_detail2').style.top = "-300%";
    document.getElementById('product_detail3').style.top = "-300%";
    document.getElementById('product_detail4').style.top = "-300%";
    document.getElementById('product_detail5').style.top = "-300%";
    document.getElementById('product_detail6').style.top = "-300%";
    document.getElementById('product_detail7').style.top = "-300%";
    document.getElementById('product_detail8').style.top = "-300%";
}

function changePagetoPage(category){
    document.getElementById('main1').style.display="block";
    document.getElementById('homePage1').style.display="none";
    document.getElementById('footeron').style.display="block";
    list = document.querySelectorAll('.cartegory-right-content .cartegory-right-content-item');
      thisPage=1;
    if (category === "all") {
        showProduct(arrSp);
       loadItem();
        currentCategory = "all";
    } else if (category === "pants") {
        showProduct(pants);
        loadItem();
        currentCategory = "pants";
    } else if (category === "shirt") {
        showProduct(shirt);
        loadItem();
        currentCategory = "shirt";
    }
    loadItem();
    initializePage();
}
for (let i = 0; i < arrSp.length; i++) {
    if (arrSp[i].name.toLowerCase().includes('pants')) {
      pants.push(arrSp[i]);
      
    } else {
      shirt.push(arrSp[i]);
      
    }
  }
