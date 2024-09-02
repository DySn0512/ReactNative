import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

// Import hình ảnh từ thư mục cục bộ
import profileImage from "../assets/DySn.jpg";

const Intro = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace("Login");
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image source={profileImage} style={styles.image} />
            <Text style={styles.textName}>Nguyễn Duy Sơn</Text>
            <Text style={styles.textName}>21110290</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    textName: {
        fontSize: 24,
    },
});

export default Intro;