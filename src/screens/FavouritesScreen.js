import React, { useEffect, useContext } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import ChordList from "../components/ChordList";
import Context from "../context/Context";
import styles, { background } from "../styles/styles";

const FavouritesScreen = ({ navigation }) => {
    const { storageData, storageKeys, getStorageData, isLoading } =
        useContext(Context);

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
