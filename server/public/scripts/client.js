
var app = angular.module('FoodApp', []);

app.controller('FoodController', ['$http', function ($http) {
    console.log('FoodController loaded');
    var self = this;

    self.foodList = [];

    self.food = [
        {
            "foodType": '',
            "deliciousnessLevel": '',
            "isHot": ''
        }
    ];

    self.newFood = {};

    self.createFoodEntry = function () {
        $http({
            method: 'POST',
            url: '/food',
            data: self.newFood
        })

            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log('error on /food POST', error);
            });
    };

    $http({
        method: 'GET',
        url: '/food'
    })

        .then(function (response) {
            self.foodList = response.data;
        })
        .catch(function (error) {
            console.log('error on /food GET', error);
        });
}]);




