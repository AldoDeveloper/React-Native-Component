import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SquentialFadeInList() {

  const fadeAnimation = React.useRef<Array<Animated.ValueXY>>(
    Array.from({ length: 10 })
         .map(() => new Animated.ValueXY({x: 0, y: 0}))
  ).current;

  React.useEffect(() => {
    const animatedMap = fadeAnimation.map((anim) =>  
        Animated.timing(anim, {
            toValue: {x: 1, y: 1},
            duration: 100,
            useNativeDriver: true
        })
    );
    Animated.stagger(200, animatedMap).start();
  }, [fadeAnimation]);

  return (
    <View style={styles.container}>
      {
         fadeAnimation.map((anim, index) => (
            <Animated.View key={index} style={[styles.item, {
                transform: [
                    { scaleX: anim.x },
                    { scaleY: anim.y },
                ]
            }]}>
                <Text>
                    Items to {index + 1}
                </Text>
            </Animated.View>
         ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: "center",
        padding: 12, 
      },
      item: {
        width: Dimensions.get("screen").width / 3,
        height: 50,
        borderRadius: 10,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
        marginHorizontal: 5,
      },
      text: {
        fontSize: 18,
        color: 'white',
      },
})