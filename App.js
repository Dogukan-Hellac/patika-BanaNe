import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';
import './firebaseConfig';

import Login from './screens/auth/Login';
import Sign from './screens/auth/Sign';
import Messages from './screens/messages/Messages';
import { getAuth } from "firebase/auth";
import colors from './styles/colors';
import Entypo from '@expo/vector-icons/Entypo';

const Stack = createNativeStackNavigator();

function App() {
  const [userSession, setUserSession] = React.useState()

  React.useEffect(() => {
    getAuth().onAuthStateChanged((user) => {
      setUserSession(!!user)
    })
  }, [])

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign" component={Sign} />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {
          !userSession ? (
            <Stack.Screen name="AuthStack" component={AuthStack} />
          ) : (
            <Stack.Screen 
            name="Messages" 
            component={Messages} 
            options={{ 
              headerShown: true,
              title:'Dertler',
              headerTintColor: colors.darkgreen,
              headerTitleAlign:'center',
              headerRight: () => <Entypo name="log-out" size={25} color={colors.darkgreen} onPress={()=>getAuth().signOut()}/>
            }} 
            
            />
          )
        }
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}

export default App;
