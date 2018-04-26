
var app = angular.module('FoodApp', []);

app.controller('FoodController',
    ['$http', function($http){
    console.log('FoodController loaded');
    var self = this; 

    self.food = 'candy';

    self.foodList = [];

    // self.food = [
    //     {
    //         "foodType": '',
    //         "deliciousnessLevel": '',
    //         "isHot": ''
    //     }
    //     ];
    
    // self.newFood = {};
      
        // self.createFoodEntry = function(){
        //   console.log(self.newFood);
        //   self.food.push(angular.copy(self.newFood));
        // };


    $http({
        method: 'GET',
        url: '/food'
    })

    .then(function(response) {
        self.foodList = response.data;
    })
    .catch(function(error) {
        console.log('error on /food GET', error);
    });
  }]);

  


