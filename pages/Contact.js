import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'error'

  const handleSubmit = async () => {
    setStatus('sending');

    try {
      const response = await fetch('https://cambyze.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus('sent');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('contact_title')}</Text>

      <TextInput
        style={styles.input}
        placeholder={t('contact_name')}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder={t('contact_mail')}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder={t('contact_message')}
        value={message}
        onChangeText={setMessage}
        multiline
        numberOfLines={4}
      />

      {status === 'sending' ? (
        <ActivityIndicator size="small" color="#000" />
      ) : (
        <Button title={t('contact_button')} onPress={handleSubmit} />
      )}

      {status === 'sent' && <Text style={styles.success}>{t('sent')}</Text>}
      {status === 'error' && <Text style={styles.error}>{t('error')}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  success: {
    marginTop: 10,
    color: 'green',
  },
  error: {
    marginTop: 10,
    color: 'red',
  },
});

export default Contact;
