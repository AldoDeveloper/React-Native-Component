import { StyleSheet, Text, View, Modal as ModalRN, Alert, Pressable } from 'react-native'
import React from 'react'

export default function Modal() {

    const [visible, setVisible] = React.useState<boolean>(false);
    return (
        <View style={styles.centeredView}>
            <ModalRN
                animationType={"fade"}
                visible={visible}
                transparent={true}
                supportedOrientations={["portrait-upside-down"]}
                onRequestClose={() => {
                    console.log("modal close")
                    Alert.alert("modal can closed...")
                    setVisible(false);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>
                            Lorem ipsum dolor sit amet consectetur.
                        </Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setVisible(!visible)}>
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </ModalRN>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setVisible(true)}>
                <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
    modalView: {
        margin: 20,
        padding: 35,
        backgroundColor: "white",
        alignItems: "center",
        shadowColor: '#000',
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})