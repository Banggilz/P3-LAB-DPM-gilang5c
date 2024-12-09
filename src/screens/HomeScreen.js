import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import AnimalCard from '../components/AnimalCard';

const HomeScreen = ({ navigation }) => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    // Data hewan dimuat ketika komponen dirender
    setAnimals([
      { id: 1, name: 'Kucing', type: 'Mamalia', image: require('../assets/kitten.jpg') },
      { id: 2, name: 'Burung', type: 'Aves', image: require('../assets/gambar-burung.jpg') },
      { id: 3, name: 'Ikan', type: 'Pisces', image: require('../assets/Ikan_Cupang.jpg') },
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Daftar Hewan" />
      <ScrollView>
        {animals.map((animal) => (
          <AnimalCard
            key={animal.id}
            name={animal.name}
            type={animal.type}
            image={animal.image}
            onPress={() => navigation.navigate('Details', { animal })}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9',
  },
});

export default HomeScreen;
