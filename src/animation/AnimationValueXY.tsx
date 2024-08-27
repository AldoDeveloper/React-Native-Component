import { StyleSheet, Text, View, Animated, Button } from 'react-native'
import React from 'react'

export default function AnimationValueXY() {
    
  const animatedValueXY = React.useRef<Animated.ValueXY>(new Animated.ValueXY({ x: 0, y: 1 })).current;

  const handleShowAnimated = async() => {
    Animated.timing(animatedValueXY, {
        toValue  : { x: 1, y: 1 },
        useNativeDriver: true,
        duration : 500,
    }).start();
  };

  const handleHiddeAnimated = async() => {
    Animated.timing(animatedValueXY, {
        toValue  : { x: 0, y: 1 },
        useNativeDriver: true,
        duration : 500,
    }).start();
  };

  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Animated.View style={[
            styles.viewContainer,
            {
                opacity: animatedValueXY.x,
                transform: [
                    { scaleX: animatedValueXY.x },
                    { scaleY: animatedValueXY.y }
                ]
            }
        ]}>
            <Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing.
            </Text>
        </Animated.View>
        <View style={{ padding: 12, width: "100%", gap: 8 }}>
            <Button title='Show Animated'  onPress={handleShowAnimated}/>
            <Button title='hidde Animated' onPress={handleHiddeAnimated}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    viewContainer: {
        padding: 10,
        width: 200,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 10,
    }
})