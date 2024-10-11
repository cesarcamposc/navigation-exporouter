import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function Home() {
    const router = useRouter();
  return (
    <View>
      <Text>Home</Text>
      <Button title = "Go back" onPress = {()=>router.back()}/>
    </View>
  )
}

const styles = StyleSheet.create({})