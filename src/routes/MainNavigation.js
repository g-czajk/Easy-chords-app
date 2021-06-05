import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import SearchStackScreen from "../screens/SearchStackScreen";
import FavouritesStackScreen from "../screens/FavouritesStackScreen";
import LearnStackScreen from "../screens/LearnStackScreen";
import styles, { font } from "../styles/styles";

const MainNavigation = () => {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === "Search") {
                            iconName = focused ? "search" : "search-outline";
                        } else if (route.name === "Favourites") {
                            iconName = focused ? "heart" : "heart-outline";
                        } else if (route.name === "Learn") {
                            iconName = focused ? "book" : "book-outline";
                        }

                        return (
                            <Ionicons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    },
                })}
                tabBarOptions={{
                    activeTintColor: "#eee",
                    inactiveTintColor: "#bbb",
                    labelStyle: {
                        fontSize: 13,
                        fontFamily: font,
                    },
                    style: styles.navigation,
                }}
            >
                <Tab.Screen name="Search" component={SearchStackScreen} />
                <Tab.Screen
                    name="Favourites"
                    component={FavouritesStackScreen}
                />
                <Tab.Screen name="Learn" component={LearnStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigation;
