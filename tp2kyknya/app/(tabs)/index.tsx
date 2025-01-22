import React from 'react';
import { Image, StyleSheet, Platform, TouchableOpacity, ViewStyle, ImageStyle, TextStyle } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen(): JSX.Element {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#E6F7F8', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('../../assets/images/react-logo.png')} // Replace with a relevant travel image
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Discover Your Next Adventure</ThemedText>
        <ThemedText type="subtitle">Explore top destinations and plan your perfect getaway.</ThemedText>
      </ThemedView>

      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="sectionTitle">Popular Destinations</ThemedText>
        <ThemedView style={styles.destinations}>
          <TouchableOpacity style={styles.card}>
            <Image
              source={require('../../assets/images/react-logo.png')} // Replace with Paris image
              style={styles.cardImage}
            />
            <ThemedText type="cardTitle">Paris</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image
              source={require('../../assets/images/react-logo.png')} // Replace with Bali image
              style={styles.cardImage}
            />
            <ThemedText type="cardTitle">Bali</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image
              source={require('../../assets/images/react-logo.png')} // Replace with New York image
              style={styles.cardImage}
            />
            <ThemedText type="cardTitle">New York</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="sectionTitle">Get Started</ThemedText>
        <TouchableOpacity style={styles.ctaButton}>
          <ThemedText type="ctaText">Plan Your Trip</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ParallaxScrollView>
  );
}

interface Styles {
  headerImage: ImageStyle;
  titleContainer: ViewStyle;
  sectionContainer: ViewStyle;
  destinations: ViewStyle;
  card: ViewStyle;
  cardImage: ImageStyle;
  ctaButton: ViewStyle;
  sectionTitle: TextStyle;
  cardTitle: TextStyle;
  ctaText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  headerImage: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
  },
  titleContainer: {
    margin: 16,
    gap: 8,
    alignItems: 'center',
  },
  sectionContainer: {
    margin: 16,
  },
  destinations: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  card: {
    width: '30%',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
    backgroundColor: '#fff',
  },
  cardImage: {
    height: 100,
    width: '100%',
    resizeMode: 'cover',
  },
  cardTitle: {
    textAlign: 'center',
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  ctaButton: {
    backgroundColor: '#1D8FCE',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  ctaText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
