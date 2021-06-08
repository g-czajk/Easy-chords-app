import React from "react";
import { TouchableOpacity } from "react-native";
import styles, { windowWidth, windowHeight } from "../styles/styles";
import NewChord from "./NewChord";
import { useRoute } from "@react-navigation/native";

import ChordNameComponent from "./ChordNameComponent";

const ChordThumbnail = ({ data, navigation }) => {
    const route = useRoute();

    const destination =
        route.name === "Search for chords" ? "Search" : "Favourites";

    const handlePress = () => {
        navigation.navigate(destination, {
            screen: "Chord Details",
            params: data,
        });
    };

    return (
        <TouchableOpacity style={styles.chordThumbnail} onPress={handlePress}>
            <ChordNameComponent
                chordKey={data.key}
                chordSuffix={data.suffix}
                nameComponentStyles={[
                    styles.chordThumbnailChordName,
                    styles.chordThumbnailChordNameKey,
                    styles.chordThumbnailChordNameSuffix,
                ]}
            />
            <NewChord
                style={{
                    width: windowWidth / 4,
                    height: windowHeight / 8,
                }}
                data={data.positions[0]}
            />
        </TouchableOpacity>
    );
};

export default ChordThumbnail;
