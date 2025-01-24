import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function DestinationDetailScreen(): JSX.Element {
  const params = useLocalSearchParams();
  const [bookings, setBookings] = useState<any[]>([]);  // Menyimpan daftar booking

  const currentDate = new Date().toISOString().split('T')[0]; // Mendapatkan tanggal saat ini dalam format YYYY-MM-DD

  const handleBookNow = () => {
    const newBooking = {
      id: Math.random().toString(36).substr(2, 9), // ID unik untuk booking
      destination: params.name as string,
      date: currentDate,
      image: require('@/assets/images/react-logo.png'), // Gambar default, ganti sesuai kebutuhan
    };
    setBookings((prevBookings) => [...prevBookings, newBooking]);
    alert('Booking successful!');
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>{params.name}</ThemedText>
      <ThemedText type="subtitle" style={styles.description}>{params.description}</ThemedText>
      <ThemedText type="subtitle" style={styles.price}>Price: {params.price}</ThemedText>
      <ThemedText type="subtitle" style={styles.city}>Location: {params.city}, {params.country}</ThemedText>

      <Button title="Book Now" onPress={handleBookNow} />
      
      {/* Menampilkan daftar booking */}
      <View style={styles.bookingList}>
        <ThemedText type="subtitle">Your Bookings:</ThemedText>
        {bookings.map((booking) => (
          <View key={booking.id} style={styles.bookingItem}>
            <ThemedText>{booking.destination} - {booking.date}</ThemedText>
          </View>
        ))}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginVertical: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  city: {
    fontSize: 16,
    marginVertical: 8,
  },
  bookingList: {
    marginTop: 20,
  },
  bookingItem: {
    marginTop: 10,
  },
});
