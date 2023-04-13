import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-native'

const C = () => {

    // const value = useSelector((state) => {return state})
    const dispatch = useDispatch()

  return (
    <View>
      <Text>C</Text>
      {/* <Text>{ value }</Text> */}
      <Button onPress={() => dispatch({type : "AUGMENTER"})} title="+" />
    </View>
  )
}

export default C

const styles = StyleSheet.create({})