document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.navbar-nav');
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('show');
    });
});
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("TopBtn").style.display = "block";
    } else {
        document.getElementById("TopBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var homePage = document.getElementById("homePage");

function homePageClick(){
    homePage.style.display = "block";
}

function showDetail1(){
    document.getElementById('product_detail1').style.top="10%";
}
function showDetail2(){
    document.getElementById('product_detail2').style.top="10%";
}
function showDetail3(){
    document.getElementById('product_detail3').style.top="10%";
}
function showDetail4(){
    document.getElementById('product_detail4').style.top="10%";
}
function showDetail5(){
    document.getElementById('product_detail5').style.top="10%";
}
function showDetail6(){
    document.getElementById('product_detail6').style.top="10%";
}
function showDetail7(){
    document.getElementById('product_detail7').style.top="10%";
}
function showDetail8(){
    document.getElementById('product_detail8').style.top="10%";
}
// function closeDetail()
// {
// 	document.getElementById('product_detail1').style.top = "-300%";
//     document.getElementById('product_detail2').style.top = "-300%";
//     document.getElementById('product_detail3').style.top = "-300%";
//     document.getElementById('product_detail4').style.top = "-300%";
//     document.getElementById('product_detail5').style.top = "-300%";
//     document.getElementById('product_detail6').style.top = "-300%";
//     document.getElementById('product_detail7').style.top = "-300%";
//     document.getElementById('product_detail8').style.top = "-300%";
// }
