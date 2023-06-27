
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/Home';
import SettingsScreen from './screens/Settings';

const Drawer = createDrawerNavigator();
export default function App() 
{
    return (<NavigationContainer>
          <Drawer.Navigator 
          initialRouteName="Home">
            <Drawer.Screen name="Home" 
            component={HomeScreen} />
            <Drawer.Screen name="Settings" 
            component={SettingsScreen} />
            </Drawer.Navigator>
            </NavigationContainer>);}