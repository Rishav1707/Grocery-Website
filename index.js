
const searchForm = document.querySelector(".search-form");

document.querySelector('#search-btn').onclick = ()=>{
    searchForm.classList.toggle('active');
    navBar.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = ()=>{
    shoppingCart.classList.toggle('active');
    navBar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}

const loginForm = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = ()=>{
    loginForm.classList.toggle('active');
    navBar.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
}

const navBar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = ()=>{
    navBar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = ()=>{
    navBar.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

var swiper = new Swiper(".products-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay : {
        delay :4500,
        disableOnInteraction: false,
    },
    centeredSlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
        },
    },
  });

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay : {
        delay :4500,
        disableOnInteraction: false,
    },
    centeredSlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
        },
    },
  });