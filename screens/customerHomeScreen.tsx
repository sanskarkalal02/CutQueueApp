import { StyleSheet,Image, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { s, vs } from 'react-native-size-matters';
import { SafeAreaView } from 'react-native-safe-area-context';

type CustomerInfo = {
  imageURI?: string;
  userName?: string;
};

const CustomerHomeScreen = () => {
  const route = useRoute();
  const params = (route as { params?: CustomerInfo }).params || {};

  return (
    <SafeAreaView>
      {/* <Image source={{ uri: params?.imageURI }} style={styles.profilePic} /> */}


      <Text>Hi {params.userName} !</Text>
    </SafeAreaView>
  );
}

export default CustomerHomeScreen

const styles = StyleSheet.create({ profilePic: {

    width:s(50),
    height:vs(50),
    borderRadius:100
} });