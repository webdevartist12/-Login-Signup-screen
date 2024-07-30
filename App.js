import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import ListingCard from "./src/Screens/ListingCard";
import IconsPractice from "./src/Screens/IconsPractice";
import Login from "./src/Screens/Login";
import Signup from "./src/Screens/Signup";
import ConfettiPractice from "./src/Screens/ConfettiPractice";
import BaseNavigation from "./src/Navigations/BaseNavigation";
import TimerPicker from "./src/Screens/TimePicker";

export default function App() {
  return (
  
     <>
   <BaseNavigation/>

    </>

  );
}












/*<View style={styles.safeArea}>
<StatusBar style="dark"/>
<TimerPicker/>
</View>




const styles = StyleSheet.create({
    safeArea:{
      flex:1,
    }
    })*/

 