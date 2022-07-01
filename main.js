let cartBtn = {};
let cartCounterTxt = {};
let itemCountIncBtn = {};
let itemCountDecBtn = {};
let itemCounterTxt = {};
let cartMenu = {};
let cartMenuEmpty = {};
let cartMenuItem = {};
let checkoutBtn = {};
let cartMenuPriceTxt = {};

//State
let itemCount = 0;
let isShown = false;

function setup() {
    cartBtn = document.body.querySelector('.cart-container');
    itemCountDecBtn = document.body.querySelector('#minus');
    itemCountIncBtn = document.body.querySelector('#plus');
    cartCounterTxt = document.body.querySelector('#cart-count-text');
    itemCounterTxt = document.body.querySelector('#count');
    cartMenu = document.body.querySelector('.cart-menu');
    cartMenuEmpty = document.body.querySelector('.cart-emtpy-menu');
    cartMenuItem = document.body.querySelector('.cart-menu-item');
    checkoutBtn = document.body.querySelector('#checkout');
    cartMenuPriceTxt = document.body.querySelector('#cart-menu-price')

    initState();
}

function initState(){
    setItemCount(0);
    
}

function setItemCount(change) {
    itemCount += change;
    if(itemCount<0){
        itemCount = 0;
    }
    updateItemCountUI();
}

function updateItemCountUI() {
    cartCounterTxt.innerHTML = itemCount;
    itemCounterTxt.innerHTML = itemCount;
    cartMenuPriceTxt.innerHTML = `$125  x ${itemCount} <span id="totalprice">$${itemCount*125}</span>`
    if (itemCount === 0) {
        cartMenuEmpty.style.display = 'flex';
        cartMenuItem.style.display = 'none';
        checkoutBtn.style.display = 'none';
    }else{
        cartMenuEmpty.style.display = 'none';
        cartMenuItem.style.display = 'flex';
        checkoutBtn.style.display = 'flex';
    }
}

function showCartMenu(){
    isShown = !isShown;
    updateCartMenuUI();
}

function updateCartMenuUI(){
    if(isShown){
        cartMenu.style.display = 'flex'
    }else{
        cartMenu.style.display = 'none'
    }
}