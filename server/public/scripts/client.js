var app = angular.module('FoodApp', []);

app.controller('FoodController', function(){
    console.log('FoodController loaded');
  
    var self = this; // holds the value of this
  
    self.food = [
      {
        "type": "taco",
        "deliciousness-level": "yum",
        "is-hot": "hot",
        "shout-out": "woot!"
      }
    ];
  
    self.newFood = {};
  
    self.createFood = function(){
      console.log(self.newFood);
      self.food.push(angular.copy(self.newFood));
    };
  
  });
  

