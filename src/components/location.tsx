import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location'; // or use react-native-geolocation-service
import { s, vs } from 'react-native-size-matters';



export default function LocationComp() {
  interface Coords {
    latitude: number;
    longitude: number;
  }
  const [location, setLocation] = useState<Coords | null>(null);
  const [error, setError] = useState<string | null>(null);

  // 1. Get permission and location
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Location permission denied');
        return;
      }
      let loc = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Highest });
      setLocation(loc.coords);
    })();
  }, []);

  // 2. While loading
  if (!location) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // 3. Render map
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsUserLocation={true} // optional: shows the blue dot
        showsMyLocationButton={true} // Android only
      >
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          title="You are here"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
  width:s(300),
  height: vs(140),
  marginTop:10

  },
  map: {
    flex:1,
    borderRadius:20,
   
  },
  loader: {
    width:s(300),
    height: vs(140),
    marginTop:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});