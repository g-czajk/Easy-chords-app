import React, { useEffect, useState, useRef } from "react";
import { View, Text, Button } from "react-native";
import styles, {
    background,
    windowWidth,
    windowHeight,
} from "../styles/styles";
import ChordNameComponent from "./ChordNameComponent";
import NewChord from "./NewChord";
import { Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-swiper";
import { Audio } from "expo-av";
import { useIsFocused } from "@react-navigation/native";

const LessonDetails = ({ route }) => {
    const data = route.params.data;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [recording, setRecording] = useState(undefined);
    const swiperLarge = useRef(null);
    const swiperSmall = useRef(null);
    const isFocused = useIsFocused();

    const updateCurrentIndex = (index) => {
        setCurrentIndex(index);
    };

    const progressionChordNames = data.progression.map((item, index) => {
        return (
            <View key={index} style={styles.progressionChordList}>
                <ChordNameComponent
                    chordKey={item.fullChordName[0]}
                    chordSuffix={item.fullChordName[1]}
                    nameComponentStyles={[
                        styles.lessonDetailsChordName,
                        styles.lessonDetailsChordNameKey,
                        styles.lessonDetailsChordNameSuffix,
                    ]}
                />
                {index !== data.progression.length - 1 && (
                    <View style={styles.progressionIconContainer}>
                        <Ionicons
                            name="chevron-forward-outline"
                            size={16}
                            color={background}
                        />
                    </View>
                )}
            </View>
        );
    });

    const statusCallback = async () => {
        await recording
            .getStatusAsync()
            .then((status) => console.log(status.metering));
    };

    const startRecording = async () => {
        try {
            console.log("Requesting permissions..");
            await Audio.requestPermissionsAsync();
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: true,
                playsInSilentModeIOS: true,
            });
            console.log("Starting recording..");
            const recording = new Audio.Recording();
            await recording.prepareToRecordAsync(
                Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY
            );
            // recording.setOnRecordingStatusUpdate(statusCallback);
            // recording.setProgressUpdateInterval(2000);
            await recording.startAsync();
            setRecording(recording);
            console.log("Recording started");
        } catch (err) {
            console.error("Failed to start recording", err);
        }
    };

    const stopRecording = async () => {
        console.log("Stopping recording..");
        setRecording(undefined);
        await recording.stopAndUnloadAsync();
        const uri = recording.getURI();
        console.log("Recording stopped and stored at", uri);
    };

    useEffect(() => {
        if (!recording && isFocused) startRecording();
        else if (isFocused)
            return () => {
                stopRecording();
            };
    }, [recording, isFocused]);

    let interval;

    useEffect(() => {
        if (recording) {
            interval = setInterval(() => {
                statusCallback();
            }, 200);
        }
        return () => {
            clearInterval(interval);
        };
    }, [recording, isFocused]);

    return (
        <View style={styles.lessonDetails}>
            <Text style={styles.lessonDetailsLessonTitle}>{data.title}</Text>
            <Button
                title="click"
                onPress={() => {
                    stopRecording();
                    // swiperLarge.current.scrollBy(1);
                }}
            />
            <View style={styles.progressionContainer}>
                <Text style={styles.progressionText}>progression:</Text>
                <View style={styles.progressionChordList}>
                    {progressionChordNames}
                </View>
            </View>
            <View style={styles.nowPlayContainer}>
                <Text style={styles.nowPlayText}>Now play:</Text>
                <ChordNameComponent
                    chordKey={data.progression[currentIndex].fullChordName[0]}
                    chordSuffix={
                        data.progression[currentIndex].fullChordName[1]
                    }
                    nameComponentStyles={[
                        styles.lessonDetailsChordNameLarge,
                        styles.lessonDetailsChordNameKeyLarge,
                        styles.lessonDetailsChordNameSuffixLarge,
                    ]}
                />
                <View style={{ height: "100%" }}>
                    <Swiper
                        ref={swiperLarge}
                        containerStyle={{ flex: 0.7 }}
                        activeDotColor={background}
                        dotStyle={{ display: "none" }}
                        activeDotStyle={{ display: "none" }}
                        onIndexChanged={(index) => {
                            updateCurrentIndex(index);
                            swiperSmall.current.scrollBy(1);
                        }}
                        scrollEnabled={false}
                    >
                        {data.progression.map((item, index) => (
                            <View
                                style={styles.slideLessonDetails}
                                key={item.scheme.frets.join(",")}
                            >
                                <NewChord
                                    style={{
                                        width: windowWidth / 1.6,
                                        height: windowHeight / 3.2,
                                    }}
                                    data={data.progression[index].scheme}
                                />
                            </View>
                        ))}
                    </Swiper>
                </View>
            </View>
            <View style={styles.nextChordContainer}>
                <View style={styles.nextChordWrapper}>
                    <Text style={styles.nextChordText}>Next:</Text>
                    <ChordNameComponent
                        chordKey={
                            data.progression[
                                currentIndex !== data.progression.length - 1
                                    ? currentIndex + 1
                                    : 0
                            ].fullChordName[0]
                        }
                        chordSuffix={
                            data.progression[
                                currentIndex !== data.progression.length - 1
                                    ? currentIndex + 1
                                    : 0
                            ].fullChordName[1]
                        }
                        nameComponentStyles={[
                            styles.lessonDetailsChordNameNext,
                            styles.lessonDetailsChordNameKeyNext,
                            styles.lessonDetailsChordNameSuffixNext,
                        ]}
                    />
                </View>
                <View style={{ height: "100%" }}>
                    <Swiper
                        ref={swiperSmall}
                        index={1}
                        containerStyle={{ flex: 0.7 }}
                        activeDotColor={background}
                        dotStyle={{ display: "none" }}
                        activeDotStyle={{ display: "none" }}
                        scrollEnabled={false}
                    >
                        {data.progression.map((item, index) => (
                            <View
                                style={styles.slideChordDetails}
                                key={item.scheme.frets.join(",")}
                            >
                                <NewChord
                                    style={{
                                        width: windowWidth / 3.5,
                                        height: windowHeight / 7,
                                    }}
                                    data={data.progression[index].scheme}
                                />
                            </View>
                        ))}
                    </Swiper>
                </View>
            </View>
        </View>
    );
};

export default LessonDetails;
