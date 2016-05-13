angular.module('starter.services', [])
/*.factory('DBA', function ($cordovaSQLite, $q) {
    var self = this;
    var _name;
    var _db;

    self.setName = function (name) {
      _name = name;
    }

    self.db = function () {
      if (window.sqlitePlugin !== undefined) {
        //www/demo.db is a file created with SqliteBrowser tool :)
        _db = window.sqlitePlugin.openDatabase({ name: _name, location: 2, createFromLocation: -1 });
      } else {
        // For debugging in the browser
        _db = window.openDatabase(_name, "1.0", "Points", 200000);
      }
      return _db;
    };

    self.executeSql = function (query, parameters) {
      return $cordovaSQLite.execute(self.db(), query, parameters);
    };    

    self.getItems = function (query, parameters) {
      var deferred = $q.defer();
      self.executeSql(query, parameters).then(function (res) {
        var items = [];
        for (var i = 0; i < res.rows.length; i++) {
          items.push(res.rows.item(i));
        }
        return deferred.resolve(items);
      }, function (err) {
        console.error(err);
        return deferred.reject(err);
      });

      return deferred.promise;
    };

    return self;
  })

  .factory('Points', function ($q, DBA, config) {
    var self = this;
    self.all = function () {
      DBA.setName(config.points_db_name);
      return $q.when(DBA.getItems("select fid,id,name,lat,lon from points"));
    }
    return self;
  })*/
.factory('DBA', function ($cordovaSQLite, $q) {
  var self = this;
  
  self.executeSql = function (query, parameters) {
      return $cordovaSQLite.execute(db, query, parameters);
    };    

    self.getItems = function (query, parameters) {
      var deferred = $q.defer();
      self.executeSql(query, parameters).then(function (res) {
        var items = [];
        for (var i = 0; i < res.rows.length; i++) {
          items.push(res.rows.item(i));
        }
        return deferred.resolve(items);
      }, function (err) {
        console.error(err);
        return deferred.reject(err);
      });

      return deferred.promise;
    };  
    
    return self;
})
.factory('Points', function($q, DBA) {
  var self = this;
  
  self.all = function () {
      DBA.setName(config.points_db_name);
      return $q.when(DBA.getItems("select fid,id,name,lat,lon from points"));
    }
    return self;
});
