/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './map.css';
import {
  Map,
  Circle,
  Popup,
  TileLayer,
  LayersControl,
  FeatureGroup,
} from 'react-leaflet';

class MapView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLatitude: 0,
      currentLongitude: 0,
      data: [],
      isLoaded: false,
    };
  }
  render() {
    console.log(this.state.data);
    return (
      <Map center={[12.9721, 77.5933]} zoom={17} maxZoom={19}>
        <LayersControl>
          <LayersControl.BaseLayer name="Mapnik (Light)" checked>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
          </LayersControl.BaseLayer>
            
        </LayersControl>
      </Map>
    );
  }
}

export default MapView;
