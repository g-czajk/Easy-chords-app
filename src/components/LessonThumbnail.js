import React from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from "../styles/styles";

const LessonThumbnail = ({ data, navigation }) => {
    const chords = data.chords.join(", ");

    const handlePress = () => {
        navigation.navigate("Lesson details", {
            data,
        });
    };

    return (
        <TouchableOpacity style={styles.lessonThumbnail} onPress={handlePress}>
            <Text style={styles.lessonThumbnailName}>{data.title}</Text>
            <Text style={styles.lessonThumbnailChords}>({chords})</Text>
        </TouchableOpacity>
    );
};

export default LessonThumbnail;
