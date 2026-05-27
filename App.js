import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import NewsScreen from './screens/NewsScreen';
import DetailsScreen from './screens/DetailsScreen';
import ContactsScreen from './screens/ContactsScreen';
import CustomDrawerContent from './components/CustomDrawerContent';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Створюємо Stack Navigator для новин
function NewsStack() {
  return (
    <Stack.Navigator>
      {/* Приховуємо хедер стеку, щоб не було подвійного хедера з Drawer */}
      <Stack.Screen 
        name="NewsList" 
        component={NewsScreen} 
        options={{ headerShown: false }} 
      />
      {/* Заголовок буде динамічно змінюватися в самому DetailsScreen */}
      <Stack.Screen 
        name="Details" 
        component={DetailsScreen} 
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      {/* Підключаємо наш кастомний компонент бокового меню */}
      <Drawer.Navigator 
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Новини" component={NewsStack} />
        <Drawer.Screen name="Контакти" component={ContactsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}