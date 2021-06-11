import { StyleSheet, StatusBar, Platform, Dimensions } from "react-native";

export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;
export const background = "#14213d";
export const font = "nunito-regular";
export const fontBold = "nunito-bold";
export const green = "#248232";
export const red = "#d00000";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    navigation: {
        height: 58,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: background,
        borderTopColor: "#bbb",
        borderTopWidth: 2,
    },
    screen: {
        flex: 1,
    },
    pickerContainer: {
        height: 60,
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: -20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
        transform: [{ translateY: -2 }],
        borderTopWidth: 2,
    },
    pickerLabel: {
        textAlignVertical: "center",
        fontFamily: fontBold,
        fontSize: 18,
        marginRight: 5,
    },
    picker: {
        width: "25%",
        color: green,
        transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
    },
    input: {
        width: "30%",
        maxWidth: "30%",
        marginLeft: 6,
        paddingHorizontal: 2,
        fontFamily: font,
    },
    clear: { alignItems: "center", justifyContent: "center", marginLeft: 10 },
    chordList: {
        flex: 1,
        marginTop: 20,
        paddingRight: 20,
        paddingLeft: 20,
    },
    chordThumbnail: {
        width: windowWidth / 4,
        height: windowHeight / 6,
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    chordThumbnailChordName: {
        flexDirection: "row",
        flexGrow: 0,
        flexShrink: 0,
    },
    chordThumbnailChordNameKey: {
        marginBottom: 4,
        fontFamily: fontBold,
        textAlign: "center",
        maxWidth: "120%",
    },
    chordThumbnailChordNameSuffix: {
        marginBottom: 4,
        fontFamily: fontBold,
        textAlign: "center",
        maxWidth: "120%",
        fontSize: 11,
        transform: [{ translateY: 6 }],
    },
    chordDetails: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    chordDetailsChordNameKey: {
        marginRight: 2,
        marginBottom: 6,
        fontFamily: fontBold,
        fontSize: 36,
    },
    chordDetailsChordNameSuffix: {
        marginRight: 2,
        fontFamily: fontBold,
        fontSize: 22,
        transform: [{ translateY: 18 }],
    },
    chordDetailsChordName: { flexDirection: "row", flexGrow: 0, flexShrink: 0 },
    slideChordDetails: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    slideLessonDetails: {
        justifyContent: "center",
        alignItems: "center",
    },
    buttonWrapper: {
        backgroundColor: "transparent",
        flexDirection: "row",
        position: "absolute",
        top: 0,
        left: 0,
        flex: 1,
        paddingHorizontal: 5,
        paddingVertical: 10,
        justifyContent: "space-between",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 50,
        color: "#999",
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    toFavourites: {
        marginTop: 16,
        alignItems: "center",
    },
    toFavouritesText: { fontFamily: font, fontSize: 16 },
    spinner: {
        position: "relative",
        top: "40%",
        alignSelf: "center",
    },
    noFavs: { position: "absolute", top: "40%", alignSelf: "center" },
    noFavsText: { fontFamily: fontBold, fontSize: 20 },
    lessonsCategoryList: {
        flex: 1,
        marginTop: 20,
        paddingRight: 20,
        paddingLeft: 20,
    },
    lessonsCategory: {
        borderColor: "#ccc",
        borderBottomWidth: 1,
    },
    lessonsCategoryText: {
        paddingTop: 10,
        paddingBottom: 4,
        paddingLeft: 10,
        fontFamily: font,
        fontSize: 22,
        color: background,
    },
    lessonsList: {
        flex: 1,
        marginTop: 20,
        paddingRight: 20,
        paddingLeft: 20,
    },
    lessonThumbnail: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderColor: "#ccc",
        borderBottomWidth: 1,
    },
    lessonThumbnailName: {
        paddingTop: 10,
        paddingBottom: 4,
        paddingLeft: 10,
        fontFamily: font,
        fontSize: 22,
        color: background,
    },
    lessonThumbnailChords: {
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 4,
        fontFamily: font,
        fontSize: 22,
        color: "#999",
    },
    lessonDetails: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
    },
    lessonDetailsChordName: {
        flexDirection: "row",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "80%",
    },
    lessonDetailsChordNameKey: {
        fontFamily: fontBold,
        textAlign: "center",
    },
    lessonDetailsChordNameSuffix: {
        fontFamily: fontBold,
        textAlign: "center",
        fontSize: 11,
        transform: [{ translateY: 6 }],
    },
    lessonDetailsChordNameLarge: {
        flexDirection: "row",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "80%",
        marginBottom: 5,
    },
    lessonDetailsChordNameKeyLarge: {
        fontFamily: fontBold,
        textAlign: "center",
        fontSize: 22,
        marginRight: 1,
        color: green,
    },
    lessonDetailsChordNameSuffixLarge: {
        fontFamily: fontBold,
        textAlign: "center",
        fontSize: 15,
        transform: [{ translateY: 10 }],
        color: green,
    },
    lessonDetailsChordNameNext: {
        flexDirection: "row",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "80%",
    },
    lessonDetailsChordNameKeyNext: {
        fontFamily: fontBold,
        textAlign: "center",
        color: green,
    },
    lessonDetailsChordNameSuffixNext: {
        fontFamily: fontBold,
        textAlign: "center",
        fontSize: 11,
        transform: [{ translateY: 6 }],
        color: green,
    },
    lessonDetailsLessonTitle: {
        flex: 0.1,
        fontFamily: font,
        fontSize: 32,
        textAlignVertical: "center",
    },
    progressionContainer: {
        flex: 0.1,
        alignItems: "center",
        justifyContent: "center",
    },
    nowPlayContainer: {
        flex: 0.5,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    nextChordContainer: {
        flex: 0.3,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    progressionText: {
        marginBottom: 3,
        fontFamily: font,
        fontSize: 18,
        textAlign: "center",
    },
    progressionChordList: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 2,
    },
    progressionIconContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    nowPlayText: {
        marginTop: 25,
        marginBottom: 5,
        fontFamily: fontBold,
        fontSize: 18,
    },
    nextChordWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
    },
    nextChordText: {
        marginRight: 3,
        fontFamily: fontBold,
    },
});

export default styles;
