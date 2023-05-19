const price1 = document.querySelector('.price1').textContent;
const price2 = document.querySelector('.price2').textContent;
const price3 = document.querySelector('.price3').textContent;
const price4 = document.querySelector('.price4').textContent;
const currency = " руб";
let totalPrice = document.getElementById('totalPrice');
//console.log (totalPrice.textContent);
function sum() {
    return +price1 + +price2 + +price3 + +price4;
}

function showPrice() {
    return + sum();
}
//console.log (showPrice());
totalPrice.textContent = showPrice() + currency;

let button = document.getElementById('sale');
button.onclick = function showNewPrice() {
    return showPrice * 0, 8 + currency;
}
totalPrice.textContent = showNewPrice() + currency;



/*console.log(price1);
console.log(price2);
console.log(price3);
console.log(price4);
console.log(showPrice());*/















/*const priceSubTotal = (input) => number(input.value) + number(input.dataset.price) + number(input.dataset.price) + number(input.dataset.price);
//document.querySelector('.price').value;

function sum() {
    let totalPrice = 0;
    totalPrice += priceSubTotal(price.querySelector('input'));

    document.getElementById('total_price').textContent =totalPrice;
}

console.log(sum);*/