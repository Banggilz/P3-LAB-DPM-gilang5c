import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import Header from '../components/Header';

const DetailsScreen = ({ route, navigation }) => {
  const { animal } = route.params;

  return (
    <View style={styles.container}>
      <Header title="Detail Hewan" />
      <Image source={animal.image} style={styles.image} />
      <Text style={styles.name}>{animal.name}</Text>
      <Text style={styles.type}>Jenis: {animal.type}</Text>
      <Button title="Kembali" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  type: {
    fontSize: 20,
    color: '#555',
    marginBottom: 20,
  },
});

export default DetailsScreen;
