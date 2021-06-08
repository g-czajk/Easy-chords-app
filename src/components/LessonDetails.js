import React, { useEffect } from "react";
import { View, Text } from "react-native";

import styles, { background } from "../styles/styles";
import ChordNameComponent from "./ChordNameComponent";

import { Ionicons } from "@expo/vector-icons";

const LessonDetails = ({ route }) => {
    const data = route.params.data;
    const progressionChordNames = data.progression.map((item, index) => {
        return (
            <View key={index} style={styles.progressionChordList}>
                <ChordNameComponent
                    chordKey={item.fullChordName[0]}
                    chordSuffix={item.fullChordName[1]}
                    nameComponentStyles={[
                        styles.lessonDetailsChordName,
                        styles.lessonDetailsChordNameKey,
                        styles.lessonDetailsChordNameSuffix,
                    ]}
                />
                {index !== data.progression.length - 1 && (
                    <View style={styles.progressionIconContainer}>
                        <Ionicons
                            name="chevron-forward-outline"
                            size={16}
                            color={background}
                        />
                    </View>
                )}
            </View>
        );
    });

    useEffect(() => {
        console.log(data);
    }, []);

    return (
        <View style={styles.lessonDetails}>
            <Text style={styles.lessonDetailsLessonTitle}>{data.title}</Text>
            <View style={styles.progressionContainer}>
                <Text style={styles.progressionText}>progression:</Text>
                <View style={styles.progressionChordList}>
                    {progressionChordNames}
                </View>
            </View>
            <View style={styles.nowPlayingContainer}>
                <Text>Now playing:</Text>
            </View>
            <View style={styles.nextContainer}>
                <Text>Next: </Text>
            </View>
        </View>
    );
};

export default LessonDetails;
