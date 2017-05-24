angular.module('starter.controllers', [])

.controller('SearchController', function($scope, $http, SearchService) {

  "use strict"; //strict mode

  $scope.searchLimit = "No user found !";
  $scope.badRequest = "Bad request";
  $scope.networkError = "Please try again later ! (404, 403)";
  $scope.searchTitle = "GitHub user lookup";
  $scope.searchInput = "Enter GitHub username";


  $scope.search = {
      username : ''
  };

  $scope.userSearch = function() {

    $scope.userList = "";
    $scope.showResult = false;
    $scope.responseError = false;

    if($scope.search.username.length > 0){

      SearchService.getUserData($scope.search.username, function (response) {
        if(response.length == 0){
          $scope.responseError = true;
          $scope.userList = "";
        } else {
          $scope.showResult = true;
          $scope.userList = response;
          console.log(response);
        }
      });
      console.log($scope.userList);
    } else {
      $scope.showResult = false;
      $scope.userList = "";
    }

//Enable for total user count
    // SearchService.getTotalUsers($scope.search.username, function (response) {
    //     //console.log(response.total_count);
    //     $scope.totalUsers = response.total_count; //total users
    // });


  };

})

.controller('ProfileController', function($scope, $http, SearchService, $stateParams) {

  "use strict"; //strict mode

  $scope.followersText = "Followers";
  $scope.followingText = "Following";
  $scope.repoText = "Repositories";
  $scope.langText = "Language :";
  $scope.dateCreateText = "Created at :";
  $scope.descriptionText = "Description :";
  $scope.profileTitle = "Profile Details";
  $scope.memberTitle = "Member Since :";

  $scope.username = $stateParams.username;
  $scope.repos = [];

  SearchService.getProfileData($scope.username, function (response) {
    //console.log(response);
    if(response) {
      $scope.avatarUrl = response.avatar_url;
      $scope.name = response.name;
      $scope.location = response.location;
      $scope.followers = response.followers;
      $scope.following = response.following;
      $scope.repoCount = response.public_repos;
      $scope.bio = response.bio;
      $scope.company = response.company;
      $scope.created_at = response.created_at;
    }
  });

  SearchService.getProfileRepos($scope.username, function (response) {
    //console.log(response);
    if(response) {
      $scope.repos = response;
    }
  });

})
