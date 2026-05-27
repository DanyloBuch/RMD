import React, { useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  // Отримуємо передані параметри (об'єкт новини) [cite: 185]
  const { item } = route.params;

  // Встановлюємо динамічний заголовок екрану на основі назви новини [cite: 186]
  useLayoutEffect(() => {
    navigation.setOptions({ title: item.title });
  }, [navigation, item]);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  image: { width: '100%', height: 250 },
  content: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
  description: { fontSize: 16, color: '#333', lineHeight: 24 },
});