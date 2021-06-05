import React, { useEffect, useContext } from "react";
import { View, ActivityIndicator } from "react-native";
import styles, { background } from "../styles/styles";
import Context from "../context/Context";

import LessonsCategoryList from "../components/LessonsCategoryList";

const LearnScreen = ({ navigation }) => {
    const { lessonsData, getLessonsData, isLoading } = useContext(Context);

    useEffect(() => {
        getLessonsData();
    }, []);

    return (
        <View style={styles.screen}>
            {!isLoading && (
                <LessonsCategoryList
                    navigation={navigation}
                    data={lessonsData}
                />
            )}
            {isLoading && (
                <ActivityIndicator
                    size="large"
                    color={background}
                    style={styles.spinner}
                />
            )}
        </View>
    );
};

export default LearnScreen;
