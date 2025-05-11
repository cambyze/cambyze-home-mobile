import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';

const servicesData = [
  {
    id: '1',
    title: 'service_web',
    description: 'service_web_desc',
    image: require('../assets/images/icon_react.png'),
  },
  {
    id: '2',
    title: 'service_mobile',
    description: 'service_mobile_desc',
    image: require('../assets/images/icon_react.svg'), 
  },
  {
    id: '3',
    title: 'service_seo',
    description: 'service_seo_desc',
    image: require('../assets/images/icon_jQuery.png'),
  },
];

const Services = () => {
  const { t } = useTranslation();

  const renderItem = ({ item }) => (
    <View style={styles.serviceContainer}>
      <Image source={item.image} style={styles.serviceImage} />
      <Text style={styles.serviceTitle}>{t('services_title')}</Text>
      <Text style={styles.serviceDescription}>{t('service_mobile_desc')}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={servicesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  listContainer: {
    paddingBottom: 16,
  },
  serviceContainer: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  serviceImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  serviceTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 12,
  },
  serviceDescription: {
    fontSize: 16,
    marginTop: 8,
    color: '#555',
  },
});

export default Services;
