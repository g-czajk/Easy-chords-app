import React from "react";
import { FlatList } from "react-native";

import styles from "../styles/styles";
import ChordThumbnail from "./ChordThumbnail";

const ChordList = ({ data, navigation }) => {
    const renderItem = ({ index }) => (
        <ChordThumbnail data={data[index]} navigation={navigation} />
    );

    return (
        <FlatList
            style={styles.chordList}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.key},${item.suffix}`}
            horizontal={false}
            numColumns={3}
            contentContainerStyle={{ alignItems: "center" }}
            maxToRenderPerBatch={8}
            initialNumToRender={8}
        />
    );
};

export default ChordList;
