// src/components/PhotoPicker.tsx
import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

interface Props {
  /** Called when an image is successfully picked.
   *  We pass back both the local URI and the base64 string (if needed). */
  onPick: (image: { uri: string; base64?: string }) => void;
}

export default function PhotoPicker({ onPick }: Props) {
  const [localUri, setLocalUri] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  /** 1. Ask permission and launch image picker */
  const pickImage = async () => {
    // Ask for permission
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Permission required',
        'We need permission to access your photos.'
      );
      return;
    }

    // Launch the image picker
    setLoading(true);
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],       // force square crop
      quality: 0.8,
      base64: true,         // include base64 if you want to send it later
    });
    setLoading(false);

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const asset = result.assets[0];
      setLocalUri(asset.uri);
      onPick({ uri: asset.uri, base64: asset.base64 ?? undefined });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage} style={styles.avatarPlaceholder}>
        {loading ? (
          <ActivityIndicator size="small" color="#FFFFFF" />
        ) : localUri ? (
          <Image source={{ uri: localUri }} style={styles.avatarImage} />
        ) : (
          <View style={styles.plusIconContainer}>
            {/* You can replace this with any “plus” or “edit” icon you like. */}
            <View style={styles.plusIconVertical} />
            <View style={styles.plusIconHorizontal} />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}

const AVATAR_SIZE = 100;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarPlaceholder: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    backgroundColor: '#CCCCCC',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  avatarImage: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
  },
  plusIconContainer: {
    width: 40,
    height: 40,
    position: 'relative',
  },
  plusIconVertical: {
    position: 'absolute',
    left: 18,
    top: 0,
    width: 4,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },
  plusIconHorizontal: {
    position: 'absolute',
    left: 0,
    top: 18,
    width: 40,
    height: 4,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },
});
