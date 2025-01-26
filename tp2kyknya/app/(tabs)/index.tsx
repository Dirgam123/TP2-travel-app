import React from 'react';
import { Image, StyleSheet, TouchableOpacity, ViewStyle, ImageStyle, TextStyle, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen(): JSX.Element {
  const router = useRouter();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#ffffff', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/logoapp.png')}
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Dirgam Travel</ThemedText>
        <ThemedText type="subtitle">Wujudkan rencana healing kamu.</ThemedText>
      </ThemedView>

      <ThemedView style={styles.sectionContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.bannerContainer}
        >
          <TouchableOpacity style={styles.banner}>
            <Image
              source={require('@/assets/images/banner2.png')}
              style={styles.bannerImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.banner}>
            <Image
              source={require('@/assets/images/banner1.png')}
              style={styles.bannerImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.banner}>
            <Image
              source={require('@/assets/images/banner3.png')}
              style={styles.bannerImage}
            />
          </TouchableOpacity>
        </ScrollView>
      </ThemedView>

      <ThemedView style={styles.sectionContainer}>
        <TouchableOpacity
          style={styles.ctaButton}
          onPress={() => router.push('/explore')}
        >
          <ThemedText>Plan Your Trip</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ParallaxScrollView>
  );
}

interface Styles {
  headerImage: ImageStyle;
  titleContainer: ViewStyle;
  sectionContainer: ViewStyle;
  bannerContainer: ViewStyle;
  banner: ViewStyle;
  bannerImage: ImageStyle;
  ctaButton: ViewStyle;
  sectionTitle: TextStyle;
  bannerText: TextStyle;
  ctaText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  headerImage: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
    marginTop: 32,
  },
  titleContainer: {
    margin: 16,
    gap: 8,
    alignItems: 'center',
  },
  sectionContainer: {
    margin: 16,
  },
  bannerContainer: {
    gap: 16,
    marginTop: 16,
    paddingHorizontal: 8,
  },
  banner: {
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
    backgroundColor: '#fff',
    marginRight: 16,
  },
  bannerImage: {
    height: 150,
    width: 300,
    resizeMode: 'cover',
  },
  bannerText: {
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
