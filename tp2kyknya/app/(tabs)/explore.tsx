import React, { useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

interface Destination {
  id: string;
  name: string;
  description: string;
  price: string;
  image: any;
  latitude: number;
  longitude: number;
  openingHours: string;
}

const destinations: Record<string, Record<string, Destination[]>> = {
  USA: {
    'New York': [
      { 
        id: '1', 
        name: 'Statue of Liberty', 
        description: 'A colossal neoclassical sculpture on Liberty Island in New York Harbor within New York City. This iconic symbol of freedom and democracy is a must-visit destination.', 
        price: '30', 
        image: require('@/assets/images/liberty.png'), 
        latitude: 40.6892, 
        longitude: -74.0445, 
        openingHours: '08:30 AM - 04:00 PM'
      },
      { 
        id: '2', 
        name: 'American Museum of Natural History', 
        description: 'One of the world’s preeminent scientific and cultural institutions, located on the Upper West Side of Manhattan, showcasing exhibits about the natural world and the universe.', 
        price: '35', 
        image: require('@/assets/images/nycmuseum.png'), 
        latitude: 40.7851, 
        longitude: -73.9683, 
        openingHours: '10:00 AM - 05:30 PM'
      },
    ],
    California: [
      { 
        id: '3', 
        name: 'Disneyland', 
        description: 'An iconic theme park in Anaheim, California, famously known as "The Happiest Place on Earth," filled with magical attractions, characters, and experiences.', 
        price: '110', 
        image: require('@/assets/images/disney.png'), 
        latitude: 33.8121, 
        longitude: -117.9190, 
        openingHours: '08:00 AM - 12:00 AM'
      },
      { 
        id: '4', 
        name: 'Golden Gate Bridge', 
        description: 'A stunning suspension bridge connecting San Francisco Bay and the Pacific Ocean, offering breathtaking views and an iconic photo opportunity.', 
        price: '10', 
        image: require('@/assets/images/gs.png'), 
        latitude: 37.8199, 
        longitude: -122.4783, 
        openingHours: 'Open 24 Hours'
      },
    ],
  },
  Europe: {
    Spain: [
      { 
        id: '5', 
        name: 'Camp Nou', 
        description: 'The largest stadium in Europe, located in Barcelona, and home to the legendary football club FC Barcelona. A must-visit for sports fans.', 
        price: '50', 
        image: require('@/assets/images/icon.png'), 
        latitude: 41.3809, 
        longitude: 2.1228, 
        openingHours: '09:30 AM - 07:30 PM'
      },
      { 
        id: '6', 
        name: 'Sagrada Familia', 
        description: 'A world-renowned basilica designed by Antoni Gaudí, blending Gothic and Art Nouveau forms to create a masterpiece of architectural beauty.', 
        price: '25', 
        image: require('@/assets/images/icon.png'), 
        latitude: 41.4036, 
        longitude: 2.1744, 
        openingHours: '09:00 AM - 08:00 PM'
      },
    ],
    UK: [
      { 
        id: '7', 
        name: 'Wembley Stadium', 
        description: 'One of the most famous stadiums in the world, located in London, and known for hosting football matches, concerts, and other significant events.', 
        price: '40', 
        image: require('@/assets/images/icon.png'), 
        latitude: 51.5560, 
        longitude: -0.2795, 
        openingHours: '10:00 AM - 04:00 PM'
      },
      { 
        id: '8', 
        name: 'Big Ben', 
        description: 'The iconic clock tower at the north end of the Palace of Westminster, a symbol of British culture and history.', 
        price: '15', 
        image: require('@/assets/images/icon.png'), 
        latitude: 51.5007, 
        longitude: -0.1246, 
        openingHours: 'Open 24 Hours'
      },
    ],
  },
};

const currencyRates = {
  USD: 1,
  IDR: 15000,
  EUR: 0.85,
};

export default function ExploreScreen(): JSX.Element {
  const [selectedCountry, setSelectedCountry] = useState<string>('USA');
  const [selectedCity, setSelectedCity] = useState<string>('New York');
  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD');
  const router = useRouter();

  const countryOptions = Object.keys(destinations);
  const cityOptions = Object.keys(destinations[selectedCountry] ?? {});
  const currencyOptions = Object.keys(currencyRates);

  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
    setSelectedCity(Object.keys(destinations[country])[0]);
  };

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
  };

  const handleCurrencySelect = (currency: string) => {
    setSelectedCurrency(currency);
  };

  const handlePress = (item: Destination) => {
    const convertedPrice = (parseFloat(item.price) * currencyRates[selectedCurrency]).toFixed(2);
    router.push({
      pathname: '/destination-detail',
      params: {
        name: item.name,
        description: item.description,
        price: `${convertedPrice} ${selectedCurrency}`,
        country: selectedCountry,
        city: selectedCity,
        image: item.image,
        latitude: item.latitude,
        longitude: item.longitude,
        openingHours: item.openingHours,
      },
    });
  };

  const places = destinations[selectedCountry]?.[selectedCity] ?? [];
  const renderItem = ({ item }: { item: Destination }) => {
    const convertedPrice = (parseFloat(item.price) * currencyRates[selectedCurrency]).toFixed(2);
    return (
      <TouchableOpacity style={styles.card} onPress={() => handlePress(item)}>
        <Image source={item.image} style={styles.image} />
        <ThemedText type="defaultSemiBold" style={styles.placeName}>
          {item.name}
        </ThemedText>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>
          {convertedPrice} {selectedCurrency}
        </Text>
        <Text style={styles.openingHours}>Hours: {item.openingHours}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.headerText}>
        Explore Destinations
      </ThemedText>

      <View style={styles.selectionContainer}>
        <ThemedText type="defaultBold" style={styles.label}>
          Select Continent
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
      </View>

      <View style={styles.selectionContainer}>
        <ThemedText type="defaultBold" style={styles.label}>
          Select Country
        </ThemedText>
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
      </View>

      <View style={styles.selectionContainer}>
        <ThemedText type="defaultBold" style={styles.label}>
          Select Currency
        </ThemedText>
        <View style={styles.buttonGroup}>
          {currencyOptions.map((currency) => (
            <TouchableOpacity
              key={currency}
              style={[styles.button, selectedCurrency === currency && styles.selectedButton]}
              onPress={() => handleCurrencySelect(currency)}
            >
              <ThemedText type="defaultSemiBold">{currency}</ThemedText>
            </TouchableOpacity>
          ))}
        </View>
      </View>

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
    paddingHorizontal: 16,
    paddingTop: 48,
    backgroundColor: '#f9f9f9',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 32,
    color: '#333',
  },
  selectionContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555',
  },
  buttonGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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
    backgroundColor: '#A1CEDC',
  },
  listContainer: {
    gap: 12,
    paddingBottom: 32,
    paddingTop: 16,
  },
  card: {
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  placeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 14,
    color: '#777',
  },
});