import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';
import { CONTACTS_DATA } from '../data/mockData';

export default function ContactsScreen() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={CONTACTS_DATA}
        keyExtractor={(item, index) => item + index}
        // Відображення елемента [cite: 193]
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        // Відображення заголовка секції [cite: 194]
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
        // Розділювач елементів [cite: 196]
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { fontSize: 18, fontWeight: 'bold', backgroundColor: '#e0e0e0', padding: 10 },
  item: { padding: 15, backgroundColor: '#fff' },
  itemText: { fontSize: 16 },
  separator: { height: 1, backgroundColor: '#ddd' },
});