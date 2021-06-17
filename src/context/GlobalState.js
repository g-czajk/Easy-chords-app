import React, { useState } from "react";
import Context from "./Context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const GlobalState = (props) => {
    const [data, setData] = useState([]);
    const [basicChordsData, setBasicChordsData] = useState([]);
    const [lessonsData, setLessonsData] = useState([]);
    const [storageData, setStorageData] = useState([]);
    const [storageKeys, setStorageKeys] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    //all chords data

    const getData = async (key) => {
        setIsLoading(true);
        await fetch(`https://easy-chords.vercel.app/api/chords?key=${key}`)
            .then((response) => response.json())
            .then((data) => {
                setData(data.chord);
            })
            .catch((err) => console.log(err));
        setIsLoading(false);
    };

    // basic chords data

    const getBasicChordsData = async () => {
        await fetch(`https://easy-chords.vercel.app/api/basic`)
            .then((response) => response.json())
            .then((data) => {
                setBasicChordsData(data.chord);
            })
            .catch((err) => console.log(err));
    };

    // API lessons data

    const getLessonsData = async () => {
        setIsLoading(true);
        await fetch("https://easy-chords.vercel.app/api/lessons")
            .then((response) => response.json())
            .then((data) => setLessonsData(data.levels))
            .catch((err) => console.log(err));
        setIsLoading(false);
    };

    // storage data

    const getAllStorageKeys = async () => {
        let keys = [];
        try {
            keys = await AsyncStorage.getAllKeys();
        } catch (e) {
            console.log(e);
        }
        return keys;
    };

    const setAllStorageKeys = async () => {
        await getAllStorageKeys().then((keys) => setStorageKeys(keys));
    };

    const getMultipleStorageItems = async () => {
        let values;
        try {
            values = await AsyncStorage.multiGet(await getAllStorageKeys());
        } catch (e) {
            console.log(e);
        }
        return values;
    };

    const getStorageData = async () => {
        setIsLoading(true);
        await getMultipleStorageItems().then((data) => {
            const storageValues = data.map((item) => item[1]);
            const storageValuesJSON = storageValues.length
                ? storageValues.map((item) => JSON.parse(item))
                : [];
            setStorageData(storageValuesJSON);
        });
        setIsLoading(false);
    };

    return (
        <Context.Provider
            value={{
                data,
                basicChordsData,
                lessonsData,
                storageData,
                storageKeys,
                isLoading,
                getData,
                getBasicChordsData,
                getLessonsData,
                getStorageData,
                setAllStorageKeys,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default GlobalState;
