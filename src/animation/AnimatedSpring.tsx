import { StyleSheet, Text, View, Animated, Button } from 'react-native'
import React from 'react'

export default function AnimatedSpring() {

  const refSpring = React.useRef<Animated.Value>(new Animated.Value(0)).current;
 
  const startSpringAnimation = async () => {

    Animated.spring(refSpring, {
        toValue: 1,
        friction: 2,
        tension: 50,
        useNativeDriver: true
    }).start(({ finished }) => {
        
        if(finished){
            Animated.spring(refSpring, {
                toValue: 0.5,
                friction: 2, // Mengontrol "kelenturan"/overshoot. Default 7.
                tension: 50, // Mengontrol kecepatan. Default 40.
                useNativeDriver: true,
            })
        }
    });
  }
  return (
    <View style={styles.container}>
       <Animated.View style={[styles.box, {
         transform : [{ scale: refSpring }]
       }]}>
       </Animated.View>
       <Button title='Start Spring Animation' onPress={startSpringAnimation}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center"
    },
    box: {
        width : 100,
        height: 100,
        backgroundColor: "skyblue",
    }
})