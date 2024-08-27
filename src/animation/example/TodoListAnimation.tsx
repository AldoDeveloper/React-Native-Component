import { Animated, Button, FlatList, ListRenderItemInfo, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';

type TData = {
    id: number,
    title: string,
    animation: Animated.Value
};

const DEFAULT_DATA: Array<TData> = [
    {
        id: getRandomInt(1, 10000),
        title: "Series Data 1",
        animation: new Animated.Value(0)
    },
    {
        id: getRandomInt(1, 10000),
        title: "Series Data 2",
        animation: new Animated.Value(0)
    },
]

export default function TodoListAnimation() {

    const [items, setItems] = React.useState<Array<TData>>(DEFAULT_DATA);

    const addItems = async (item: TData) => {
        setItems((props) => {
            return [...props, { ...item }]
        })
    };

    const removeItems = async (id: number) => {
        const itemRemove: Array<TData> = items.filter((value) => value.id !== id);
        setItems(itemRemove);
    };

    const animateItems = (item: TData, index: number) => {
        Animated.timing(item.animation, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
        }).start();
    }

    const renderItem = ({ item, index, separators }: ListRenderItemInfo<TData>) => {

        const scale = item.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0.8, 1]
        });

        const opacity = item.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        })
        animateItems(item, index);
        return (
            <Animated.View key={index} style={[styles.gridItems, {
                transform: [{ scale: scale }], opacity}]}>
                <Text style={styles.contentText}>
                    {item.title}
                </Text>
                <TouchableOpacity style={styles.buttonRemove} onPress={() => removeItems(item.id)}>
                    <Text>X</Text>
                </TouchableOpacity>
            </Animated.View>
        )
    }

    return (
        <View style={styles.container}>
            <Button title='Add' onPress={() => {
                addItems({ id: getRandomInt(0, 10000), title: `Seris Data ${getRandomInt(0, 10000)}`, animation: new Animated.Value(0) })
            }} />
            <FlatList
                data={items}
                keyExtractor={(props) => props.id.toString()}
                numColumns={1}
                extraData={items}
                renderItem={renderItem}
                contentContainerStyle={styles.grid}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    grid: {
        padding: 12,
    },

    gridItems: {
        flex: 1,
        margin: 10,
        height: 100,
        backgroundColor: "skyblue",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonRemove: {
        top: 5,
        right: 5,
        position: "absolute",
        width: 30,
        height: 30,
        borderRadius: 3,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        color: "white"
    },
    contentText: {
        fontSize: 18,
        color: "black",
        textAlign: "center"
    }
})


function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}