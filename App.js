import Main from './screens/MainComponent';
import {NavigationContainer} from '@react-navigation/native';


export default function App() {
  AppRegistry.registerComponent('MyApp', () => App);

  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  )
}
