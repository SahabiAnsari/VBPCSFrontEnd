import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [currentTab, setCurrentTab] = useState<number>(1); // Toggle between Tab 1 and Tab 2

  const renderTab1 = () => (
    <View style={styles.container}>
      <Text style={styles.header}>Voice Assistant</Text>
      <Text style={styles.question}>How can I assist you today?</Text>
      <TouchableOpacity style={styles.micButton}>
        <Text style={styles.micText}>🎤</Text>
      </TouchableOpacity>
      <Text style={styles.status}>Listening...</Text>
      <View style={styles.responseBox}>
        <Text style={styles.response}>You requested assistance with water.</Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.confirmButton}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.retryButton}>
            <Text style={styles.buttonText}>Retry</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.footer}>Powered by Azure OpenAI</Text>
    </View>
  );

  const renderTab2 = () => (
    <View style={styles.container}>
      <Text style={styles.header}>Voice Assistant</Text>
      <TouchableOpacity style={styles.emergencyButton}>
        <Text style={styles.emergencyText}>Emergency</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.speakButton}>
        <Text style={styles.speakText}>Speak Your Request</Text>
      </TouchableOpacity>
      <Text style={styles.footerSmall}>
        For emergencies, press the red button. For other requests, use the blue button to speak.
      </Text>
      <Text style={styles.footer}>Powered by Azure OpenAI</Text>
    </View>
  );

  return (
    <>
      {currentTab === 1 ? renderTab1() : renderTab2()}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tabButton, currentTab === 1 && styles.activeTab]}
          onPress={() => setCurrentTab(1)}
        >
          <Text style={styles.tabText}>Tab 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, currentTab === 2 && styles.activeTab]}
          onPress={() => setCurrentTab(2)}
        >
          <Text style={styles.tabText}>Tab 2</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#0078D7',
    width: '100%',
    color: '#fff',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
  },
  question: {
    fontSize: 16,
    marginVertical: 20,
  },
  micButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#0078D7',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  micText: {
    fontSize: 32,
    color: '#fff',
  },
  status: {
    marginTop: 10,
    fontSize: 16,
    fontStyle: 'italic',
  },
  responseBox: {
    marginTop: 20,
    padding: 10,
    alignItems: 'center',
  },
  response: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 10,
  },
  confirmButton: {
    backgroundColor: '#0078D7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  retryButton: {
    backgroundColor: '#B0B0B0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  emergencyButton: {
    width: '80%',
    backgroundColor: '#FF4C4C',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  speakButton: {
    width: '80%',
    backgroundColor: '#0078D7',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  emergencyText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  speakText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#0078D7',
    color: '#fff',
    padding: 5,
  },
  footerSmall: {
    color: '#7a7a7a',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    backgroundColor: '#f1f1f1',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  activeTab: {
    backgroundColor: '#e1e1e1',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
