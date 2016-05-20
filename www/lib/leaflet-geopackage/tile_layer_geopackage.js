L.TileLayer.GeoPackage = L.TileLayer.extend({
    model : null,
    
	initialize: function(options) {
    		L.Util.setOptions(this, options);
            model = options.model;
    	},

	getTileUrl: function(tilePoint, tile) {
        model.getTiles(tilePoint.x,tilePoint.y,tilePoint.z).then(function (items) {
            console.log(items);
            /*
            if(tiles != null  && tiles.size() > 0)
                tile.src = 'data:image/png;base64,' + items[0].tile_data;
            else*/
                tile.src = null;
			    	
		});
		/*var tiles=model.getTiles(tilePoint.x,tilePoint.y,tilePoint.z);
		tile.src = 'data:image/png;base64,' + tiles;*/

	},

	_loadTile: function(tile, tilePoint) {
		tile._layer = this;
		tile.onload = this._tileOnLoad;
		tile.onerror = this._tileOnError;
		this._adjustTilePoint(tilePoint);
		this.getTileUrl(tilePoint, tile);
	}
});