import { Animated, Button, StyleSheet, View } from 'react-native'
import React from 'react'

export default function AnimatedDecay() {

  const [toogle, setToogle] = React.useState<boolean>(false);
  const decayAnimated       = React.useRef<Animated.Value>(new Animated.Value(0)).current;

  React.useEffect(() => {
    if(toogle){
        Animated.decay(decayAnimated, {
            velocity: 1,
            deceleration: 0.997,
            useNativeDriver: true
        }).start();
    }else{
        Animated.decay(decayAnimated, {
            velocity: 1,
            deceleration: 0.997,
            useNativeDriver: true
        }).reset();
    }
  }, [ decayAnimated, toogle ]);

  return (
    <View style={styles.container}>
       <Animated.View style={[styles.box, { transform: [{ translateX: decayAnimated }]}]}/>
       <Button title={toogle ? "Show Animated" : "Hidde Animated"} onPress={() => setToogle(!toogle)}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent: "center",
        alignItems: "center"
    },
    box: {
        width: 200,
        height: 100,
        backgroundColor: "skyblue"
    }
})