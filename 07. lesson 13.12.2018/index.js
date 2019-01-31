function Machine (){
    this._enabled = false;
}

Machine.prototype.enable = function (){
    this._enabled = true;
};

Machine.prototype.disable = function () {
    this._enabled = false;
};

//Machine.call(this.enable());


function CoffeeMachine(power) {
    this.waterAmount = 0;
    this._power = power;
    this.C = 4200;
    this.T = 8;
    Machine.apply(this,arguments);
}

CoffeeMachine.prototype.onReady = function(){
    console.log('Done');
};

CoffeeMachine.prototype.getTime = function() {
    return C * waterAmount/power;
};

CoffeeMachine.prototype.getWaterAmount = function(){
    return waterAmount;
};



CoffeeMachine.prototype.setWaterAmount = function(amount){
    if(waterAmount<0) throw new Error('Data incorrected');
    waterAmount = amount;
};

CoffeeMachine.prototype.on = function () {
    //this.enable();
    setTimeout(onReady, getTime());
};

CoffeeMachine.prototype = Object.create(Machine);
CoffeeMachine.prototype.constructor = CoffeeMachine;

var cofeeMachine = new CoffeeMachine(3000);
console.log(cofeeMachine._power);

// console.log(cofeeMachine.setWaterAmount(20));
// console.log(cofeeMachine.getWaterAmount());

//console.log(cofeeMachine.on());


