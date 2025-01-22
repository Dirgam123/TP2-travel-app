import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View, ViewStyle, ImageStyle, TextStyle } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ProfileScreen(): JSX.Element {
  const handleEditProfile = () => {
    console.log('Edit Profile clicked');
  };

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.profileHeader}>
        <Image
          source={require('../../assets/images/react-logo.png')} // Replace with user's profile picture
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <ThemedText type="title" style={styles.profileName}>
            John Doe
          </ThemedText>
          <ThemedText type="subtitle">johndoe@example.com</ThemedText>
        </View>
      </ThemedView>

      <ThemedView style={styles.section}>
        <TouchableOpacity style={styles.optionButton} onPress={handleEditProfile}>
          <ThemedText type="defaultSemiBold">Edit Profile</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={handleLogout}>
          <ThemedText type="defaultSemiBold" style={styles.logoutText}>
            Logout
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
}

interface Styles {
  container: ViewStyle;
  profileHeader: ViewStyle;
  profileImage: ImageStyle;
  profileInfo: ViewStyle;
  profileName: TextStyle;
  section: ViewStyle;
  optionButton: ViewStyle;
  logoutText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  section: {
    marginTop: 16,
    gap: 12,
  },
  optionButton: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    elevation: 2,
    alignItems: 'center',
  },
  logoutText: {
    color: '#D9534F',
  },
});
