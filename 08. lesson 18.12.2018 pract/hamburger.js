
function Burger(size, filling){
    this.size = size;
    this.filling = filling;
    this.extra = [];
}

Burger.prototype.SIZE = {
    small: {
        price: 50,
        calories: 40
    },
    big: {
        price: 160,
        calories: 60
    }
};

Burger.prototype.FILLING = {
    cheese: {
        price: 10,
        calories: 20
    },
    salat: {
        price: 20,
        calories: 5
    },
    potato: {
        price: 15,
        calories: 10
    }
};

Burger.prototype.EXTRA = {
    spice: {
        price: 15,
        calories: 0
    },
    mayo: {
        price: 20,
        calories: 5
    }
};

Burger.prototype.addExtra = function(item){
    this.extra.push(item);
};

Burger.prototype.prepareCheck = function(price){
    var totalSum = this.SIZE[this.size].price;
    var fillingSum = this.FILLING[this.filling].price;
    var extraSum = 0;
    var self = this;
    this.extra.forEach(function(item){
        extraSum += self.EXTRA[item].price;
    });
    return totalSum + fillingSum + extraSum;
};

Burger.prototype.hasCheese = function(){
    return this.filling === 'cheese';
};

var burger = new Burger('small','cheese');
var burger2 = new Burger('small','cheese');
var burger3 = new Burger('small','potato');

var burgers = [burger, burger2, burger3];
var cheeseCount = burgers.reduce(function(sum,item){
    return (item.hasCheese())? ++sum : sum;
}, 0);

console.log(cheeseCount);

burger.addExtra('mayo');

burger.addExtra('spice');

console.log(burger2.hasCheese());

console.log(burger);

console.log(burger.prepareCheck());

