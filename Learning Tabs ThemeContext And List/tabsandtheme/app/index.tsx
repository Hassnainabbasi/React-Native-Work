import { ThemedButtonProps } from '@/components/ThemedButton'
import { ThemedText } from '@/components/ThemedText'
import React from 'react'
import { View } from 'react-native'

export default function index() {
  return (
    <View>
     <ThemedText type='title' align='center'>Welcome Screen</ThemedText>
     <ThemedButtonProps bgColor='green' txt='Go To Fun'></ThemedButtonProps>
    </View>
  )
}
