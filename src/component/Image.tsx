import { StyleSheet, View, Image as ImageRn, Dimensions } from 'react-native'
import React, { PureComponent } from 'react';

const imagePath  = require("../assets/phone_1.png");
const imgLoading = require("../assets/phone_2.png");

const { width, height } = Dimensions.get("screen");

export default class Image extends PureComponent {

    public render() {
        return (
            <View style={[styles.container]}>
                <ImageRn
                    style={[styles.image]}
                    source={imagePath}
                    alt='iphone_series'
                    blurRadius={0}
                    progressiveRenderingEnabled
                    loadingIndicatorSource={imgLoading}
                    onLoadEnd={() => console.log("image not loading")}
                    resizeMethod='scale'
                    resizeMode="contain" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width,
        height,
        alignItems: "center"
    },
    image: {
        flex: 0.5,
        width: "100%",
        elevation: 20
    }
})