import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

import Principal from '../Principal';
import Perfil from '../Perfil';
import Pedidos from '../Pedidos'
import Busca from '../Busca';


const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Inicio') {
          iconName = 'home';
        } else if (route.name === 'Busca') {
          iconName = 'search';
        }else if (route.name === 'Pedidos') {
          iconName = 'list';      
        
        }else if (route.name === 'Perfil') {
          iconName = 'user';      
        }

        // You can return any component that you like here!
        return <Feather name={iconName} size={size} color={color} />;
      },

    })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Inicio" component={Principal} />
      <Tab.Screen name="Busca" component={Busca} />      
      <Tab.Screen name="Pedidos" component={Pedidos} />
      <Tab.Screen name="Perfil" component={Perfil} />
      
    </Tab.Navigator>
  );
}
