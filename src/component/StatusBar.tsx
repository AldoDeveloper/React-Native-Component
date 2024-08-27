import { StyleSheet, type StatusBarStyle, StatusBar as StatusBarRN, Button, Text, View } from 'react-native'
import React from 'react'

type TTransitions = "fade" | "slide" | "none";

const STYLES: Array<StatusBarStyle>   = ["default", "dark-content", "light-content"];
const TRANSITION: Array<TTransitions> = ["fade", "slide", "none"] as const;

StatusBarRN.setBackgroundColor("red");

export default function StatusBar() {

    const [hidden, setHidden] = React.useState<boolean>(false);
    const [statusBarStyle, setStatusBarStyle] = React.useState<StatusBarStyle>("default")
    const [statusBarTransition, setStatusBarTransition] = React.useState<TTransitions>("fade");

    const changeStatusBarVisibility = async () => {
        setHidden(!hidden);
    };

    const changeStatusBarStyle = async () : Promise<void> => {
        const stylesId = STYLES.indexOf(statusBarStyle) + 1;
        if (stylesId === STYLES.length) {
            setStatusBarStyle(STYLES[0]);
            return;
        }
        return setStatusBarStyle(STYLES[stylesId]);
    }
    return (
        <View style={{ flex: 1 }}>
            <StatusBarRN
                animated={true}
                hidden={hidden}
                barStyle={statusBarStyle}
                showHideTransition={statusBarTransition} />
            <Text style={styles.textStyle}>
                Status Visibility : {'\n'}
                { hidden ? "HIDDEN" : "VISIBILITY" }
            </Text>
            <Button 
                title='Toogle Status Bar' 
                onPress={changeStatusBarVisibility}/>
            <Button
                title='Change Status BarStyle'
                onPress={changeStatusBarStyle} />
        </View>
    )
}

const styles = StyleSheet.create({

    buttonContainer: {
        padding: 10,
    },

    textStyle: {
        textAlign: "center",
        marginBottom: 10
    }
})