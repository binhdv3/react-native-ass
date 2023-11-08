import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ScreenHome from "./Screen/ScreenHome";
import ScreenManager from "./Screen/ScreenManager";
import ScreenProfile from "./Screen/ScreenProfile";
import ScreenAddNew from "./Screen/ScreenAddNew";
import ScreenEdit from "./Screen/ScreenEdit";

import {
    View,
    Button, 
} from "react-native";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name = 'Home'
                    component={ScreenHome}
                />
                <Stack.Screen
                    name = 'Profile'
                    component={ScreenProfile}
                />
                <Stack.Screen
                    name = 'Manager'
                    component={ScreenManager}
                />
                <Stack.Screen
                    name = 'AddorEdit'
                    component={ScreenAddNew}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
