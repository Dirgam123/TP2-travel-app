import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, TouchableOpacity, View, TextStyle, ViewStyle, ImageStyle } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

interface Booking {
  id: string;
  destination: string;
  date: string;
  image: any;
}

export default function BookingsScreen(): JSX.Element {
  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: '1',
      destination: 'Coming soon feature',
      date: 'Coming soon feature',
      image: require('@/assets/images/react-logo.png'),
    },
    {
      id: '2',
      destination: 'Coming soon feature',
      date: 'Coming soon feature',
      image: require('@/assets/images/react-logo.png'),
    },
    {
      id: '3',
      destination: 'Coming soon feature',
      date: 'Coming soon feature',
      image: require('@/assets/images/react-logo.png'),
    },
  ]);

  const renderBooking = ({ item }: { item: Booking }) => (
    <TouchableOpacity style={styles.bookingCard}>
      <Image source={item.image} style={styles.bookingImage} />
      <View style={styles.bookingInfo}>
        <ThemedText>{item.destination}</ThemedText>
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

const styles = StyleSheet.create({
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
