
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Alert, TouchableOpacity } from "react-native";
import { resetPassword } from "../../api/AuthAPIService";
import CommonStyles from "../../assets/CommonStyles";

const ResetPassword = ({ navigation, route }) => {
    const [newPassword, setNewPassword] = useState("");

    // Lấy tham số từ route
    const { email } = route.params;

    const handleResetPassword = async () => {
        try {
            const data = await resetPassword(email, newPassword);

            if (data.success) {
                Alert.alert("Success", data.message);
                navigation.navigate("Login");
            } else {
                Alert.alert("Error", data.message);
            }
        } catch (error) {
            Alert.alert("Error", "An error occurred. Please try again.");
        }
    };

    return (
        <View style={CommonStyles.container}>
            <Text style={CommonStyles.title}>Reset Password Page</Text>

            <TextInput
                style={CommonStyles.input}
                placeholder="New Password"
                secureTextEntry
                value={newPassword}
                onChangeText={setNewPassword}
            />

            <TouchableOpacity style={CommonStyles.button} onPress={handleResetPassword}>
                <Text style={CommonStyles.buttonText}>Reset Password</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ResetPassword;
