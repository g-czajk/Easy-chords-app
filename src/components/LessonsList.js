import React from "react";
import { FlatList } from "react-native";
import styles from "../styles/styles";
import LessonThumbnail from "./LessonThumbnail";

const LessonsList = ({ route, navigation }) => {
    const renderItem = ({ index }) => (
        <LessonThumbnail
            data={route.params.data.lessons[index]}
            navigation={navigation}
        />
    );

    return (
        <FlatList
            style={styles.lessonsList}
            data={route.params.data.lessons}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.id}`}
        />
    );
};

export default LessonsList;
