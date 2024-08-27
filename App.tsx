import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Flatlist from './src/component/Flatlist'
import Image from './src/component/Image'
import KeyboardAvoiding from './src/component/KeyboardAvoiding'
import Modal from './src/component/Modal'
import StatusBar from './src/component/StatusBar'
import DrawerLayoutAndroid from './src/component/DrawerLayoutAndroid'
import AnimationValue from './src/animation/AnimationValue'
import AnimationValueXY from './src/animation/AnimationValueXY'
import AnimatedSpring from './src/animation/AnimatedSpring'
import SquentialFadeInList from './src/animation/example/SquentialFadeInList'
import AnimatedSquence from './src/animation/AnimatedSquence'
import AnimatedDecay from './src/animation/AnimatedDecay'
import TodoListAnimation from './src/animation/example/TodoListAnimation'
import ParalaxScrollAnimation from './src/animation/example/ParalaxScrollAnimation'

export default function App() {
  return (
   <SafeAreaView style={[styles.container]}>
      {/* <Image/> */}
      {/* <Flatlist/> */}
      {/* <KeyboardAvoiding/> */}
      {/* <Modal/> */}
      {/* <StatusBar/> */}
      {/* <DrawerLayoutAndroid/> */}
      {/* <AnimationValue/> */}
      {/* <AnimationValueXY/> */}
      {/* <AnimatedSpring/> */}
      {/* <SquentialFadeInList/> */}
      {/* <AnimatedSquence/> */}
      {/* <AnimatedDecay/> */}
      {/* <TodoListAnimation/> */}
      <ParalaxScrollAnimation/>
   </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex : 1
  }
});