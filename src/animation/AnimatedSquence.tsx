import { Animated, Dimensions, StyleSheet, View } from 'react-native'
import React from 'react'

export default function AnimatedSquence() {

  const refTranslateY = React.useRef<Animated.Value>(new Animated.Value(-200)).current;
  const refOpactiy    = React.useRef<Animated.Value>(new Animated.Value(0)).current;
  const refSpring     = React.useRef<Animated.Value>(new Animated.Value(0.8)).current;

  React.useEffect(() => {

    Animated.sequence([
        Animated.timing(refOpactiy, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true
        }),
        Animated.timing(refTranslateY, {
            toValue: 1, 
            duration: 500,
            useNativeDriver: true
        }),
        Animated.spring(refSpring, {
            toValue: 1,
            tension: 2,
            friction: 80,
            useNativeDriver: true
        })
    ]).start();

  }, [ refTranslateY, refOpactiy, refSpring ]);

  return (
    <View style={styles.contianer}>
      <Animated.View style={[styles.box, { opacity : refOpactiy }, {
        transform: [
            { translateX: refTranslateY },
            { scale: refSpring }
        ]
      }]}/>
    </View>
  )
}

const styles = StyleSheet.create({
    contianer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    box: {
        width: Dimensions.get("screen").width / 2,
        height: 100,
        backgroundColor: "skyblue",
        borderRadius:5,
    }
})