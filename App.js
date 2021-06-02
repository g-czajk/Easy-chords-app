import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import MainNavigation from "./src/routes/MainNavigation";
import styles from "./src/styles/styles";
import GlobalState from "./src/context/GlobalState";
import Context from "./src/context/Context";

const getFonts = () =>
    Font.loadAsync({
        "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
        "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
        "roboto-medium": require("./assets/fonts/Roboto-Medium.ttf"),
    });

export default function App() {
    const [appLoaded, setAppLoaded] = useState(false);

    const loadApp = async () => {
        await getFonts(); // await getStorageData();
    };

    if (appLoaded) {
        return (
            <GlobalState>
                <SafeAreaView style={styles.container}>
                    <MainNavigation />
                    <StatusBar style="auto" />
                </SafeAreaView>
            </GlobalState>
        );
    } else {
        return (
            <AppLoading
                startAsync={loadApp}
                onFinish={() => setAppLoaded(true)}
                onError={() => {}}
            />
        );
    }
}
