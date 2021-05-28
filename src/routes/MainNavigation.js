import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import SearchStackScreen from "../screens/SearchStackScreen";
import ToLearnStackScreen from "../screens/ToLearnStackScreen";
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
                        } else if (route.name === "To learn") {
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
                <Tab.Screen name="To learn" component={ToLearnStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigation;
