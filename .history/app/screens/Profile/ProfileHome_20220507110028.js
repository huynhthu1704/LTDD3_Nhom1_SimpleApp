import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderBar from '../../components/HeaderBar'
import { COLORS } from '../../constants'

export default function ProfileHome() {
  return (
    <View>
      <HeaderBar name="Profile" color={COLORS.white} leftIcon="arrow-left"/>
    </View>
  )
}

const styles = StyleSheet.create({})