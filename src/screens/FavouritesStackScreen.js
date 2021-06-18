import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FavouritesScreen from "../screens/FavouritesScreen";
import ChordDetails from "../components/ChordDetails";
import { background, font } from "../styles/styles";

const SearchStackScreen = () => {
    const SearchStack = createStackNavigator();

    return (
        <SearchStack.Navigator screenOptions={options}>
            <SearchStack.Screen
                name="Favourite chords"
                component={FavouritesScreen}
            />
            <SearchStack.Screen name="Chord Details" component={ChordDetails} />
        </SearchStack.Navigator>
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

export default SearchStackScreen;
