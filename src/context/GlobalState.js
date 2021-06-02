import React, { useState } from "react";
import Context from "./Context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const GlobalState = (props) => {
    const [data, setData] = useState([]);
    const [storageData, setStorageData] = useState([]);
    const [storageKeys, setStorageKeys] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    //API data

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

    //storage data

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
                storageData,
                storageKeys,
                getData,
                getStorageData,
                setAllStorageKeys,
                isLoading,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default GlobalState;
