var app = angular.module("Application", [ 'ngRoute', 'ngCookies' ]);
/**
 * 
 */

app.controller('GoogleLogin',[
                                     '$scope',
                     				'$http',
                     				'$cookies',
                     				'$rootScope',
                     				function($scope, $http, $cookies, $rootScope) {
                                  		alert("Hello");
                     		            						
                          $scope.save=function(){
                        	  var config = {headers:  {
                        	        'Authorization': 'Basic ',
                        	        'Accept': 'application/json;odata=verbose',
                        	        "X-Testing" : "testing"
                        	    }
                        	};
                        	  $http
								.get(
										'URL for BE service',{
										    headers: {'Authorization': 'Basic '+$scope.id_token}
										})
								.then(
										function(response) {
											$scope.registerData = response.data;
											alert(response.data);
									
											
										},
										function(response) {
											$scope.error = "Error";
											alert(response.data)

										});
                        	  
                        	  $http
								.post(
										'URL for BE service',$scope.id_token,{
										    headers: {'Authorization': 'Basic '+$scope.id_token}
										})
								.then(
										function(response) {
											$scope.registerData = response.data;
											alert(response.data);
									
											
										},
										function(response) {
											$scope.error = "Error";
											alert(response.data)

										});
                          }
                          $scope.signOut1=function(){
                        	  var auth2 = gapi.auth2.getAuthInstance();
                        	    auth2.signOut().then(function () {
                        	      console.log('User signed out.');
                        	    });
                        	  
                          }
                          window.onSignIn =function(googleUser) {
                        	  $rootScope.googleUser=googleUser;
                        	  var profile = googleUser.getBasicProfile();
                        	  console.log('ID: ' + profile.getId()); 
                        	  console.log('Full Name: ' + profile.getName());
                              console.log('Given Name: ' + profile.getGivenName());
                              console.log('Family Name: ' + profile.getFamilyName());
                        	  console.log('Image URL: ' + profile.getImageUrl());
                        	  console.log('Email: ' + profile.getEmail()); 
                        	  // This is null if the 'email' scope is not present.
                        	   // The ID token you need to pass to your backend:
                              $scope.id_token = googleUser.getAuthResponse().id_token;
                            //Id_token set in scope variable will be available in controller
                              console.log("ID Token: " + $scope.id_token);
                              }

                       
                        
                     				} ]);