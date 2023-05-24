'use strict';

let number;
let getNumber = function () {
    number = Number(document.getElementById('inputNumber').value);
    console.log(number);
};

let sum = function () {
    number ** 2;
    console.log(sum());
};


let inputResult = function () {
    let el = document.getElementById('resultNumber');
    el.placeholder = 'sum()';
};

/*

function numberTwo() {
    
   return document.querySelector('.text');
};*/


