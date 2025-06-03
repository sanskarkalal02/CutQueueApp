import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CustomerHomeScreen from '../../screens/customerHomeScreen';
import CustomerEditProfile from '../../screens/customerEditProfile';
import CustomerSearchScreen from '../../screens/customerSearchScreen';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useRoute } from '@react-navigation/native';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

const Tab = createBottomTabNavigator();


const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="CustomerHome" options={{headerShown:false,title:'Home', tabBarIcon:()=> <Entypo name="home" size={24} color="black" /> }} component={CustomerHomeScreen} />
      <Tab.Screen name="CustomerSearch"options={{headerShown:false,title:'Search', tabBarIcon:()=><AntDesign name="search1" size={24} color="black" />}} component={CustomerSearchScreen} />

      <Tab.Screen name="CustomerEdit" options={{headerShown:false,title:'Profile',tabBarIcon:()=><FontAwesome5 name="user-edit" size={23}  color="black"  />}} component={CustomerEditProfile} />
    </Tab.Navigator>
  );
}

export default BottomTabsNavigator

const styles = StyleSheet.create({})