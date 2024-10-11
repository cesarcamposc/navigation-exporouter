import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { router, useRouter } from 'expo-router';

const HomeScreen = () => {
    const router = useRouter();
    
    const destinations = ['Tokyo', 'Paris', 'New York'];

  return (
    <View style = {styles.container}>
        <View style = {styles.header}>
            <Text style = {styles.headerTitle}>Home</Text>
        </View>

        <Text style = {styles.title}>Welcome To The Travel App</Text>
        <TouchableOpacity style = {styles.button} onPress={()=>router.push('/CategoryScreen')}>
            <Text style = {styles.buttonText}>View Destinations</Text>
        </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

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