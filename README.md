# D3.js Collection on React

This project showcases the D3.js library's charts and plots on a react app.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## World Map

![D3.js_worldmap.png](/public/images/D3.js_worldmap.png)

The barchart uses data that was taken from the [World Atlas npm](https://unpkg.com/browse/world-atlas@2.0.2/),the medium (50m) raw file can be found [here](https://unpkg.com/world-atlas@2.0.2/countries-50m.json)

## Barchart

![D3.js_Barchart](/public/images/d3_react_%20barchart.png)

The barchart uses data that was taken from the [United Nations World Population Prospects 2019 Dataset](https://population.un.org/wpp/Download/Standard/Population/), cleaned and formatted as a [CSV](https://gist.github.com/0surface/78122e6e1e8b81771376b923f6728e7f).

## Scatter Plot

![D3.js_scatterplot](/public/images/D3.js_scatterplot.png)

The scatter plot uses was Originally published at [UCI Machine Learning Repository: Iris Data Set](https://archive.ics.uci.edu/ml/datasets/Iris). The cleaned and formatted data was originally taken Curran's [GitHubGist](https://gist.github.com/curran/a08a1080b88344b0c8a7), presented as a [CSV](https://gist.github.com/0surface/eea4f7bc5a12967236ecda853f8d370a)

## Line Chart

![D3.js_linechart](/public/images/D3.js_linechart.png)

This line chart shows temperature in degrees celcius in San Francisco for one week. The data was collected from the (now defunct) [Data Canvas - Sense Your City API](http://grayarea.org/initiative/data-canvas-sense-your-city/). The cleaned [CSV] file is originally taken from Curran's [GitHubGist](https://gist.github.com/curran/90240a6d88bdb1411467b21ea0769029) presented as a [CSV](https://gist.github.com/0surface/e8103ae8478baecd904c57847709f0c0#file-week_temperature_sf-csv)

## World map Resources

#### [World Atlas TopoJSON](https://github.com/topojson/world-atlas)

This repository provides a convenient redistribution of Natural Earth’s vector data

#### [TopoJSON](https://github.com/topojson/topojson)

TopoJSON is an extension of GeoJSON that encodes topology. Rather than representing geometries discretely, geometries in TopoJSON files are stitched together from shared line segments called arcs

#### [GeoJSON](https://en.wikipedia.org/wiki/GeoJSON)

GeoJSON[1] is an open standard format designed for representing simple geographical features, along with their non-spatial attributes. It is based on the JSON format.

#### [Natural Earth](https://www.naturalearthdata.com/)

Natural Earth is a public domain map dataset available at 1:10m, 1:50m, and 1:110 million scales. Featuring tightly integrated vector and raster data, with Natural Earth you can make a variety of visually pleasing, well-crafted maps with cartography or GIS software.

#### [World Atlas npm](https://unpkg.com/browse/world-atlas@2.0.2/)

the medium (50m) raw [file ](https://unpkg.com/world-atlas@2.0.2/countries-50m.json)

#### [Map Shaper](https://mapshaper.org/)

Visualize maps if you have the files (shape,geo)

#### [Line Simplification](https://bost.ocks.org/mike/simplify/)

Simplify geometry to suit the displayed resolution. Reduces the geo data to a fraction while maintaining the basic geometery / shape.

#### Transforming topoJSON data to GeoJson data

This is done by using the topoJSON [library](https://github.com/topojson/topojson-client/blob/master/README.md#feature)
topojson.feature - convert TopoJSON to GeoJSON
Get the minified version directly from [unpkg]https://unpkg.com/browse/topojson-client@3.1.0/dist/) and get the raw [file](https://unpkg.com/topojson-client@3.1.0/dist/topojson-client.min.js)

#### [Add a map projection](https://www.npmjs.com/package/d3-geo)
