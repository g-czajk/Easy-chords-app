import React from "react";

const Context = React.createContext({
    data: [],
    basicChordsData: [],
    lessonsData: [],
    storageData: [],
    storageKeys: [],
    isLoading: false,
    getData: async (key) => {},
    getBasicChordsData: async () => {},
    getLessonsData: async () => {},
    getStorageData: async () => {},
    setAllStorageKeys: async () => {},
});

export default Context;
