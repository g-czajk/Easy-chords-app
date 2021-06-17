import React, { useEffect, useContext } from "react";
import { View, Text, ActivityIndicator, BackHandler } from "react-native";
import ChordList from "../components/ChordList";
import Context from "../context/Context";
import styles, { background } from "../styles/styles";
import { useFocusEffect } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

const FavouritesScreen = ({ navigation }) => {
    const { storageData, storageKeys, getStorageData, isLoading } =
        useContext(Context);

    const route = useRoute();

    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                if ((route.name = "Favourite chords")) {
                    BackHandler.exitApp();
                    return true;
                } else {
                    return false;
                }
            };

            BackHandler.addEventListener("hardwareBackPress", onBackPress);

            return () =>
                BackHandler.removeEventListener(
                    "hardwareBackPress",
                    onBackPress
                );
        }, [route.name])
    );

    useEffect(() => {
        getStorageData();
    }, [storageKeys]);

    return (
        <View style={styles.screen}>
            {!isLoading && (
                <ChordList navigation={navigation} data={storageData} />
            )}
            {isLoading && (
                <ActivityIndicator
                    size="large"
                    color={background}
                    style={styles.spinner}
                />
            )}
            {!storageData.length && !isLoading && (
                <View style={styles.noFavs}>
                    <Text style={styles.noFavsText}>
                        No favourite chords yet
                    </Text>
                </View>
            )}
        </View>
    );
};

export default FavouritesScreen;
