import React from "react";
import { Text, View, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const flightsData = [
  {
    id: 1,
    airline: "Garuda Indonesia",
    logo: require("../assets/images/icon.png"),
    destination: "Jakarta to Bali",
    price: "$120",
    time: "10:00 AM - 12:00 PM",
  },
  {
    id: 2,
    airline: "Singapore Airlines",
    logo: require("../assets/images/icon.png"),
    destination: "Singapore to Tokyo",
    price: "$450",
    time: "2:00 PM - 8:00 PM",
  },
  {
    id: 3,
    airline: "AirAsia",
    logo: require("../assets/images/icon.png"),
    destination: "Kuala Lumpur to Bangkok",
    price: "$80",
    time: "9:00 AM - 11:00 AM",
  },
];

const Flights: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Available Flights</Text>
      </View>

      {/* Flights List */}
      <ScrollView style={styles.flightsContainer}>
        {flightsData.map((flight) => (
          <TouchableOpacity
            key={flight.id}
            style={styles.flightCard}
            onPress={() => router.push(`/flights/${flight.id}`)} // Example for individual flight details
          >
            <Image source={flight.logo} style={styles.airlineLogo} />
            <View style={styles.flightDetails}>
              <Text style={styles.airlineName}>{flight.airline}</Text>
              <Text style={styles.destination}>{flight.destination}</Text>
              <Text style={styles.time}>{flight.time}</Text>
              <Text style={styles.price}>{flight.price}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  headerContainer: {
    backgroundColor: "#4A90E2",
    padding: 20,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  flightsContainer: {
    padding: 15,
  },
  flightCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  airlineLogo: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  flightDetails: {
    flex: 1,
  },
  airlineName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  destination: {
    fontSize: 16,
    color: "#555",
    marginVertical: 5,
  },
  time: {
    fontSize: 14,
    color: "#777",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4A90E2",
    marginTop: 5,
  },
});

export default Flights;
