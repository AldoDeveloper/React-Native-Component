import { Animated, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function AnimatedInterpolate() {

    const scroolY = React.useRef<Animated.Value>(new Animated.Value(0)).current;
    
    const scale = scroolY.interpolate({
        inputRange : [0, 300], // Rentan Scrool hingga 300 
        outputRange: [1, 2],
        extrapolate: "clamp"
    });

    const opacity = scroolY.interpolate({
        inputRange : [0, 300],
        outputRange: [0, 1],
        extrapolate: "clamp"
    });

    return (
        <View style={styles.container}>
            <Animated.ScrollView
                contentContainerStyle={styles.viewContent}
                onScroll={Animated.event([
                    { nativeEvent    : { contentOffset: {y: scroolY}}}
                ],  { useNativeDriver: true})}

                scrollEventThrottle={16}>
                <Animated.View style={[styles.box, {transform: [{ scale }], opacity}]}/>

                <View style={styles.placeholder}>
                    <Text style={styles.placeholderText}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel aperiam enim maxime debitis sint nemo ducimus quasi nihil saepe, vitae iusto commodi expedita iure veritatis aliquam quis recusandae beatae deleniti laborum nulla quia blanditiis consectetur obcaecati? Veniam, illo blanditiis dolor, eaque delectus voluptates doloremque ratione neque id commodi atque laboriosam odio accusantium cupiditate provident, velit et odit aliquam eveniet illum sed cum voluptatibus facilis in. Tenetur dicta et numquam aut eum! Reprehenderit consequuntur non in tempora nisi eveniet quibusdam ad culpa sunt ut! Quisquam odit repellat suscipit libero. Minima, iure? Explicabo rerum a sint atque saepe, fuga quaerat! Suscipit, accusamus.
                    </Text>
                </View>
            </Animated.ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewContent: {
        padding: 10,
    },
    box: {
        width: 150, 
        height: 150,
        backgroundColor: "skyblue",
        justifyContent: "center",
        alignItems: "center",
        alignContent: 'center',
        marginTop: 50,
        marginBottom: 100,
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
      },
      placeholder: {
        height: 800,
        justifyContent: 'center',
        alignItems: 'center',
      },
      placeholderText: {
        fontSize: 18,
      },
})