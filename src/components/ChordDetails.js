import React, { useEffect, useContext } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import styles, { windowWidth, windowHeight, red } from "../styles/styles";
import NewChord from "./NewChord";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Context from "../context/Context";

const ChordDetails = (props) => {
    // chord name styling and rendering

    const nameArray = props.route.params.enharmonicChordName.split(",");

    const styleItem = (index) => {
        if (index == 0) {
            return styles.chordDetailsText0;
        } else if (index == 1) {
            return styles.chordDetailsText1;
        } else if (index == 2 || index == 3) {
            return styles.chordDetailsText2;
        }
    };

    const renderItem = ({ item, index }) => {
        if (item !== "") {
            return <Text style={styleItem(index)}>{item}</Text>;
        }
    };

    const ChordNameComponent = () => {
        return (
            <FlatList
                style={styles.chordDetailsList}
                data={nameArray}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                horizontal={true}
                contentContainerStyle={{
                    alignItems: "center",
                }}
            />
        );
    };

    // storage save/delete

    const { storageKeys, setAllStorageKeys } = useContext(Context);

    // useEffect(() => {
    //     console.log(storageKeys);
    // }, [storageKeys]);

    const saveData = async (data) => {
        try {
            const jsonValue = JSON.stringify(data);
            await AsyncStorage.setItem(data.enharmonicChordName, jsonValue);
            // console.log(`${jsonValue} stored as "${data.enharmonicChordName}"`);
        } catch (e) {
            console.log(e);
        }
    };

    const removeValue = async (item) => {
        try {
            await AsyncStorage.removeItem(`${item}`);
            // console.log(`${item} removed`);
        } catch (e) {
            console.log(e);
        }
    };

    const isFav = (item) => {
        if (storageKeys.includes(item)) {
            return true;
        } else return false;
    };

    const addOrRemoveFav = (data, item) => {
        if (!isFav(item)) {
            saveData(data);
        } else {
            removeValue(item);
        }
    };

    return (
        <View style={styles.chordDetails}>
            <ChordNameComponent />
            <NewChord
                style={{
                    width: windowWidth / 1.4,
                    height: windowHeight / 2.8,
                }}
                data={props.route.params}
            />
            <TouchableOpacity
                style={styles.toFavourites}
                onPress={() => {
                    addOrRemoveFav(
                        props.route.params,
                        props.route.params.enharmonicChordName
                    );
                    setAllStorageKeys();
                }}
            >
                <Ionicons
                    name={
                        isFav(props.route.params.enharmonicChordName)
                            ? "heart"
                            : "heart-outline"
                    }
                    size={32}
                    color={
                        isFav(props.route.params.enharmonicChordName)
                            ? red
                            : "#333"
                    }
                />

                {isFav(props.route.params.enharmonicChordName) ? (
                    <Text style={styles.toFavouritesText}>
                        added to favourites
                    </Text>
                ) : (
                    <Text style={styles.toFavouritesText}>
                        add to favourites
                    </Text>
                )}
            </TouchableOpacity>
        </View>
    );
};

export default ChordDetails;
