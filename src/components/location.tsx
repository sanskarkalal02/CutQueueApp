// src/components/GooglePlacesLocationPicker.tsx
import {GOOGLE_API_KEY} from '../apis/googleAPI'
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  Keyboard,
} from "react-native";

type Suggestion = {
  place_id: string;
  description: string;
};

type LocationResult = {
  description: string;
  latitude: number;
  longitude: number;
};

type Props = {
  /**
   * Called once the user selects a suggestion and we have lat/lng.
   * Receives { description, latitude, longitude }.
   */
  onLocationSelected: (loc: LocationResult) => void;

  /**
   * Placeholder text for the input.
   */
  placeholder?: string;

  /**
   * If you want to restrict autocomplete to a certain country (ISO 2-letter), e.g. "us" or "in".
   */
  countryCodes?: string;
};



export default function GooglePlacesLocationPicker({
  onLocationSelected,
  placeholder = "Type an address…",
  countryCodes,
}: Props) {
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [loadingSuggestions, setLoadingSuggestions] = useState<boolean>(false);
  const [loadingDetails, setLoadingDetails] = useState<boolean>(false);

  // A ref to store the current debounce timer
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  // Whenever `query` changes, wait 300 ms then fetch autocomplete
  useEffect(() => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    if (query.length < 3) {
      setSuggestions([]);
      return;
    }

    setLoadingSuggestions(true);
    debounceTimer.current = setTimeout(() => {
      fetchAutocomplete(query);
    }, 300);

    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [query]);

  // Fetch autocomplete suggestions from Google Places API
  async function fetchAutocomplete(text: string) {
    try {
      const encoded = encodeURIComponent(text);
      let url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encoded}&key=${GOOGLE_API_KEY}`;
      // Limit to geocoded addresses (optional)
      url += `&types=geocode`;
      if (countryCodes) {
        url += `&components=country:${countryCodes}`;
      }

      const response = await fetch(url);
      const json = await response.json();

      if (json.status === "OK" && Array.isArray(json.predictions)) {
        const data: Suggestion[] = json.predictions.map((p: any) => ({
          place_id: p.place_id,
          description: p.description,
        }));
        setSuggestions(data);
      } else {
        setSuggestions([]);
      }
    } catch (err) {
      console.warn("Autocomplete error:", err);
      setSuggestions([]);
    } finally {
      setLoadingSuggestions(false);
    }
  }

  // When a suggestion is tapped, fetch place details to get lat/lng
  async function handleSelectSuggestion(item: Suggestion) {
    setLoadingDetails(true);
    setSuggestions([]);
    setQuery(item.description); // show the selected description
    Keyboard.dismiss();

    try {
      const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${item.place_id}&key=${GOOGLE_API_KEY}`;
      const response = await fetch(url);
      const json = await response.json();

      if (
        json.status === "OK" &&
        json.result &&
        json.result.geometry &&
        json.result.geometry.location
      ) {
        const {
          lat,
          lng,
        } = json.result.geometry.location as { lat: number; lng: number };

        onLocationSelected({
          description: item.description,
          latitude: lat,
          longitude: lng,
        });
      } else {
        console.warn("Place Details failed:", json.status);
      }
    } catch (err) {
      console.warn("Place Details error:", err);
    } finally {
      setLoadingDetails(false);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        value={query}
        onChangeText={setQuery}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
      />

      {loadingSuggestions && (
        <View style={styles.loadingWrapper}>
          <ActivityIndicator size="small" color="#444" />
        </View>
      )}

      {suggestions.length > 0 && (
        <FlatList
          keyboardShouldPersistTaps="handled"
          data={suggestions}
          keyExtractor={(item) => item.place_id}
          style={styles.suggestionsList}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.suggestionItem}
              onPress={() => handleSelectSuggestion(item)}
            >
              <Text style={styles.suggestionText}>
                {item.description}
              </Text>
            </TouchableOpacity>
          )}
        />
      )}

      {loadingDetails && (
        <View style={styles.loadingWrapper}>
          <ActivityIndicator size="large" color="#444" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    zIndex: 100, // to float suggestions above other siblings
  },
  textInput: {
    height: 48,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  loadingWrapper: {
    position: "absolute",
    right: 12,
    top: 12,
  },
  suggestionsList: {
    marginTop: 4,
    borderRadius: 6,
    borderColor: "#eee",
    borderWidth: 1,
    backgroundColor: "#fff",
    maxHeight: 200, // limit height
  },
  suggestionItem: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderBottomColor: "#f2f2f2",
    borderBottomWidth: 1,
  },
  suggestionText: {
    fontSize: 16,
    color: "#333",
  },
});
