//src/screens/HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>ReUse!</Text>
        <TouchableOpacity style={styles.headerButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.headerButtonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      {/* Hero Section */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Dê uma nova vida aos objetos!</Text>
        <Text style={styles.heroSubtitle}>Reutilizar é economizar e ajudar o planeta. Junte-se a nós!</Text>
        <TouchableOpacity style={styles.ctaButton} onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.ctaButtonText}>Criar Conta</Text>
        </TouchableOpacity>
      </View>

      {/* Informações */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Por que reutilizar?</Text>
        <Text style={styles.sectionText}>Menos desperdício, mais economia e um planeta mais sustentável.</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Como funciona?</Text>
        <Text style={styles.sectionText}>Publique itens, encontre o que precisa e ajude a reduzir o consumo excessivo.</Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 ReUse! - Todos os direitos reservados.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    paddingVertical: 20,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#3D6262',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  headerButton: {
    backgroundColor: '#2082DE',
    padding: 8,
    borderRadius: 5,
  },
  headerButtonText: {
    color: '#FFF',
    fontSize: 14,
  },
  hero: {
    alignItems: 'center',
    padding: 20,
    marginVertical: 20,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3D6262',
    textAlign: 'center',
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#414141',
    textAlign: 'center',
    marginBottom: 20,
  },
  ctaButton: {
    backgroundColor: '#2082DE',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  ctaButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  section: {
    width: '90%',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3D6262',
    marginBottom: 5,
  },
  sectionText: {
    fontSize: 14,
    color: '#414141',
  },
  footer: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#414141',
    alignItems: 'center',
  },
  footerText: {
    color: '#FFF',
    fontSize: 12,
  },
});