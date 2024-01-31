import { createStackNavigator } from "@react-navigation/stack";
import { ScrollView } from "react-native-gesture-handler";


const AboutNavigator = ()  => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name= "About"
                component={AboutScreen}
                options= {{title: "About"}}/>
        </Stack.Navigator>
    )
}

const AboutScreen = () => {
    return (
        <ScrollView>

        </ScrollView>
    )
}
export default AboutScreen;