import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router';

const CategoryScreen = () => {

    const destinations = ['Tokyo', 'Paris', 'New York'];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Category</Text>
      </View>

      <Text style={styles.title}>Choose Your Destination</Text>
      {destinations.map((destination) => (
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{destination}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default CategoryScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',      
    },

    header: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#1FBA17',
        padding: 20,
        marginBottom: 20,
    },

    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: '50%',
        color: '#097969',
    },

    button: {
        width: '90%',
        alignItems: 'center',
        backgroundColor: '#1FBA17',
        padding: 20,
        marginTop: 40,
        borderRadius: 10,
    },

    buttonText: {
        color: 'white',
        fontSize: 18,
    },
})