import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import MapView from 'react-native-maps';

const Map: React.FC = () => (
  <MapView
    style={styles.map}
    showsMyLocationButton={false}
    showsCompass={false}
    showsPointsOfInterest={false}
    showsTraffic={false}
    showsIndoors={false}
    showsIndoorLevelPicker={false}
    toolbarEnabled={false}
    pitchEnabled={false}
  />
);

const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: '100%',
  },
});

export default Map;
