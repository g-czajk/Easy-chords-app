import React from "react";

const Context = React.createContext({
    data: [],
    getData: async (key, mod) => {},
});

export default Context;
