import React, { useState } from "react";
import Context from "./Context";

const GlobalState = (props) => {
    const [data, setData] = useState([]);

    const getData = async (key, mod) => {
        await fetch(
            `https://api.uberchord.com/v1/chords?nameLike=${key}${mod}
            }`
        )
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((err) => console.log(err));
    };

    return (
        <Context.Provider
            value={{
                data,
                getData,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default GlobalState;
