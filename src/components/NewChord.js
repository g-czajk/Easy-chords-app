import React, { useEffect } from "react";
import Chord from "@tombatossals/react-chords/lib/Chord";

import ReactDOMServer from "react-dom/server";

import { SvgXml } from "react-native-svg";

const NewChord = ({ data, style }) => {
    // useEffect(() => {
    //     console.log(xml);
    // }, []);

    const chord = data;
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

    return <SvgXml xml={xml} width={style.width} height={style.height} />;
};

export default NewChord;
