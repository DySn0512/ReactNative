import { StyleSheet } from "react-native";

const CommonStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 32,
        color: "#006400",
        marginBottom: 20,
    },
    input: {
        width: "100%",
        height: 40,
        borderColor: "#ddd",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    button: {
        width: "50%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
        backgroundColor: "#b2fab4", 
        padding: 10, 
        borderRadius: 8, 
    },
    buttonText: {
        color: "#006400",
        fontSize: 16,
    },

});

export default CommonStyles;