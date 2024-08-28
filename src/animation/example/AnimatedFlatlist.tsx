import { Animated, Dimensions, StyleSheet, Text } from 'react-native'
import React from 'react';

const data = Array.from({ length: 20}, (_, i) => `Item ${i + 1}`);
const { height } = Dimensions.get("screen");
export default function AnimatedFlatlist() {

    const scroolY = React.useRef<Animated.Value>(new Animated.Value(0)).current;
    const renderItem = ({item, index} : { item : string, index: number }) => {

    const inputRange = [-1, 0, 100 * index, 100 * (index + 1)]; // Animation Fadein Top
    const scale = scroolY.interpolate({
        inputRange,
        outputRange: [1, 1, 1, 0]
    });

    const opacity = scroolY.interpolate({
        inputRange, 
        outputRange: [1, 1, 1, 0]
    });

    return(
        <Animated.View style={[styles.item, {transform :[{scale}], opacity}]}>
            <Text style={styles.itemText}>
                { item.toLocaleUpperCase() }
            </Text>
        </Animated.View>
    )
  }
  return (
     <Animated.FlatList 
        data={data} 
        keyExtractor={(item) => item}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainer}
        onScroll={Animated.event([
            { nativeEvent: {contentOffset : { y: scroolY }}}], { useNativeDriver: true })}>

     </Animated.FlatList>
  )
}

const styles = StyleSheet.create({
    contentContainer: {
        padding: 20,
        marginTop: 30,
      },
      item: {
        backgroundColor: 'skyblue',
        padding: 20,
        marginVertical: 10,
        borderRadius: 10,
      },
      itemText: {
        fontSize: 24,
        color: 'white',
      },
})