import React from "react";
import { FlatList } from "react-native";
import styles from "../styles/styles";
import LessonsCategory from "./LessonsCategory";

const LessonsCategoryList = ({ data, navigation }) => {
    const renderItem = ({ index }) => (
        <LessonsCategory data={data[index]} navigation={navigation} />
    );

    return (
        <FlatList
            style={styles.lessonsCategoryList}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.id}`}
        />
    );
};

export default LessonsCategoryList;
