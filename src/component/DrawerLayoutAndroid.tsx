
import React, { PureComponent } from 'react';
import { StyleSheet, DrawerLayoutAndroid as DrawerLayoutAndroidRN, View, Text, Button } from 'react-native';

export default class DrawerLayoutAndroid extends PureComponent {

    private drawerRef = React.createRef<DrawerLayoutAndroidRN>();

    public constructor(props: any) {
        super(props);
        this.navigationView = this.navigationView.bind(this);
    }

    private navigationView(): React.JSX.Element {
        return (
            <View style={[styles.container, styles.navigationContainer]}>
                <Text style={styles.paragraf}>Lorem, ipsum dolor.</Text>
                <Button 
                    title='Close Drawer' 
                    onPress={() => this.drawerRef.current?.closeDrawer()}/>
            </View>
        )
    }

    public render() {
        return (
            <DrawerLayoutAndroidRN
                ref={ this.drawerRef as any }
                drawerWidth={230}
                renderNavigationView={() => <this.navigationView />}
                drawerPosition={"left"}>
                <View style={styles.container}>
                    <Text style={styles.paragraf}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, suscipit!
                    </Text>
                    <Button 
                        title='Open Drawer' 
                        onPress={() => this.drawerRef.current?.openDrawer()}/>
                </View>
            </DrawerLayoutAndroidRN>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
    navigationContainer: {
        backgroundColor: "white"
    },
    paragraf: {
        padding: 10,
        textAlign: "center",
        fontSize: 10,
    }
})
