import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LearnScreen from "./LearnScreen";
import LessonsList from "../components/LessonsList";
import LessonDetails from "../components/LessonDetails";

import { background, font } from "../styles/styles";

const LearnStackScreen = () => {
    const LearnStack = createStackNavigator();

    return (
        <LearnStack.Navigator screenOptions={options}>
            <LearnStack.Screen name="Levels" component={LearnScreen} />
            <LearnStack.Screen name="Lessons" component={LessonsList} />
            <LearnStack.Screen
                name="Lesson details"
                component={LessonDetails}
            />
        </LearnStack.Navigator>
    );
};

const options = {
    headerStyle: {
        backgroundColor: background,
    },
    headerTintColor: "#eee",
    headerTitleStyle: {
        fontFamily: font,
    },
};

export default LearnStackScreen;
