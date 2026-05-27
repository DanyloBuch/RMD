import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.profileContainer}>
        {/* Аватар (заглушка) [cite: 199] */}
        <Image 
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' }} 
          style={styles.avatar} 
        />
        <Text style={styles.name}>Бучинський Данило Петрович</Text>
        <Text style={styles.group}>IPZ-24-1</Text>
      </View>
      
      {/* Стандартні пункти меню (Новини, Контакти) [cite: 202, 203] */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: { width: 80, height: 80, borderRadius: 40, marginBottom: 10 },
  name: { fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
  group: { fontSize: 14, color: '#666', marginTop: 5 },
});