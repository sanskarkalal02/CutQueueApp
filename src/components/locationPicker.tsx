// src/screens/LocationPickerScreen.tsx

import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import GooglePlacesLocationPicker from "../components/location";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { s, vs } from "react-native-size-matters";
// (Optional) If you want to show a map after selection:
// import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

type Location = {
  description: string;
  latitude: number;
  longitude: number;
};

type LocationPickerScreenProps = {
  onSelect: (loc: Location) => void;
};

export default function LocationPickerScreen({ onSelect }: LocationPickerScreenProps) {
  const [selected, setSelected] = useState<{
    description: string;
    latitude: number;
    longitude: number;
  } | null>(null);

  return (
    <View style={styles.screen}>
      <GooglePlacesLocationPicker
        placeholder="📍 Select Location"
        // Optional: restrict to U.S. only; remove `countryCodes` if not needed
        countryCodes="IN"
        onLocationSelected={(loc) => {
            onSelect(loc);
          setSelected(loc);
        }}
      />

      </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    width: '80%',
    marginTop:10
  }
});

