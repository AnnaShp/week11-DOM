//достаем цены из HTML
const price1 = document.querySelector('.price1').textContent;
const price2 = document.querySelector('.price2').textContent;
const price3 = document.querySelector('.price3').textContent;
const price4 = document.querySelector('.price4').textContent;

const currency = " руб";

//выводит значение строки из HTML, сейчас там пусто
let totalPrice = document.getElementById('totalPrice');
//console.log (totalPrice.textContent);

//сумма стоимости товаров
let sum = +price1 + +price2 + +price3 + +price4;

totalPrice.textContent = sum + currency;
// console.log(sum);

//функция складывает стоимость товаров + валюта и выводит на экран корзины
let button = document.querySelector('.sale');
button.onclick = function showNewPrice() {
    let totalPriceSale = sum * 0.8 + currency;
    totalPrice.textContent = totalPriceSale;
};
