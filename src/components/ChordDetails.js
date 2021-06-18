import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles, {
    windowWidth,
    windowHeight,
    red,
    background,
} from "../styles/styles";
import NewChord from "./NewChord";
import ChordNameComponent from "./ChordNameComponent";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Context from "../context/Context";

import Swiper from "react-native-swiper";

const ChordDetails = (props) => {
    const { storageKeys, setAllStorageKeys } = useContext(Context);

    const saveData = async (data) => {
        try {
            const jsonValue = JSON.stringify(data);
            await AsyncStorage.setItem(`${data.key}${data.suffix}`, jsonValue);
        } catch (e) {
            console.log(e);
        }
    };

    const removeValue = async (item) => {
        try {
            await AsyncStorage.removeItem(`${item}`);
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
            <ChordNameComponent
                chordKey={props.route.params.key}
                chordSuffix={props.route.params.suffix}
                nameComponentStyles={[
                    styles.chordDetailsChordName,
                    styles.chordDetailsChordNameKey,
                    styles.chordDetailsChordNameSuffix,
                ]}
            />
            <Swiper
                containerStyle={{ flex: 0.68 }}
                showsButtons={true}
                activeDotColor={background}
                nextButton={<Text style={styles.buttonText}>›</Text>}
                prevButton={<Text style={styles.buttonText}>‹</Text>}
                buttonWrapperStyle={styles.buttonWrapper}
            >
                {props.route.params.positions.map((item, index) => (
                    <View
                        style={styles.slideChordDetails}
                        key={item.frets.join(",")}
                    >
                        <NewChord
                            style={{
                                width: windowWidth / 1.4,
                                height: windowHeight / 2.8,
                            }}
                            data={props.route.params.positions[index]}
                        />
                    </View>
                ))}
            </Swiper>

            <TouchableOpacity
                style={styles.toFavourites}
                onPress={() => {
                    addOrRemoveFav(
                        props.route.params,
                        `${props.route.params.key}${props.route.params.suffix}`
                    );
                    setAllStorageKeys();
                }}
            >
                <Ionicons
                    name={
                        isFav(
                            `${props.route.params.key}${props.route.params.suffix}`
                        )
                            ? "heart"
                            : "heart-outline"
                    }
                    size={32}
                    color={
                        isFav(
                            `${props.route.params.key}${props.route.params.suffix}`
                        )
                            ? red
                            : "#333"
                    }
                />

                {isFav(
                    `${props.route.params.key}${props.route.params.suffix}`
                ) ? (
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
