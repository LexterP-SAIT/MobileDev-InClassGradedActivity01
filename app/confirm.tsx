import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function ConfirmationScreen() {
  const router = useRouter();
  const { name } = useLocalSearchParams<{ name?: string }>();

  const userName = name || 'User';

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.iconContainer}>
          <Text style={styles.checkmark}>✓</Text>
        </View>

        <Text style={styles.title}>Submission Successful!</Text>
        <Text style={styles.subtitle}>Account created for {userName}!</Text>

        <Text style={styles.infoText}>
          Your form passed all client-side validation rules successfully.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace('/')}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Back to Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 20, 
    backgroundColor: '#F8FAFC' },
card: { 
    backgroundColor: '#FFFFFF', 
    borderRadius: 16,
    padding: 32, 
    alignItems: 'center', 
    shadowColor: '#000', 
    shadowOpacity: 0.05, 
    shadowRadius: 10, 
    elevation: 3 },
iconContainer: { 
    width: 64, 
    height: 64, 
    borderRadius: 32, 
    backgroundColor: '#DCFCE7', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 16 },
checkmark: { 
    fontSize: 32, 
    color: '#16A34A', 
    fontWeight: 'bold' },
title: { 
    fontSize: 22, 
    fontWeight: '700', 
    color: '#0F172A', 
    marginBottom: 8, 
    textAlign: 'center' },
subtitle: { 
    fontSize: 18, 
    fontWeight: '600', 
    color: '#16A34A', 
    marginBottom: 12, 
    textAlign: 'center' },
infoText: { 
    fontSize: 14, 
    color: '#64748B', 
    textAlign: 'center', 
    marginBottom: 24, 
    lineHeight: 20 },
button: { 
    width: '100%', 
    height: 48, 
    backgroundColor: '#0F172A', 
    borderRadius: 8, 
    justifyContent: 'center', 
    alignItems: 'center' },
buttonText: { 
    color: '#FFFFFF', 
    fontSize: 16, 
    fontWeight: '600' },
});