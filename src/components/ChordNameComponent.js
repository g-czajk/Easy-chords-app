import React from "react";
import { View, Text } from "react-native";

const ChordNameComponent = ({ chordKey, chordSuffix, nameComponentStyles }) => {
    return (
        <View style={nameComponentStyles[0]}>
            <Text style={nameComponentStyles[1]}>{chordKey}</Text>
            <Text style={nameComponentStyles[2]}>{chordSuffix}</Text>
        </View>
    );
};

export default ChordNameComponent;
