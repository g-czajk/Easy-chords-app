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
        flex: 0.32,
        color: green,
        transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
    },
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
    chordThumbnailList: { flexGrow: 0, flexShrink: 0 },
    chordThumbnailText0: {
        marginBottom: 4,
        fontFamily: fontBold,
        textAlign: "center",
        maxWidth: "120%",
    },
    chordThumbnailText1: {
        marginBottom: 4,
        fontFamily: fontBold,
        textAlign: "center",
        maxWidth: "120%",
        fontSize: 11,
        transform: [{ translateY: 4 }],
    },
    chordThumbnailText2: {
        marginBottom: 4,
        fontFamily: fontBold,
        textAlign: "center",
        fontSize: 11,
        maxWidth: "120%",
        transform: [{ translateY: -4 }],
    },
    chordDetails: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    chordDetailsText0: {
        marginRight: 2,
        marginBottom: 6,
        fontFamily: fontBold,
        fontSize: 30,
    },
    chordDetailsText1: {
        marginRight: 2,
        fontFamily: fontBold,
        fontSize: 20,
        transform: [{ translateY: 10 }],
    },
    chordDetailsText2: {
        fontFamily: fontBold,
        fontSize: 20,
        transform: [{ translateY: -8 }],
    },
    chordDetailsList: { flexGrow: 0, flexShrink: 0, marginBottom: 10 },
    toFavourites: {
        marginTop: 8,
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
});

export default styles;
