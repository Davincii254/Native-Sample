import Main from './screens/MainComponent';
import { AppRegistry } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';


export default function App() {
  AppRegistry.registerComponent('MyApp', () => App);

  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  )
}
