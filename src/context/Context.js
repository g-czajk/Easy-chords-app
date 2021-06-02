import React from "react";

const Context = React.createContext({
    data: [],
    storageData: [],
    storageKeys: [],
    getData: async (key, mod) => {},
    getStorageData: async () => {},
    setAllStorageKeys: async () => {},
    isLoading: false,
});

export default Context;
