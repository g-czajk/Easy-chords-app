import React from "react";

const Context = React.createContext({
    data: [],
    lessonsData: [],
    storageData: [],
    storageKeys: [],
    isLoading: false,
    getData: async (key, mod) => {},
    getLessonsData: async () => {},
    getStorageData: async () => {},
    setAllStorageKeys: async () => {},
});

export default Context;
