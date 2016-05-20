angular.module('starter.services', [])

.factory('DBA', function ($cordovaSQLite, $q) {
    var self = this;
    var _name;
    var _db;

    self.setName = function (name) {
      _name = name;
    }

    self.db = function () {
      if (window.sqlitePlugin !== undefined) {
        _db = window.sqlitePlugin.openDatabase({ name: _name,  location: 'default', androidDatabaseImplementation: 2, createFromLocation: 1 });
        //_db = window.sqlitePlugin.openDatabase({ name: _name,  location: 2,  createFromLocation: -1 });
      } else {
        _db = window.openDatabase(_name, "1.0", _name, 200000);
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
          console.log(items[i]);
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
})

.factory('Tiles', function ($q, DBA, config) {
    var self = this;
    self.getTiles = function (x, y, z) {
      //var query = 'SELECT tile_data FROM images i inner join map m on i.tile_id=m.tile_id  where zoom_level = ' + z + ' AND tile_column = ' + x + ' AND tile_row = ' + y;
      //var query='SELECT tile_data FROM tiles WHERE zoom_level = ' + z +' AND tile_column = ' + x + ' AND tile_row = ' + y;
      var query='SELECT tile_data FROM tiles ';
      //var query='SELECT * FROM sqlite_master';
      DBA.setName(config.map_db_name);
      return $q.when(DBA.getItems(query));
    }
    return self;
});