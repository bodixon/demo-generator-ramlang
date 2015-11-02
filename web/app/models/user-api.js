'use strict';

angular.module('api')


.factory('UserApi', ['Api', function(Api) {
  return {
    
    /**
     * Retrieves one or more users.
     */
    query: function(query) {
      return Api.get('/users', null, query);
    },
    
    /**
     * Creates one or more users.
     */
    post: function(entity) {
      return Api.post('/users', entity);
    },
    
    /**
     * Retrieves one user.
     */
    get: function(id) {
      return Api.get('/users', id);
    },
    
    /**
     * Updates one user.
     */
    put: function(entity) {
      return Api.put('/users', entity.id, entity);
    },
    
    /**
     * Delete one user.
     */
    delete: function(id) {
      return Api.delete('/users', id);
    }
  };
}]);