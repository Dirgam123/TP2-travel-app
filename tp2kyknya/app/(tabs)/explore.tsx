import React, { useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View, Text, ViewStyle, TextStyle } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

interface Destination {
  id: string;
  name: string;
}

const destinations: Record<string, Record<string, Destination[]>> = {
  USA: {
    "New York": [
      { id: '1', name: 'Statue of Liberty' },
      { id: '2', name: 'Central Park' },
    ],
    California: [
      { id: '3', name: 'Disneyland' },
      { id: '4', name: 'Golden Gate Bridge' },
    ],
  },
  Indonesia: {
    Bali: [
      { id: '5', name: 'Ubud Monkey Forest' },
      { id: '6', name: 'Kuta Beach' },
    ],
    Jakarta: [
      { id: '7', name: 'National Monument' },
      { id: '8', name: 'Ancol Dreamland' },
    ],
  },
};

export default function ExploreScreen(): JSX.Element {
  const [selectedCountry, setSelectedCountry] = useState<string>('USA');
  const [selectedCity, setSelectedCity] = useState<string>('New York');

  const countryOptions = Object.keys(destinations);
  const cityOptions = Object.keys(destinations[selectedCountry] ?? {});

  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
    setSelectedCity(Object.keys(destinations[country])[0]);
  };

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
  };

  const places = destinations[selectedCountry]?.[selectedCity] ?? [];

  const renderPlace = ({ item }: { item: Destination }) => (
    <TouchableOpacity style={styles.placeCard}>
      <ThemedText type="defaultSemiBold">{item.name}</ThemedText>
    </TouchableOpacity>
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.headerText}>
        Explore Destinations
      </ThemedText>
      
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

      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={renderPlace}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <ThemedText type="subtitle" style={styles.emptyText}>
            No destinations available for this city.
          </ThemedText>
        }
      />
    </ThemedView>
  );
}

interface Styles {
  container: ViewStyle;
  headerText: TextStyle;
  buttonGroup: ViewStyle;
  button: ViewStyle;
  selectedButton: ViewStyle;
  listContainer: ViewStyle;
  placeCard: ViewStyle;
  emptyText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    padding: 16,
  },
  headerText: {
    marginBottom: 16,
    fontSize: 24,
    fontWeight: 'bold',
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
  placeCard: {
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    alignItems: 'center',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 16,
  },
});
