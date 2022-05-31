import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderBar from '../../components/HeaderBar'

export default function ProfileHome() {
  return (
    <View>
      <HeaderBar name="Profile" leftIcon="arrow-left"/>
    </View>
  )
}

const styles = StyleSheet.create({})