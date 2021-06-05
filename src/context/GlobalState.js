import React, { useState } from "react";
import Context from "./Context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const GlobalState = (props) => {
    const [data, setData] = useState([]);
    const [lessonsData, setLessonsData] = useState([]);
    const [storageData, setStorageData] = useState([]);
    const [storageKeys, setStorageKeys] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    //API chords data

    const getData = async (key, mod) => {
        setIsLoading(true);
        await fetch(
            `https://api.uberchord.com/v1/chords?nameLike=${key}${mod}
            }`
        )
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((err) => console.log(err));
        setIsLoading(false);
    };

    // API lessons data

    const getLessonsData = async () => {
        setIsLoading(true);
        await fetch("http://192.168.0.15:3000/levels")
            .then((response) => response.json())
            .then((data) => setLessonsData(data))
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
                lessonsData,
                storageData,
                storageKeys,
                isLoading,
                getData,
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
