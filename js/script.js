'use strict';

function Phone(name, brand, price, color, year) {
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.year = year;
};

Phone.prototype.printInfo = function () {
    console.log(this.name + ' - the phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price + '. Release date: ' + this.year + '.');
}

var iphone = new Phone('iPhone 6s', 'Apple', 2250, 'silver', 2015);
var samsung = new Phone('Samsung Galaxy S7', 'Samsung', 2240, 'black', 2017);
var oneplus = new Phone('OnePlus One', 'Oppo', 2230, 'white', 2008);

iphone.printInfo();
samsung.printInfo();
oneplus.printInfo();