import React, { useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View, Text, ViewStyle, TextStyle } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

interface Destination {
  id: string;
  name: string;
  description: string;
  price: string;
}

const destinations: Record<string, Record<string, Destination[]>> = {
  USA: {
    'New York': [
      { id: '1', name: 'Statue of Liberty', description: 'A symbol of freedom.', price: '$20' },
      { id: '2', name: 'Central Park', description: 'A large park in the middle of NYC.', price: '$0' },
    ],
    California: [
      { id: '3', name: 'Disneyland', description: 'The happiest place on earth.', price: '$100' },
      { id: '4', name: 'Golden Gate Bridge', description: 'Famous suspension bridge in San Francisco.', price: '$0' },
    ],
  },
  Indonesia: {
    Bali: [
      { id: '5', name: 'Ubud Monkey Forest', description: 'A famous nature park in Bali.', price: '$10' },
      { id: '6', name: 'Kuta Beach', description: 'A popular beach for surfing.', price: '$0' },
    ],
    Jakarta: [
      { id: '7', name: 'National Monument', description: 'A historical landmark in Indonesia.', price: '$5' },
      { id: '8', name: 'Ancol Dreamland', description: 'A theme park in Jakarta.', price: '$30' },
    ],
  },
};

export default function ExploreScreen(): JSX.Element {
  const [selectedCountry, setSelectedCountry] = useState<string>('USA');
  const [selectedCity, setSelectedCity] = useState<string>('New York');
  const router = useRouter(); // Hook untuk routing

  const countryOptions = Object.keys(destinations);
  const cityOptions = Object.keys(destinations[selectedCountry] ?? {});

  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
    setSelectedCity(Object.keys(destinations[country])[0]);
  };

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
  };

  const handlePress = (item: Destination) => {
    router.push({
      pathname: '/destination-detail', // Path ke halaman detail
      params: {
        name: item.name,
        description: item.description,
        price: item.price,
        country: selectedCountry,
        city: selectedCity,
      },
    });
  };

  const places = destinations[selectedCountry]?.[selectedCity] ?? [];

  const renderItem = ({ item }: { item: Destination }) => (
    <TouchableOpacity style={styles.card} onPress={() => handlePress(item)}>
      <ThemedText type="defaultSemiBold">{item.name}</ThemedText>
    </TouchableOpacity>
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.headerText}>
        Explore Destinations
      </ThemedText>
      
      {/* Pilihan Negara */}
      <View style={styles.buttonGroup}>
        {countryOptions.map((country) => (
          <TouchableOpacity
            key={country}
            style={[styles.button, selectedCountry === country && styles.selectedButton]}
            onPress={() => handleCountrySelect(country)}
          >
            <ThemedText type="defaultSemiBold">{country}</ThemedText>
          </TouchableOpacity>
        ))}
      </View>

      {/* Pilihan Kota */}
      <View style={styles.buttonGroup}>
        {cityOptions.map((city) => (
          <TouchableOpacity
            key={city}
            style={[styles.button, selectedCity === city && styles.selectedButton]}
            onPress={() => handleCitySelect(city)}
          >
            <ThemedText type="defaultSemiBold">{city}</ThemedText>
          </TouchableOpacity>
        ))}
      </View>

      {/* Daftar Tempat Wisata */}
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  buttonGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
    gap: 8,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#A1CEDC', // Highlight selected button
  },
  listContainer: {
    gap: 12,
  },
  card: {
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
});
