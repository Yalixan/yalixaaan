'use strict';

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

let searchBtn = document.querySelector('.search');
let searchInput = document.querySelector('.search-sub');
let menuBar = document.querySelector('.menu-bar');
let a = document.querySelectorAll(".menu-bar li a");
let search = document.querySelector('.search a');
let top10 = document.querySelector('.top10 a');
let kategories = document.querySelector('.kategories a');
let kategoriesSub = document.querySelector('.kategories-sub');
let date = document.querySelector('.date a');
let news = document.querySelector('.news a');
let mk = document.querySelector('.mk a');
let mkSub = document.querySelector('.mk-sub');
let wrapper = document.querySelector('.wrapper');

let miniMenuMainCateg = document.querySelector('.mini-menu-main-categ');
let miniMenuCateg = document.querySelector('.mini-menu-categ');
let miniPhotos = document.querySelector('.mini-photos');

$(".mini-menu-main-categ").click(function() {
    $('.mini-menu-categ').toggle(270);
});

$(".mini-photo-gallery-title").click(function() {
    $('.mini-photos').toggle(270);
});



for (var i = 0, length = a.length; i < length; i++) {
  a[i].onclick = function() {
    let b = document.querySelector(".menu-bar li.li-active");
    if (b) b.classList.remove("li-active");
    this.parentNode.classList.add('li-active');
  };
}

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


$(".search a").click(function() {
    $(".search a").addClass("active");
    $(".top10 a").removeClass("active");
    $(".kategories a").removeClass("active");
    $(".date a").removeClass("active");
    $(".news a").removeClass("active");
    $(".mk a").removeClass("active");
    $('.search-sub').toggle(270);
    $('.kategories-sub').hide(270);
    $('.mk-sub').hide(270);
});

$(".top10 a").click(function() {
    $(".top10 a").addClass("active");
    $(".search a").removeClass("active");
    $(".kategories a").removeClass("active");
    $(".date a").removeClass("active");
    $(".news a").removeClass("active");
    $(".mk a").removeClass("active");
    $('.search-sub').hide(270);
    $('.kategories-sub').hide(270);
    $('.mk-sub').hide(270);
});

$(".kategories a").click(function() {
    $(".kategories a").addClass("active");
    $(".top10 a").removeClass("active");
    $(".search a").removeClass("active");
    $(".date a").removeClass("active");
    $(".news a").removeClass("active");
    $(".mk a").removeClass("active");
    $('.search-sub').hide(270);
    $('.kategories-sub').toggle(270);
    $('.mk-sub').hide(270);
});

$(".date a").click(function() {
    $(".date a").addClass("active");
    $(".top10 a").removeClass("active");
    $(".kategories a").removeClass("active");
    $(".search a").removeClass("active");
    $(".news a").removeClass("active");
    $(".mk a").removeClass("active");
    $('.search-sub').hide(270);
    $('.kategories-sub').hide(270);
    $('.mk-sub').hide(270);
});

$(".news a").click(function() {
    $(".news a").addClass("active");
    $(".top10 a").removeClass("active");
    $(".kategories a").removeClass("active");
    $(".date a").removeClass("active");
    $(".search a").removeClass("active");
    $(".mk a").removeClass("active");
    $('.search-sub').hide(270);
    $('.kategories-sub').hide(270);
    $('.mk-sub').hide(270);
});

$(".mk a").click(function() {
    $(".mk a").addClass("active");
    $(".top10 a").removeClass("active");
    $(".kategories a").removeClass("active");
    $(".date a").removeClass("active");
    $(".news a").removeClass("active");
    $(".search a").removeClass("active");
    $('.search-sub').hide(270);
    $('.kategories-sub').hide(270);
    $('.mk-sub').toggle(270);
});

