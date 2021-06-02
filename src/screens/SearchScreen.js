import React, { useEffect, useState, useContext } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import styles, { background } from "../styles/styles";
import ChordList from "../components/ChordList";
import Context from "../context/Context";

import { Picker } from "@react-native-picker/picker";

const SearchScreen = ({ navigation }) => {
    const [selectedKey, setSelectedKey] = useState("C");
    const [selectedMod, setSelectedMod] = useState("maj");

    const { data, getData, isLoading } = useContext(Context);

    useEffect(() => {
        getData(selectedKey, selectedMod);
    }, [selectedKey, selectedMod]);

    // useEffect(() => {
    //     console.log(isLoading);
    // }, [isLoading]);

    return (
        <View style={styles.screen}>
            <View style={styles.pickerContainer}>
                <Text style={styles.pickerLabel}>key:</Text>
                <Picker
                    selectedValue={selectedKey}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedKey(itemValue)
                    }
                    style={styles.picker}
                >
                    <Picker.Item label="C" value="C" />
                    <Picker.Item label="C#" value="Db" />
                    <Picker.Item label="D" value="D" />
                    <Picker.Item label="Eb" value="Eb" />
                    <Picker.Item label="E" value="E" />
                    <Picker.Item label="F" value="F" />
                    <Picker.Item label="F#" value="Gb" />
                    <Picker.Item label="G" value="G" />
                    <Picker.Item label="Ab" value="Ab" />
                    <Picker.Item label="A" value="A" />
                    <Picker.Item label="Bb" value="Bb" />
                    <Picker.Item label="B" value="B" />
                </Picker>
                <Text style={styles.pickerLabel}>mod:</Text>
                <Picker
                    selectedValue={selectedMod}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedMod(itemValue)
                    }
                    style={styles.picker}
                >
                    <Picker.Item label="Major" value="maj" />
                    <Picker.Item label="minor" value="m" />
                    <Picker.Item label="sus" value="sus" />
                    <Picker.Item label="dim" value="dim" />
                    <Picker.Item label="aug" value="aug" />
                </Picker>
            </View>
            {!isLoading && (
                <ChordList
                    selectedKey={selectedKey}
                    selectedMod={selectedMod}
                    navigation={navigation}
                    data={data}
                />
            )}
            {isLoading && (
                <ActivityIndicator
                    size="large"
                    color={background}
                    style={styles.spinner}
                />
            )}
        </View>
    );
};

export default SearchScreen;
