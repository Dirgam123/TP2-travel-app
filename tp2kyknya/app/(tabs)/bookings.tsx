import React from 'react';
import { FlatList, Image, StyleSheet, TouchableOpacity, View, TextStyle, ViewStyle, ImageStyle } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

interface Booking {
  id: string;
  destination: string;
  date: string;
  image: any; // Adjust to specific image type if needed
}

const bookings: Booking[] = [
  {
    id: '1',
    destination: 'Paris',
    date: '2025-02-14',
    image: require('../../assets/images/react-logo.png'),
  },
  {
    id: '2',
    destination: 'Bali',
    date: '2025-03-05',
    image: require('../../assets/images/react-logo.png'),
  },
  {
    id: '3',
    destination: 'New York',
    date: '2025-04-20',
    image: require('../../assets/images/react-logo.png'),
  },
];

export default function BookingsScreen(): JSX.Element {
  const renderBooking = ({ item }: { item: Booking }) => (
    <TouchableOpacity style={styles.bookingCard}>
      <Image source={item.image} style={styles.bookingImage} />
      <View style={styles.bookingInfo}>
        <ThemedText type="cardTitle">{item.destination}</ThemedText>
        <ThemedText type="default">{`Date: ${item.date}`}</ThemedText>
      </View>
    </TouchableOpacity>
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.pageTitle}>
        My Bookings
      </ThemedText>
      {bookings.length > 0 ? (
        <FlatList
          data={bookings}
          renderItem={renderBooking}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <ThemedView style={styles.emptyContainer}>
          <ThemedText type="subtitle">No Bookings Found</ThemedText>
          <ThemedText type="default">Start exploring destinations and make your first booking!</ThemedText>
        </ThemedView>
      )}
    </ThemedView>
  );
}

interface Styles {
  container: ViewStyle;
  pageTitle: TextStyle;
  listContainer: ViewStyle;
  bookingCard: ViewStyle;
  bookingImage: ImageStyle;
  bookingInfo: ViewStyle;
  emptyContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  pageTitle: {
    marginBottom: 16,
    fontSize: 24,
    fontWeight: 'bold',
  },
  listContainer: {
    gap: 16,
  },
  bookingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
    padding: 8,
  },
  bookingImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  bookingInfo: {
    flex: 1,
    gap: 4,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});
