import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import styles, { windowWidth, windowHeight, green } from "../styles/styles";
import NewChord from "./NewChord";
import { Ionicons } from "@expo/vector-icons";

const ChordDetails = (props) => {
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
            ></FlatList>
        );
    };

    useEffect(() => {
        console.log(nameArray);
    }, []);

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
            <TouchableOpacity style={styles.toLearn}>
                <Ionicons
                    name={true ? "book-outline" : "book"}
                    size={32}
                    color={true ? "#333" : green}
                />
                <Text style={styles.toLearnText}>To learn</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ChordDetails;
