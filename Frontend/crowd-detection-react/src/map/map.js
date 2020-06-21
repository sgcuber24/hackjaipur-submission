/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './map.css';
import { Map, Circle, Popup, TileLayer, LayersControl, FeatureGroup } from 'react-leaflet';
import HeatmapLayer from 'react-leaflet-heatmap-layer';
import LoadingScreen from './loadingScreen';

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
			isLoaded: false
		};
	}
	componentDidMount() {
		navigator.geolocation.getCurrentPosition((position) => {
			console.log('Latitude is :', position.coords.latitude);
			console.log('Longitude is :', position.coords.longitude);
			this.setState({
				currentLatitude: position.coords.latitude,
				currentLongitude: position.coords.longitude
			});
		});
		fetch('/api/v1/count')
			.then((res) => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						data: result.data
					});
				},
				(error) => {
					console.log(error);
					this.setState({
						isLoaded: true,
						error
					});
				}
			);
	}
	render() {
		console.log(this.state.data);
		return !this.state.isLoaded ? (
      <LoadingScreen className="loading" />
    ) : (
			<Map center={[12.9721, 77.5933]} zoom={17} maxZoom={19}>
				<LayersControl>
					<LayersControl.BaseLayer name="Mapnik (Light)">
						<TileLayer
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							attribution='&copy; CrowdDistance, <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						/>
					</LayersControl.BaseLayer>
					<LayersControl.BaseLayer name="Carto (Dark)" checked>
						<TileLayer
							url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
							attribution='&copy; CrowdDistance, <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
						/>
					</LayersControl.BaseLayer>
					<LayersControl.Overlay name="Heatmap">
						<HeatmapLayer
							points={this.state.data}
							maxZoom={20}
							longitudeExtractor={(m) => m['longitude']}
							latitudeExtractor={(m) => m['latitude']}
							intensityExtractor={(m) => parseFloat(m['peopleCount'])}
							gradient={{ 0.4: 'blue', 0.8: 'orange', 1.0: 'red' }}
							max={8.0}
						/>
					</LayersControl.Overlay>
					<LayersControl.Overlay name="Circle" checked>
						<FeatureGroup>
							{this.state.data.map((cctv) => (
								<Circle
									key={cctv.cctvId}
									center={[cctv.latitude, cctv.longitude]}
									radius={15}
									color={getColor(cctv.peopleCount)}
								>
									<Popup>
										<span>People count: {cctv.peopleCount}</span>
									</Popup>
								</Circle>
							))}
						</FeatureGroup>
					</LayersControl.Overlay>
				</LayersControl>
			</Map>
		);
	}
}

export default MapView;
