import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const AnimalCard = ({ name, type, image, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={image} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.type}>{type}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
  },
  info: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  type: {
    fontSize: 14,
    color: '#555',
  },
});

export default AnimalCard;
