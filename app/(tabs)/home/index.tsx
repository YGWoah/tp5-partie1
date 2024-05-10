import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function App() {
	const [mapRegion, setMapRegion] = useState({
		latitude: 33.67049627269136,
		longitude: -7.379628725233621,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	});

	return (
		<View style={styles.container}>
			<MapView style={styles.map} region={mapRegion}>
				<Marker coordinate={mapRegion} title="Marker" />
			</MapView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
	},
	map: {
		width: '80%',
		height: '50%',
	},
});
