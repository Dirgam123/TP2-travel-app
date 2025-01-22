import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const Home: React.FC = () => {
  const router = useRouter();

  const promoImages = [
    { title: "Explore Bali", image: require("../assets/images/balipromo.png") },
    { title: "Discount to Paris", image: require("../assets/images/parispromo.png") },
    { title: "Summer in Tokyo", image: require("../assets/images/tokyopromo.png") },
  ];

  const categories = [
    {
      name: "Flights",
      icon: require("../assets/images/pesawat.png"),
      page: "/flights",
      description: "Find affordable flights.",
    },
    {
      name: "Hotels",
      icon: require("../assets/images/hotel.png"),
      page: "/hotels",
      description: "Book comfortable stays.",
    },
    {
      name: "Attractions",
      icon: require("../assets/images/wahana.png"),
      page: "/attractions",
      description: "Discover exciting attractions.",
    },
    {
      name: "Eats",
      icon: require("../assets/images/makan.png"),
      page: "/eats",
      description: "Savor delicious meals.",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header with Logo and App Name */}
      <View style={styles.headerContainer}>
        <Image
          source={require("../assets/images/icon.png")}
          style={styles.logo}
        />
        <Text style={styles.headerTitle}>Dirgam Travel</Text>
      </View>

      {/* Promo Banner */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.promoScrollContainer}
      >
        {promoImages.map((item, index) => (
          <View key={index} style={styles.promoCard}>
            <Image source={item.image} style={styles.promoImage} />
            <Text style={styles.promoTitle}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Welcome Message */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeTitle}>Welcome to Dirgam Travel!</Text>
        <Text style={styles.welcomeSubtitle}>
          Plan your perfect trip with the best deals on flights, hotels,
          attractions, and more.
        </Text>
      </View>

      {/* Categories */}
      <Text style={styles.sectionTitle}>Explore Categories</Text>
      <View style={styles.categoriesContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.categoryCard}
            onPress={() => router.push(category.page)}
          >
            <Image source={category.icon} style={styles.categoryImage} />
            <Text style={styles.categoryTitle}>{category.name}</Text>
            <Text style={styles.categoryDescription}>
              {category.description}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Part of Dirgam Group</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    paddingBottom: 60, // Memberikan ruang agar konten tidak tertutup footer
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#4A90E2",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  promoScrollContainer: {
    paddingHorizontal: 10,
    marginTop: 15,
  },
  promoCard: {
    width: screenWidth * 0.8,
    marginHorizontal: 10,
    borderRadius: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  promoImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  promoTitle: {
    position: "absolute",
    bottom: 10,
    left: 15,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  welcomeContainer: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginHorizontal: 20,
    marginBottom: 10,
  },
  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  categoryCard: {
    width: "47%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  categoryImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  categoryDescription: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    lineHeight: 20,
  },
  footer: {
    position: "absolute", // Agar footer selalu di bagian bawah
    bottom: 0,
    width: "100%", // Lebar penuh layar
    backgroundColor: "#4A90E2",
    padding: 20,
    alignItems: "center",
  },
  footerText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
  },
});

export default Home;
