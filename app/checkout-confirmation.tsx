
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Svg, Path } from 'react-native-svg';

import { useRouter } from 'expo-router';

const CheckoutConfirmationScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/')}>
            <Svg width="24" height="24" fill="white" viewBox="0 0 256 256"><Path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></Path></Svg>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Order Confirmation</Text>
        <View style={{width: 24}} />
      </View>
      <ScrollView>
        <ImageBackground 
            style={styles.imageBanner}
            source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfF-Ssw0eddkt3JzmBfadNCYkdGhoNe0TsBfAyQQN_idAnt0s3MnpTzjJlBON_1E8f1bYCCpvVznHfgJHMEJjCwPxzalZnv9YijYTh3TGmWN8032bbuNd3nfG-raZ1MoPveaCR2u0olmwAlRbqxej4BimvVCbPczFktj0V2bLQpVPLPK67-sQALPhSmhhbCnJxHuPqlkoEMdiat_B2VFYGvTNJUohzZeNRV0B3n-p4_6Y5PvtyNBOrQFH3-ulhLqkxSYjwzdFOQg'}}
        />
        <Text style={styles.successTitle}>Payment Successful</Text>
        <Text style={styles.successMessage}>
          Your tickets are confirmed and will be sent to your email address. Get ready for an unforgettable experience!
        </Text>
        <Text style={styles.detailsTitle}>Order Details</Text>

        <View style={styles.detailItem}>
            <View style={styles.iconContainer}>
                <Svg width="24" height="24" fill="white" viewBox="0 0 256 256"><Path d="M216,104H102.09L210,75.51a8,8,0,0,0,5.68-9.84l-8.16-30a15.93,15.93,0,0,0-19.42-11.13L35.81,64.74a15.75,15.75,0,0,0-9.7,7.4,15.51,15.51,0,0,0-1.55,12L32,111.56c0,.14,0,.29,0,.44v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V112A8,8,0,0,0,216,104ZM192.16,40l6,22.07-22.62,6L147.42,51.83Zm-66.69,17.6,28.12,16.24-36.94,9.75L88.53,67.37Zm-79.4,44.62-6-22.08,26.5-7L94.69,89.4ZM208,200H48V120H208v80Z"></Path></Svg>
            </View>
            <View><Text style={styles.detailText}>The Grand Cinema</Text><Text style={styles.detailSubText}>2 Tickets</Text></View>
        </View>
        <View style={styles.detailItem}>
            <View style={styles.iconContainer}>
                <Svg width="24" height="24" fill="white" viewBox="0 0 256 256"><Path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"></Path></Svg>
            </View>
            <View><Text style={styles.detailText}>Movie Night</Text><Text style={styles.detailSubText}>Saturday, July 20, 2024, 7:30 PM</Text></View>
        </View>
        <View style={styles.detailItem}>
            <View style={styles.iconContainer}>
                <Svg width="24" height="24" fill="white" viewBox="0 0 256 256"><Path d="M216,88.8V72a40,40,0,0,0-40-40H80A40,40,0,0,0,40,72V88.8a40,40,0,0,0,0,78.4V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V167.2a40,40,0,0,0,0-78.4ZM80,48h96a24,24,0,0,1,24,24V88.8A40.07,40.07,0,0,0,168,128H88A40.07,40.07,0,0,0,56,88.8V72A24,24,0,0,1,80,48ZM208.39,152H208a8,8,0,0,0-8,8v40H56V160a8,8,0,0,0-8-8h-.39A24,24,0,1,1,72,128v40a8,8,0,0,0,16,0V144h80v24a8,8,0,0,0,16,0V128a24,24,0,1,1,24.39,24Z"></Path></Svg>
            </View>
            <View><Text style={styles.detailText}>Seat Selection</Text><Text style={styles.detailSubText}>Row G, Seats 12 & 13</Text></View>
        </View>
        <View style={styles.detailItem}>
            <View style={styles.iconContainer}>
                <Svg width="24" height="24" fill="white" viewBox="0 0 256 256"><Path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,16V88H32V64Zm0,128H32V104H224v88Zm-16-24a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h32A8,8,0,0,1,208,168Zm-64,0a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h16A8,8,0,0,1,144,168Z"></Path></Svg>
            </View>
            <View><Text style={styles.detailText}>Payment Method</Text><Text style={styles.detailSubText}>Credit Card ending in 4567</Text></View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.ticketsButton}>
          <Text style={styles.ticketsButtonText}>View Tickets</Text>
        </TouchableOpacity>
        <View style={styles.bottomNavContainer}>
            <TouchableOpacity style={styles.navItem}><Svg width="24" height="24" fill="#9db89d" viewBox="0 0 256 256"><Path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></Path></Svg><Text style={styles.navText}>Home</Text></TouchableOpacity>
            <TouchableOpacity style={styles.navItem}><Svg width="24" height="24" fill="white" viewBox="0 0 256 256"><Path d="M216,104H102.09L210,75.51a8,8,0,0,0,5.68-9.84l-8.16-30a15.93,15.93,0,0,0-19.42-11.13L35.81,64.74a15.75,15.75,0,0,0-9.7,7.4,15.51,15.51,0,0,0-1.55,12L32,111.56c0,.14,0,.29,0,.44v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V112A8,8,0,0,0,216,104ZM136.44,54.72,164.57,71l-58.9,15.55L77.55,70.27ZM208,200H48V120H208v80Z"></Path></Svg><Text style={styles.navTextSelected}>Tickets</Text></TouchableOpacity>
            <TouchableOpacity style={styles.navItem}><Svg width="24" height="24" fill="#9db89d" viewBox="0 0 256 256"><Path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></Path></Svg><Text style={styles.navText}>Profile</Text></TouchableOpacity>
            <TouchableOpacity style={styles.navItem}><Svg width="24" height="24" fill="#9db89d" viewBox="0 0 256 256"><Path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></Path></Svg><Text style={styles.navText}>Settings</Text></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111811' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 16, justifyContent: 'space-between' },
  headerTitle: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  imageBanner: { height: 218, marginHorizontal: 16, borderRadius: 12, overflow: 'hidden' },
  successTitle: { color: 'white', fontSize: 22, fontWeight: 'bold', textAlign: 'center', paddingVertical: 20 },
  successMessage: { color: 'white', fontSize: 16, textAlign: 'center', paddingHorizontal: 16, paddingBottom: 20 },
  detailsTitle: { color: 'white', fontSize: 22, fontWeight: 'bold', paddingHorizontal: 16, paddingVertical: 20 },
  detailItem: { flexDirection: 'row', alignItems: 'center', gap: 16, paddingHorizontal: 16, paddingVertical: 8 },
  iconContainer: { width: 48, height: 48, borderRadius: 8, backgroundColor: '#293829', justifyContent: 'center', alignItems: 'center' },
  detailText: { color: 'white', fontSize: 16, fontWeight: '500' },
  detailSubText: { color: '#9db89d', fontSize: 14 },
  footer: { padding: 16 },
  ticketsButton: { backgroundColor: '#2aea2a', paddingVertical: 14, borderRadius: 8, alignItems: 'center', marginBottom: 8 },
  ticketsButtonText: { color: '#111811', fontSize: 16, fontWeight: 'bold' },
  bottomNavContainer: { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#1c261c', borderTopWidth: 1, borderTopColor: '#293829', paddingTop: 8, paddingBottom: 20 },
  navItem: { alignItems: 'center', gap: 4 },
  navText: { color: '#9db89d', fontSize: 12 },
  navTextSelected: { color: 'white', fontSize: 12, fontWeight: '500' },
});

export default CheckoutConfirmationScreen;
