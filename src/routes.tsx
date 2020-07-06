import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Appointments from './pages/Appointments';
import Login from './pages/Login';
import CreateUser from './pages/CreateUser';
import CreateAppointment from './pages/CreateAppointment';
import UpdateAppointment from './pages/UpdateAppointment';

const AppStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator 
                headerMode="none"  
                screenOptions={{
                    cardStyle: {
                      backgroundColor: '#F0F0F5'
                    }
                }}>
                <AppStack.Screen name="Home" component={Home}/>
                <AppStack.Screen name="Login" component={Login}/>
                <AppStack.Screen name="CreateUser" component={CreateUser}/>
                <AppStack.Screen name="CreateAppointment" component={CreateAppointment}/>
                <AppStack.Screen name="UpdateAppointment" component={UpdateAppointment}/>
                <AppStack.Screen name="Appointments" component={Appointments}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;