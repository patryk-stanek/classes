'use strict';

function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
};

Phone.prototype.printInfo = function () {
    console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price + '.');
}

var iphone = new Phone('Apple', 2250, 'silver');
var samsung = new Phone('Samsung', 2240, 'black');
var oneplus = new Phone('Oppo', 2230, 'white');

iphone.printInfo();
samsung.printInfo();
oneplus.printInfo();