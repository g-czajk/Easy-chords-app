import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "../styles/styles";

const LessonsCategory = ({ data, navigation }) => {
    const handlePress = () => {
        navigation.navigate("Lessons", {
            data,
        });
    };

    return (
        <TouchableOpacity style={styles.lessonsCategory} onPress={handlePress}>
            <Text style={styles.lessonsCategoryText}>{data.title}</Text>
        </TouchableOpacity>
    );
};

export default LessonsCategory;
