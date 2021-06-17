import React, { useEffect, useState, useContext } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ActivityIndicator,
    BackHandler,
} from "react-native";
import styles, { background } from "../styles/styles";
import ChordList from "../components/ChordList";
import Context from "../context/Context";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

const SearchScreen = ({ navigation }) => {
    const [selectedKey, setSelectedKey] = useState("C");
    const {
        data,
        basicChordsData,
        getData,
        getBasicChordsData,
        setAllStorageKeys,
        isLoading,
    } = useContext(Context);
    const [filteredData, setFilteredData] = useState(null);
    const [inputValue, setInputValue] = useState("");
    const [showBasic, setShowBasic] = useState(false);

    const route = useRoute();

    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                if ((route.name = "Search for chords")) {
                    BackHandler.exitApp();
                    return true
                } else {
                    return false;
                }
            };

            BackHandler.addEventListener("hardwareBackPress", onBackPress);

            return () =>
                BackHandler.removeEventListener(
                    "hardwareBackPress",
                    onBackPress
                );
        }, [route.name])
    );

    const handleFilter = (value) => {
        const filteredData = data.filter((chord) =>
            chord.suffix.toLowerCase().startsWith(value.toLowerCase())
        );
        setFilteredData(filteredData);
    };

    const handleClear = () => {
        setInputValue("");
    };

    useEffect(() => {
        getData(selectedKey);
        getBasicChordsData();
        setAllStorageKeys();
    }, [selectedKey]);

    useEffect(() => {
        setFilteredData(data);
    }, [data]);

    useEffect(() => {
        handleFilter(inputValue);
    }, [inputValue]);

    return (
        <View style={styles.screen}>
            {!showBasic && (
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
                        <Picker.Item label="C#" value="Csharp" />
                        <Picker.Item label="D" value="D" />
                        <Picker.Item label="Eb" value="Eb" />
                        <Picker.Item label="E" value="E" />
                        <Picker.Item label="F" value="F" />
                        <Picker.Item label="F#" value="Fsharp" />
                        <Picker.Item label="G" value="G" />
                        <Picker.Item label="Ab" value="Ab" />
                        <Picker.Item label="A" value="A" />
                        <Picker.Item label="Bb" value="Bb" />
                        <Picker.Item label="B" value="B" />
                    </Picker>
                    <TextInput
                        placeholder="filter (e.g. 'major')"
                        value={inputValue}
                        onChangeText={(text) => setInputValue(text)}
                        style={styles.input}
                    />
                    <TouchableOpacity
                        style={styles.clear}
                        onPress={handleClear}
                    >
                        <Ionicons
                            name="close-outline"
                            size={24}
                            color={inputValue !== "" ? "#444" : "#bbbbbb00"}
                        />
                    </TouchableOpacity>
                </View>
            )}
            {!showBasic && !isLoading && (
                <ChordList navigation={navigation} data={filteredData} />
            )}
            {showBasic && !isLoading && (
                <ChordList navigation={navigation} data={basicChordsData} />
            )}
            {!isLoading && (
                <TouchableOpacity
                    style={styles.chordsCategorySwitch}
                    onPress={() => {
                        setTimeout(() => {
                            setShowBasic((prev) => !prev);
                        }, 50);
                    }}
                >
                    <Text style={styles.chordsCategorySwitchText}>
                        {showBasic ? "all" : "basic"}
                    </Text>
                </TouchableOpacity>
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
