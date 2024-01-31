import { ScrollView } from "react-native-gesture-handler"

const ContactNavigator = ()  => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Contact'
                component={ContactScreen}
                options={{ title: 'Contact Us' }} />
        </Stack.Navigator>
    )
}

const ContactScreen = () => {
    return (
        <ScrollView>

        </ScrollView>
    )
}

export default ContactScreen;