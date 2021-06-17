import React, { useEffect, useContext } from "react";
import { View, ActivityIndicator, BackHandler } from "react-native";
import styles, { background } from "../styles/styles";
import Context from "../context/Context";
import LessonsCategoryList from "../components/LessonsCategoryList";
import { useFocusEffect } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

const LearnScreen = ({ navigation }) => {
    const { lessonsData, getLessonsData, isLoading } = useContext(Context);

    const route = useRoute();

    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                if ((route.name = "Levels")) {
                    BackHandler.exitApp();
                    return true;
                } else {
                    return false;
                }
            };

            BackHandler.addEventListener("hardwareBackPress", onBackPress);

            return () =>
                BackHandler.removeEventListener(
                    "hardwareBackPress",
                    onBackPress
                );
        }, [route.name])
    );

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
