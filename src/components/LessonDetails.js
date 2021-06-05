import React, { useEffect } from "react";
import { View, Text } from "react-native";

const LessonDetails = ({ route }) => {
    useEffect(() => {
        console.log(route.params.data);
    }, []);
    return (
        <View>
            <Text>Lesson Details</Text>
        </View>
    );
};

export default LessonDetails;
