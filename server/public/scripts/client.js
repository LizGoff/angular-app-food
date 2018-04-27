
var app = angular.module('FoodApp', []);

app.controller('FoodController', ['$http', function ($http) {
    console.log('FoodController loaded');
    var self = this;

    self.foodList = [];
    getFoodEntry();

    self.newFood = {};

    self.food = [
        {
            'foodType': 'Apple',
            'deliciousnessLevel': '9',
            'isHot': 'No'
        }
    ];


    function getFoodEntry() {
        $http({
            method: 'GET',
            url: '/foods'
        })
        .then(function (response) {
            self.foodList = response.data;
        })
        .catch(function (error) {
            console.log('error on /foods GET', error);
        });
    };




    self.createFoodEntry = function() {
        $http({
            method: 'POST',
            url: '/foods',
            data: self.newFood
        })
        .then(function (response) {
            getFoodEntry();
            console.log(response);
        })
        .catch(function (error) {
            console.log('error on /foods POST', error);
        });
    };
}]);




