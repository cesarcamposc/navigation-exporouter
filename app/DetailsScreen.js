import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailsScreen = () => {
  const destinationsDetails = {
    Tokyo : {
      description: "",
      image: require('../assets/images/react-logo.png'),
      attractions: ["","",""],
    } ,
    Paris : {
      description: "",
      image: require('../assets/images/react-logo.png'),
      attractions: ["","",""],
    }, 
    NewYork : {
      description: "",
      image: require('../assets/images/react-logo.png'),
      attractions: ["","",""],
    }, 
  };

  return (
    <ScrollView>
      <View style = {styles.header}>
        <Text style = {styles.headerTitle}>Destinations</Text>
      </View>

      <View>
        <Image source = {{}} style = {styles.image}/>
        <Text style = {styles.description}>Description</Text>
        <Text style = {styles.subtitle}>SubTitle</Text>
        

      </View>

    </ScrollView>
    
  )
}

export default DetailsScreen

const styles = StyleSheet.create({})