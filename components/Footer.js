import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© {new Date().getFullYear()} Cambyze</Text>

      <View style={styles.links}>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:support@cambyze.com')}>
          <Text style={styles.link}>Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://cambyze.com')}>
          <Text style={styles.link}>Mentions légales</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    marginTop: 40,
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
  },
  text: {
    color: '#666',
    fontSize: 14,
    marginBottom: 10,
  },
  links: {
    flexDirection: 'row',
    gap: 20,
  },
  link: {
    color: '#0070f3',
    fontSize: 14,
  },
});

export default Footer;
