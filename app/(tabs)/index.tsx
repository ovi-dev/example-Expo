import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import i18n from '../../config/i18n';

const Home = () => {
  const router = useRouter();
  const [currentLocale, setCurrentLocale] = useState(i18n.locale);

  const toggleLanguage = () => {
    const newLocale = currentLocale === 'es' ? 'en' : 'es';
    i18n.locale = newLocale;
    setCurrentLocale(newLocale);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.languageButton} 
          onPress={toggleLanguage}>
          <Text style={styles.buttonText}>
            {currentLocale === 'es' ? '🇺🇸 EN' : '🇪🇸 ES'}
          </Text>
        </TouchableOpacity>

        <Text style={styles.title}>{i18n.t('home.title')}</Text>
        <Text style={styles.subtitle}>{i18n.t('home.subtitle')}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => router.push('/contador')}>
            <Text style={styles.buttonText}>{i18n.t('home.counter')}</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.button} 
            onPress={() => router.push('/profile')}>
            <Text style={styles.buttonText}>{i18n.t('home.profile')}</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.button} 
            onPress={() => router.push('/settings')}>
            <Text style={styles.buttonText}>{i18n.t('home.settings')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 30,
    padding: 20,
    gap: 15,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  languageButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
    zIndex: 1,
  },
});

export default Home;