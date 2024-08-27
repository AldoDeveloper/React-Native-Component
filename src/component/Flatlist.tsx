import { Dimensions, FlatList as FlatlistReact, StyleSheet, Text, View } from 'react-native'
import React, { PureComponent } from 'react';
import Data from '../data/data.list';
import SelectItem from './SelectItem';

const { width } = Dimensions.get("screen");

export default class Flatlist extends PureComponent {
    
    private viewabilityConfig: any;

    public constructor(props: any) {
        super(props);
        this.StickyHeaderComponent = this.StickyHeaderComponent.bind(this);
        this.viewabilityConfig = {
            waitForInteraction: true,
            viewAreaCoveragePercentThreshold: 95
        }
    }

    private StickyHeaderComponent(): React.ReactNode | React.JSX.Element {
        return (
            <View style={{ backgroundColor: "red", height: "100%" }}>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing.</Text>
            </View>
        )
    }

    private FooterComponent() : React.ReactNode | React.JSX.Element {
        return (
            <View style={{ backgroundColor: "red", height: "100%" }}>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing.</Text>
            </View>
        )
    }

    public render() {
        return (
            <FlatlistReact
                data={Data}
                ItemSeparatorComponent={({ higlight }) => (
                    <View
                        style={[{ width: "100%", height: 1, backgroundColor: "#ccc" }, higlight && { marginLeft: 0 }]} />
                )}
                ListHeaderComponent={() => <this.StickyHeaderComponent />}
                ListHeaderComponentStyle={{ height: 80 }}
                ListFooterComponent={() => <this.FooterComponent />}
                ListFooterComponentStyle={{ height: 50 }}
                stickyHeaderIndices={[0, 4, 8]}
                showsVerticalScrollIndicator
                pagingEnabled
                onScroll={(ev: any) => { }}
                viewabilityConfig={this.viewabilityConfig}
                // onViewableItemsChanged={({ viewableItems, changed }) => {
                //     console.log(changed[0].item)
                // }}
                onScrollAnimationEnd={() => {
                    console.log("animated end")
                }}

                onEndReached={({ distanceFromEnd }) => {
                    console.log(distanceFromEnd, "flatlist")
                }}
                onEndReachedThreshold={0.5}
                keyExtractor={(item, index) => `${item.name}-${index}`}
                renderItem={({ item, index, separators }) => <SelectItem item={item} index={index} separators={separators}/>} />
        )
    }
}

const styles = StyleSheet.create({
    header: {
        width,
        height: "auto",
        alignItems: "flex-start"
    }
})