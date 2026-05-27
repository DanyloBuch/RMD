import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, RefreshControl, ActivityIndicator, TouchableOpacity } from 'react-native';
import { NEWS_DATA } from '../data/mockData';

export default function NewsScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10; // Підвантажуємо по 10 елементів

  // Завантаження початкових даних
  useEffect(() => {
    loadMoreData();
  }, []);

  const loadMoreData = () => {
    const nextData = NEWS_DATA.slice(0, page * itemsPerPage);
    setData(nextData);
    setPage(page + 1);
  };

  // Pull-to-Refresh
  const handleRefresh = () => {
    setIsRefreshing(true);
    // Імітація мережевого запиту
    setTimeout(() => {
      setPage(1);
      setData(NEWS_DATA.slice(0, itemsPerPage));
      setIsRefreshing(false);
    }, 1500);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.card} 
      // Перехід на екран деталей із передачею параметрів
      onPress={() => navigation.navigate('Details', { item })}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        // Візуальні компоненти
        ListHeaderComponent={<Text style={styles.header}>Останні новини</Text>}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListFooterComponent={<ActivityIndicator size="small" color="#0000ff" style={{ margin: 20 }} />}
        
        // Оптимізація продуктивності
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        windowSize={11}
        
        // Infinite Scroll
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.5}
        
        // Pull-to-Refresh
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { fontSize: 24, fontWeight: 'bold', padding: 15, textAlign: 'center' },
  card: { backgroundColor: '#fff', padding: 15 },
  image: { width: '100%', height: 200, borderRadius: 10, marginBottom: 10 },
  title: { fontSize: 18, fontWeight: 'bold' },
  description: { fontSize: 14, color: '#666', marginTop: 5 },
  separator: { height: 1, backgroundColor: '#eee' },
});