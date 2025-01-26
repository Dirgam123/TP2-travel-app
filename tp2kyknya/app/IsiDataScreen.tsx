import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function IsiDataScreen(): JSX.Element {
  const params = useLocalSearchParams();
  const router = useRouter();

  const handleConfirmBooking = () => {
    alert(`Booking untuk ${params.name}!, anda akan dihubungi segera oleh admin kami `);
    router.push('/');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Booking Form for {params.name}</Text>
      <Text style={styles.price}>Price: {params.price}</Text>
      <Text style={styles.location}>
        Location: {params.city}, {params.country}
      </Text>

      <TextInput style={styles.input} placeholder="Full Name" />
      <TextInput style={styles.input} placeholder="Email Address" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Phone Number" keyboardType="phone-pad" />

      <Button title="Confirm Booking" onPress={handleConfirmBooking} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    color: 'green',
    marginBottom: 8,
    textAlign: 'center',
  },
  location: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
});
