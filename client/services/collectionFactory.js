angular.module('curates.collectionFactory', [])

// This factory houses all the appropriate HTTP methods for handling requests
// that center around collections.  POST requests are handled using success and
// error functionality.  GET requests are handled using then in order to allow
// controllers to resolve them and bind data before rendering.
.factory('collectionFactory', ['$http', function($http){

  var addLink = function(title, link) {
    return $http({
      method: 'POST',
      url: 'api/collection/addlink',
      data: {
        link: link,
        title: title
      }
    })
    .success(function(data, code) {
      // do something cool with a successful post
    })
    .error(function(data, code) {
      // do something cool with an error
    });
  } 
  var getCollection = function(title) {
    return $http({
      method: 'GET',
      url: '/api/collection'
    }).then(function(response) {
      return response.data;
    });
  };

  var fetchCollections = function() {
    return $http({
      method: 'GET',
      url: '/api/collection/all'
    })
    .then(function(response) {
      return response.data;
    });
  };

  var getUserCollections = function(user) {
    return $http({
      method: 'GET',
      url: '/api/collection/users',
      params: {username: user}
    }).then(function(response) {
      return response.data;
    });
  };

  var createCollection = function(collection) {
    return $http({
      method: 'POST',
      url: '/api/collection/create',
      data: collection
    })
    .success(function(data, code) {
      // do something awesome with the server response
    })
    .error(function(data, code) {
      // do something awesome with the server response
    });
  };

  var addFavorite = function(user, collection) {
    return $http({
      method: 'POST',
      url: '/api/collection/addfav',
      data: {
        collection: collection, 
        username: user
      }
    })
    .success(function(data, code) {
      // do something awesome with the server response
    })
    .error(function(data, code) {
      // do something awesome with the server response
    });
  };

  var voteLink = function(title, link, user, value) {
    // update the vote count for this link within the title.
    return $http({
      method: 'PUT',
      url: '/api/links',
      data: {
        title: title,
        link: link,
        user: user,
        value: value
      }
    })
    .success(function(data, code) {
      // do something cool with a successful post
    })
    .error(function(data, code) {
      // do something cool with a returned error
      console.log(data);
    });
  };

  return {
    addFavorite: addFavorite,
    addLink: addLink,
    createCollection: createCollection,
    getCollection: getCollection,
    fetchCollections: fetchCollections,
    getUserCollections: getUserCollections,
    voteLink: voteLink,
  };

}]);
