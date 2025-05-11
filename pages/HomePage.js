import React from 'react';
import './i18n';
import {useTranslation} from 'react-i18next';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const HomePage = () => {
  const { t } = useTranslation();
    return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/cambyze_icon.png')}
        style={styles.banner}
        resizeMode="contain"
      />
      <Text style={styles.title}>{t('welcome')}</Text>
      <Text style={styles.buttonText}>{t('demo')}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Demander une démo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  banner: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0070f3',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default HomePage;
