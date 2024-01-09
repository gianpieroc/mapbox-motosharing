import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import Mapbox from '@rnmapbox/maps';

const Map: React.FC = () => (
  <Mapbox.MapView
    style={styles.map}
    compassEnabled={false}
    scaleBarEnabled={false}
    gestureSettings={{
      pitchEnabled: false,
    }}
  >
    <Mapbox.Images
      images={{
        markerBlack: require('../../static/images/icon_scooter_black.png'),
        markerGreen: require('../../static/images/icon_scooter_green.png'),
        markerOrange: require('../../static/images/icon_scooter_orange.png'),
        markerRed: require('../../static/images/icon_scooter_red.png'),
      }}
    />
  </Mapbox.MapView>
);

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
});

export default Map;
