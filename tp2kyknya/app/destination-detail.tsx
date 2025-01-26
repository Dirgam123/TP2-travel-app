import React from 'react';
import { Image, StyleSheet, Button } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import MapView, { Marker } from 'react-native-maps';

export default function DestinationDetailScreen(): JSX.Element {
  const params = useLocalSearchParams();
  const router = useRouter();

  const coordinates = {
    latitude: parseFloat(params.latitude as string),
    longitude: parseFloat(params.longitude as string),
  };

  const handleBookNow = () => {
    router.push({
      pathname: '/IsiDataScreen',
      params: {
        name: params.name,
        price: params.price,
        city: params.city,
        country: params.country,
      },
    });
  };

  return (
    <ThemedView style={styles.container}>
      <Image
        source={params.image}
        style={styles.image}
      />

      <ThemedText type="title" style={styles.title}>
        {params.name}
      </ThemedText>
      <ThemedText type="subtitle" style={styles.description}>
        {params.description}
      </ThemedText>
      <ThemedText type="subtitle" style={styles.price}>
        Price: {params.price}
      </ThemedText>
      <ThemedText type="subtitle" style={styles.location}>
        Location: {params.city}, {params.country}
      </ThemedText>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={coordinates} title={params.name} description={params.description} />
      </MapView>

      <Button title="Book Now" onPress={handleBookNow} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'green',
  },
  location: {
    fontSize: 16,
    marginBottom: 16,
    color: '#555',
  },
  map: {
    width: '100%',
    height: 250,
    marginBottom: 16,
    borderRadius: 8,
  },
});
