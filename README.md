# Online/Offline Map Application #

This is a hybrid app in phonegap that allows the user to work with maps in online and offline mode. 
The OGC standard Geopackage (http://www.geopackage.org/) was used for storing the spatial data in the map application.

### Who do I talk to? ###

* [Team](https://github.com/orgs/CIAT-DAPA/teams/cs-team)
* [CIAT](http://ciat.cgiar.org/)

## Summary of set up ##

* Source code

## Configuration ##
* The map application dispalys two kind of data: point data and basemap information. Tiles have to be previously created for using an offline basemap.
* You need to add the data into www/ 
with the names: 
    For the tiles: "tiles.gpkg" 
    For the point data: "points.gpkg" 

## Dependencies

* [Leaflet](http://leafletjs.com/)
* [Geopackage](http://www.geopackage.org/) 

