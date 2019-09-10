// ADDING PRIVATE DATA TO A CONSTRUCTOR

let objProto = {
  greet: function() {
    console.log(this.greeting + ' World');
  }
};

let Greeting = function(term) {
  this.greeting = term;
  let priv = new Date();
  console.log(priv);
  this.getPriv = function() {
    return priv;
  };
};

Greeting.prototype = objProto;

let obj1 = new Greeting('Howdy');

setTimeout(function() {
  obj2 = new Greeting('Hi');
}, 3000);
