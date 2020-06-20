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
import HeatmapLayer from 'react-leaflet-heatmap-layer';

function getColor(peopleCount) {
  if (peopleCount < 30) {
    return 'blue';
  }
  if (peopleCount < 50 && peopleCount > 30) {
    return 'yellow';
  }
  if (peopleCount < 100 && peopleCount > 50) {
    return 'orange';
  }
  return 'red';
}

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
          <LayersControl.BaseLayer name="Stadia (Compact)" checked>
            <TileLayer
              url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
              attribution='&copy; CrowdDistance, <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Mapnik (Light)">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; CrowdDistance, <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Carto (Dark)">
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              attribution='&copy; CrowdDistance, <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            />
          </LayersControl.BaseLayer>
          <LayersControl.Overlay name="Heatmap" checked>
            <HeatmapLayer
              points={null}
              maxZoom={20}
              longitudeExtractor={null}
              latitudeExtractor={null}
              intensityExtractor={null}
              gradient={{ 0.4: 'blue', 0.8: 'orange', 1.0: 'red' }}
              max={8.0}
            />
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Circle">
            <FeatureGroup>
                <Circle
                  center={[12.9721, 77.5933]}
                  radius={15}
                  color={getColor(12)}
                >
                    <Popup>
                        <span>Crowd: {null}</span>
                    </Popup>
                </Circle>
            </FeatureGroup>
          </LayersControl.Overlay>            
        </LayersControl>
      </Map>
    );
  }
}

export default MapView;
