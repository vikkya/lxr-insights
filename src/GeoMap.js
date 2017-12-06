import React, {Component} from 'react';
//import img from './map.png';
import data1 from './data.js';
import './App.css';
import {Map, TileLayer, GeoJSON} from 'react-leaflet';
//console.log(data1);
//var layer;
class GeoMap extends Component{
    constructor(){
        super();
        this.state = {
            lat: 37.8, 
            lng: -96,
            zoom: 4,
        };
    
     this.getColor = (d) => {
              return d > 1000 ? '#800026' :
               d > 500  ? '#BD0026' :
               d > 200  ? '#E31A1C' :
               d > 100  ? '#FC4E2A' :
               d > 50   ? '#FD8D3C' :
               d > 20   ? '#FEB24C' :
               d > 10   ? '#FED976' :
                          '#FFEDA0';
    }
    this.getColor = this.getColor.bind(this);
    this.style = (feature) =>{
        return {
            fillColor: this.getColor(feature.properties.density),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    }
    this.style = this.style.bind(this);
}

    render(){
        const position = [this.state.lat, this.state.lng];
        //var geojson = GeoJSON;
        //console.log(this.getColor(550));
        const polygon = data1.features[0].geometry.coordinates[0];
        console.log(polygon);
        
  return(
            <div className="panel panel-default">
            <div className="panel-heading">Geo Location Analysis</div>
            <div className="panel-body" >
            <Map center={position} zoom={this.state.zoom}>
            <TileLayer
              id='mapbox.light'
              url='https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <GeoJSON 
            data={data1}
            style={this.style} 
            onEachFeature={(feature, layer) => layer.bindPopup('<h5>US Population Density</h5><b>'+feature.properties.name+'<br/>Desity:'+feature.properties.density+' people / mi<sup>2</sup></b>')}/>
            
          </Map>
            </div>
        </div>
        )
    }
}
export default GeoMap;