angular.module('starter.services', [])

.factory('SearchService', function($http) {
  // Might use a resource here that returns a JSON array
  "use strict"; //strict mode
  var url = "https://api.github.com/"; // GitHub URL
  var token = ""; //personalToken

  var searchData = {};

  searchData.getUserData = function(username, setData){
    $http.get(url + "search/users?q=" + username + "&" + token).success(function (data) {
            setData(data.items);
        });
  };

  searchData.getTotalUsers = function(username, setData){
    $http.get(url + "search/users?q=" + username + "&" + token).success(function (data) {
            setData(data);
        });
  };

  searchData.getProfileData = function(username, setData){
    $http.get(url+"users/" + username + "?" + token).success(function (data) {
            setData(data);
        });
  };

  searchData.getProfileRepos = function(username, setData) {
        $http.get(url+"users/" + username + "/repos?" + token).success(function (data) {
            setData(data);
        });
    };

  return searchData;
});
