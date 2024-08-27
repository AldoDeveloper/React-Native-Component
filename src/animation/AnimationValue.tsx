import { StyleSheet, Text, View, Animated } from 'react-native'
import React from 'react'

export default function AnimationValue() {

  const animationRef = React.useRef<Animated.Value>(new Animated.Value(0)).current;

  React.useEffect(() => {
     Animated.timing(animationRef, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
     }).start();
  }, [ animationRef ]);

  return (
    <View style={styles.container}>
        <Animated.View style={[styles.box_animation, {opacity: animationRef}]} >
            <Text style={{fontSize: 22, textAlign: "center"}}>
                Lorem, ipsum dolor.
            </Text>
        </Animated.View>
    </View> 
  )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    box_animation : {
        width  : 250,
        height : 50,
        backgroundColor: "powderblue"
    }
})