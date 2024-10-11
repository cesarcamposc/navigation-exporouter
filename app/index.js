import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import HomeScreen from './HomeScreen'
import CategoryScreen from './CategoryScreen'
import { router } from 'expo-router'
import { useRouter } from 'expo-router'


export default function index() {
    const router = useRouter();
  return (
    <View style = {styles.container}>
        <Button title='Go To Home' onPress={()=>router.push('/HomeScreen')}/>
    </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})