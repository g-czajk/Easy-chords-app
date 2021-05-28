import React, { useContext, useEffect } from "react";
import { FlatList } from "react-native";

import styles from "../styles/styles";
import ChordThumbnail from "./ChordThumbnail";

const ChordList = ({ data, navigation }) => {
    const renderItem = ({ item, index }) => (
        <ChordThumbnail
            title={item.title}
            data={data[index]}
            navigation={navigation}
        />
    );

    return (
        <FlatList
            style={styles.chordList}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.chordName}
            horizontal={false}
            numColumns={3}
            contentContainerStyle={{ alignItems: "center" }}
        />
    );
};

export default ChordList;
