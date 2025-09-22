
import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

const cast = [
  { id: '1', name: 'Miles Teller', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4f2hqhUR7VyA3o2bi_fgrhRL0VYW9F0fPAS3nWiCyc7AHHA3vPlBJBRd6hHpMRcx4RKpy_f-eN_G7yMnUYyzh76WfaZQXEisUOBxp1rpcdABJ0U33UCC6GH3a0wCcQDLs7WQfyey8Iq0xkyoHKJx1jNiJ-z-xztYiItkWbv4VmHZG8FnPSUwa79LfgP-9ugpdvUdzNJnHXd-Zfgt3mE3qgVipzSqjrfe_gASLoVoyxcExlnzkC2D2feVaRDOmWbOBilDZ2zH70Hs6' },
  { id: '2', name: 'Anya Taylor-Joy', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4f2hqhUR7VyA3o2bi_fgrhRL0VYW9F0fPAS3nWiCyc7AHHA3vPlBJBRd6hHpMRcx4RKpy_f-eN_G7yMnUYyzh76WfaZQXEisUOBxp1rpcdABJ0U33UCC6GH3a0wCcQDLs7WQfyey8Iq0xkyoHKJx1jNiJ-z-xztYiItkWbv4VmHZG8FnPSUwa79LfgP-9ugpdvUdzNJnHXd-Zfgt3mE3qgVipzSqjrfe_gASLoVoyxcExlnzkC2D2feVaRDOmWbOBilDZ2zH70Hs6' },
  { id: '3', name: 'Sigourney Weaver', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4f2hqhUR7VyA3o2bi_fgrhRL0VYW9F0fPAS3nWiCyc7AHHA3vPlBJBRd6hHpMRcx4RKpy_f-eN_G7yMnUYyzh76WfaZQXEisUOBxp1rpcdABJ0U33UCC6GH3a0wCcQDLs7WQfyey8Iq0xkyoHKJx1jNiJ-z-xztYiItkWbv4VmHZG8FnPSUwa79LfgP-9ugpdvUdzNJnHXd-Zfgt3mE3qgVipzSqjrfe_gASLoVoyxcExlnzkC2D2feVaRDOmWbOBilDZ2zH70Hs6' },
  { id: '4', name: 'Sope Dirisu', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx7sb3XnjEAvHf3K8fEZYgtxK4YuJDMJ1XWzD4pfcMsR3Uq-xZHaipSKxuhbMaBfVpBNYTEo9rn19duKwv_RCX4JuUmpkiz9cc36qtcKCuhNfq6BK3aEva7Y4GfDhhdwo0CowXylzjq2B-WLNnQzusjxp9ZYpanOcm-JTyPraEn3CYw_lp-0Pbg-wMAdJ7MvxB_z4vdJ7bSEzaScyzzay9K54GTbwsFvkuhqE4ipRP-SDk126ZxHvEwBlzpCi1phTnatNPjn958s75' },
];

import { useRouter } from 'expo-router';

const MovieDetailScreen = () => {
  const router = useRouter();
  const renderCastItem = ({ item }) => (
    <View style={styles.castItem}>
      <Image source={{ uri: item.image }} style={styles.castImage} />
      <Text style={styles.castName}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageBackground
          style={styles.banner}
          source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxgGr79oJv3fZM3usrzfjtIaLs5wfFpvkCq5pGek2HvIyz4807LEpdHguGdN19drUv08etcxj2x-0L7fWxVBE411o2bt7teotvlx0HqsXW7VJWZ33jjTk_AzshpH6yy86jsfwwK1WyoU81w9GT3dPWr0_17xjOSLqfhmPoL_NC_wgK9Ovy2_Fb6nspeqhTnDaOJdDVAJOkHgHRF828IPHBVZ5gJeg9EW4POeIHNfx70hHApDtDxGVu5MwZybt62p8wPVm2hgMcd-MT' }}
        >
          <View style={styles.bannerOverlay} />
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()}>
              <MaterialIcons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <View style={styles.logoContainer}>
                <MaterialIcons name="apple" size={32} color="white" />
                <Text style={styles.logoText}>tv+</Text>
            </View>
          </View>
        </ImageBackground>

        <View style={styles.detailsContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>The Gorge</Text>
            <View style={styles.iconContainer}>
              <TouchableOpacity><MaterialIcons name="bookmark-border" size={24} color="#9CA3AF" /></TouchableOpacity>
              <TouchableOpacity><MaterialIcons name="share" size={24} color="#9CA3AF" /></TouchableOpacity>
            </View>
          </View>

          <View style={styles.genreContainer}>
            <Text style={styles.genre}>Adventure</Text>
            <Text style={styles.genre}>Action</Text>
            <Text style={styles.genre}>Romance</Text>
            <Text style={styles.genre}>Horror</Text>
            <Text style={styles.genre}>Drama</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>2025 ・ 1h 55m</Text>
            <Text style={styles.infoTextBold}>IMDb 6</Text>
          </View>

          <View style={styles.summaryContainer}>
            <Text style={styles.summaryTitle}>Summery</Text>
            <Text style={styles.summaryText}>Two operatives are appointed to posts in guard towers on opposite sides of a classified gorge.</Text>
          </View>

          <View style={styles.castSection}>
            <Text style={styles.castTitle}>Casts</Text>
            <FlatList
              horizontal
              data={cast}
              renderItem={renderCastItem}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <TouchableOpacity style={styles.ticketButton} onPress={() => router.push('/seat-selection')}>
            <Text style={styles.ticketButtonText}>Buy Ticket</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1F2937' },
  banner: { height: 384, justifyContent: 'space-between' },
  bannerOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.3)' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16 },
  logoContainer: { flexDirection: 'row', alignItems: 'center' },
  logoText: { color: 'white', fontSize: 20, fontWeight: 'bold', marginLeft: 4 },
  detailsContainer: { backgroundColor: '#374151', borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 24, marginTop: -32 },
  titleContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', color: 'white' },
  iconContainer: { flexDirection: 'row', gap: 16 },
  genreContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginVertical: 16 },
  genre: { backgroundColor: '#3B82F6', color: 'white', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 999, fontSize: 12, fontWeight: '500' },
  infoContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  infoText: { color: '#9CA3AF', fontSize: 14 },
  infoTextBold: { color: '#9CA3AF', fontSize: 14, fontWeight: 'bold' },
  summaryContainer: { marginBottom: 24 },
  summaryTitle: { fontSize: 18, fontWeight: '600', color: 'white', marginBottom: 4 },
  summaryText: { color: '#9CA3AF', fontSize: 14 },
  castSection: { marginBottom: 32 },
  castTitle: { fontSize: 18, fontWeight: '600', color: 'white', marginBottom: 12 },
  castItem: { alignItems: 'center', marginRight: 16 },
  castImage: { width: 56, height: 56, borderRadius: 28 },
  castName: { color: '#9CA3AF', fontSize: 12, marginTop: 4, width: 60, textAlign: 'center' },
  ticketButton: { backgroundColor: '#22C55E', paddingVertical: 16, borderRadius: 8, alignItems: 'center' },
  ticketButtonText: { color: '#1F2937', fontSize: 18, fontWeight: 'bold' },
});

export default MovieDetailScreen;
