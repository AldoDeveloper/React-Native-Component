import { Animated, Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const { height } = Dimensions.get("screen");
const imagePath  = require("../../assets/phone_1.png");

export default function ParalaxScrollAnimation() {

    const scroolY = React.useRef<Animated.Value>(new Animated.Value(0)).current;
    return (
        <View style={styles.container}>
            <Animated.Image
                resizeMode={"cover"}
                style={[styles.image, {
                    transform: [
                        {
                            translateY: scroolY.interpolate({
                                inputRange: [-height, 0, height],
                                outputRange: [height / 2, 0, height * 0.75],
                                extrapolate: "clamp"
                            })
                        }
                    ]
                }]}
                source={imagePath} />

            <SafeAreaView>
                <Animated.ScrollView
                    contentContainerStyle={styles.scroolViewContent}
                    onScroll={
                        Animated.event([
                            { nativeEvent: { contentOffset: { y: scroolY } } }],
                            { useNativeDriver: true })
                    }
                    scrollEventThrottle={16}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos.
                        </Text>
                        <Text style={styles.text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos.
                        </Text>
                        <Text style={styles.text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos.
                        </Text>
                        <Text style={styles.text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos.
                        </Text>
                        <Text style={styles.text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos.
                        </Text>
                        <Text style={styles.text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos.
                        </Text>
                        <Text style={styles.text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos.
                        </Text>
                        <Text style={styles.text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos.
                        </Text>
                        <Text style={styles.text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos.
                        </Text>
                        <Text style={styles.text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos.
                        </Text>
                        <Text style={styles.text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos.
                        </Text>
                    </View>
                </Animated.ScrollView>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    image: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: height / 2
    },

    scroolViewContent: {
        paddingTop: height / 2
    },
    textContainer: {
        backgroundColor: 'white',
        padding: 20,
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
    },
})