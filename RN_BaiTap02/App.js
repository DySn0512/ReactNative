
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Toast from "react-native-toast-message";



// Import các màn hình
import Intro from "./src/screens/Intro";
import Login from "./src/screens/Authenticator/Login";
import Register from "./src/screens/Authenticator/Register";
import Home from "./src/screens/Home/Home";
import ForgotPassword from "./src/screens/Authenticator/ForgotPassword";
import ResetPassword from "./src/screens/Authenticator/ResetPassword";

// Tạo Stack Navigator
const Stack = createNativeStackNavigator();

// Cấu hình chung cho các màn hình
const screenOptions = {
    headerShown: false, // Ẩn header cho tất cả các màn hình
};

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptions}>
                <Stack.Screen name="Intro" component={Intro} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="ResetPassword" component={ResetPassword} />
            </Stack.Navigator>
            <Toast />
        </NavigationContainer>
    );
};

export default App;
