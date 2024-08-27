import { Dimensions, Image, StyleSheet, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { PropsList } from '../data/data.list';

type PropsSelectItem = {
    item: PropsList,
    index: number,
    separators: any
}

const { width } = Dimensions.get("screen");

export default function SelectItem({ item, index, separators } : PropsSelectItem) {
    
    const [active, setActive]   = React.useState<boolean>(false);
    const handleSelectItemPress = (item: PropsList) => {
        if(active){
            setActive(!active)
        }
    };

    return (
        <TouchableHighlight
            key={index}
            onPress={() => handleSelectItemPress(item)}
            onShowUnderlay={separators.highlight}
            underlayColor={"#ccc"}
            onLongPress={() => setActive(true)}
            delayLongPress={500}
            style={active && { backgroundColor: "#ccc" }}
            onHideUnderlay={separators.unhighlight}>
            <View style={[styles.container]} key={index}>
                <Image
                    style={[styles.img_round]}
                    resizeMode={"contain"}
                    source={item.image} />
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        width,
        height: "auto",
        flexDirection: "row",
        alignSelf: 'center',
        alignItems: "center",
        gap: 10,
        padding: 5,
        position: "relative"
    },

    img_round: {
        width: 80,
        height: 80
    }
})