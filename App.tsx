

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import Home from './src/components/Home';
import Adduser from './src/components/Adduser';
import Displayusers from './src/components/Displayusers';
const Stack = createNativeStackNavigator();
import { styles } from '../sampleproject/src/utils/Styles';


function App() {



  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Adduser" component={Adduser} options={{ headerTitleAlign: 'center', headerStyle: { backgroundColor: '#fff' } }} />
        <Stack.Screen name="Displayusers" component={Displayusers} options={({ navigation }) => ({
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#fff' },
          headerRight: () => (
            <Icon
              style={styles.icon}
              name="user-plus"
              type={IconType.FontAwesome5}
              size={30}
              color="black"
              onPress={() => { navigation.navigate('Adduser') }}
            />
          ),
        })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
