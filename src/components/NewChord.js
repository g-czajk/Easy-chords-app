import React, { useEffect } from "react";
import Chord from "@tombatossals/react-chords/lib/Chord";

import ReactDOMServer from "react-dom/server";
import Image from "react-native-remote-svg";

const NewChord = ({ data, style }) => {
    const frets = data.strings.split(" ").map((item) => {
        if (item === "X") return -1;
        else return Number(item);
    });

    const fingers = data.fingering.split(" ").map((item) => {
        if (item === "X") return 0;
        else return Number(item);
    });

    const barres = undefined;

    // useEffect(() => {
    //     console.log(fingers);
    // }, []);

    const chord = {
        frets,
        fingers,
        barres: [],
        capo: false,
        // baseFret: 3,
    };
    const instrument = {
        strings: 6,
        fretsOnChord: 4,
        name: "Guitar",
        keys: [],
        tunings: {
            standard: ["E", "A", "D", "G", "B", "E"],
        },
    };
    const lite = false; // defaults to false if omitted

    const xml = ReactDOMServer.renderToStaticMarkup(
        <Chord chord={chord} instrument={instrument} lite={lite} />
    );

    return (
        <Image
            source={{
                uri: `data:image/svg+xml;utf8,${xml}`,
            }}
            style={style}
        />
    );
};

export default NewChord;
