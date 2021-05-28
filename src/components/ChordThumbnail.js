import React, { useEffect } from "react";
import { TouchableOpacity, Text, FlatList } from "react-native";
import styles, { windowWidth, windowHeight } from "../styles/styles";
import NewChord from "./NewChord";

const ChordThumbnail = ({ data, navigation }) => {
    const nameArray = data.enharmonicChordName.split(",");

    const styleItem = (index) => {
        if (index == 0) {
            return styles.chordThumbnailText0;
        } else if (index == 1) {
            return styles.chordThumbnailText1;
        } else if (index == 2 || index == 3) {
            return styles.chordThumbnailText2;
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
                style={styles.chordThumbnailList}
                data={nameArray}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                horizontal={true}
                contentContainerStyle={{
                    alignItems: "center",
                }}
            ></FlatList>
        );
    };

    const handlePress = () => {
        navigation.navigate("Search", {
            screen: "Chord Details",
            params: data,
        });
    };

    return (
        <TouchableOpacity style={styles.chordThumbnail} onPress={handlePress}>
            <ChordNameComponent />
            <NewChord
                style={{
                    width: windowWidth / 4,
                    height: windowHeight / 8,
                }}
                data={data}
            />
        </TouchableOpacity>
    );
};

export default ChordThumbnail;
