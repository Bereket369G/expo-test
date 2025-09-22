
import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const movies = {
  top: [
    { id: '1', title: 'The Gorge', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqgMD6xLKS_vOWmvkZ5Vqqly4m3SXr8g-Ncph1hwLPNwAMlFCngSrAORQbWXunLxuFrGQh80pJe_lyNeSNHe6hA1mUyVqdYK9CGIHrhepuvu5JbTDqF20rMv10H9OouDTPWu2i8REk3z07_bkgfLtOVoeI0yRsh5M8YZ9E8z5HZCHHp7iFaFGtUGLsLZT_jsYyvCKyrm3MwGnutBZJtDbWBKbUG5Vrqyk_wFCydKdyRvGLrnAEwr_PC_k8-URVrfmrRQi147Al0lA' },
    { id: '2', title: 'Dune: Part Two', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpW6BiQ6RsJyxUGFlf33fPzoOh2BuPeIjk-vVkiv-CQLxMFbQbZgBy2mvw44eg1QmcTAxC1mb-PI-f8gY4marKuIrS4tELuZCbikDBpTzYAArCFEi4l-tNKzTNx9fCs__MLPJtEpcYgBs7TQJd-pBuSleXIBp7ZzE_cFpTzY-bZNXskA0tWFwQcnaPeC2jiXbVo_JlsMjy0GqGS7fUzbULMCeXrl32MG6WefYl3cqsPBMctxVMeUKemAyJxekrdMsfhrJkSVBrwjU' },
    { id: '3', title: 'Ordinary Angels', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQJGwmU40I5SALIHlNakHDUsTTdoT1cuoIbRX1o2Sf0DpeI1tHN8zzGfWnhf3Q5irb0oniFtnzeC-cKZBcX1uiUVfelVlML3OMGdUrhddxaGAjwg7AMWd_mYdDyZbwbY7Gpq0_utnakxGnkJ3_shxYDu1IX_WM6vZwkNBqUChN0RjFVLs8LGGxJiijv0fJ4vW7YV1WR29E1MvUkYhVzPb0IeCipGsywAXGauhCm1pB3hUPEo49hfoCwfheLmUiso9HjlDoEkbf5Sc' },
  ],
  upcoming: [
    { id: '1', title: 'Atlas', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfsqgtCNng_jHkbhe1CM_rFNwGwMfeMyz49hExUn1M4eCxy9NXvlXieMWuAPPy7e-jfNH8w4bdxm8NRlIUAg95qrjQduQ4EU3NSKsw0BhhZnrw-IfHgAsKylM2y30df2ngqCQ09MDu289SXUvfVRbh_UOn7evbho7L5mGc1BWYUJRA8XAxMbyJ0K1xWYEsoAUeLiRwAL5CRmPlQi7paceql4qeHSiJFy9nIvJqs5MhB6M50rHDz3b-tlANBiLxTGoFfvQpDwdxvbY' },
    { id: '2', title: 'The Last Voyage', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzapdaSxv5t_vvZ7JxUs-xZs_k4MwsPHNKJ4SVMeVtB4EIV0BY9iD6UBGwNttwGwoEMTmptN8-RRHYm5WoKwxpXEKaH_Vi856H9DYZVrFrTbL1ST3J_R6_TyBceuxzw5aPCioDYjquZ3GOvNzz1hxAUmak7Dj-L3xmctFENip4PO-F6OEjU1pwjTRQsgwd9RyWuxgEUP3bxf1_6KQTpL9AjPc1C3PcJeTUEFpokBzAn7A2itEe9k6FYN1QHBOyHvbPzoKb054l1PY' },
    { id: '3', title: 'Damsel', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdxAORGX66xSeWduqPvcU4GN7H_ektuGz-lRa4kRFIE8K4qPEF6mbGOgmInF5v7MaX2MR80fPLhR_wHaOX6wurkfL1YeaYhUVhOkcdpAqr_Kplq_595K_0qOEjnQln6UguUYD6QhTczc2RlkETFxrIJEdOAZPiFt8OI-yKEhKzmCYDeEYGpq-LnIs_gTZLVQe-vV3RRnu6KVIQsB2f4swhJp1hT4zW89F-CT3bCjA3MtQXlAPh620o-N-NZpdfRhLJt5v9i2havPE' },
  ],
  banner: [
    { id: '1', title: 'THE LORD OF THE RINGS: POWER', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdeHyioItgm4QRfSj28YTXcji9c6zaQim5vsXcay9qnJcIyQcrOc5zWBaS-CcPl6kriW9j-uzhJllG6cI9ztFJg7xMxxd4gkQmux1ZkA8zLH9q6YPQ2TF5Px9yKbfHxpsg05SlXC7IKnUsFyL6OM3uWaEqhJbZ8RHV28LwlGDj9sEOtdGX1pACHMrinWcmBzHPE-7bzwiVeuYC5SFTt6BOyH750Ld-F2br8yKyCm0OAOs86oPVMTzjxfDpn777bU3JimI2VpMkhC4' },
    { id: '2', title: 'AVENGERS', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCi_Uza3l5VV8iPP_3e9FCkXHw3WIA5N5ssPKXMgiizcuk7u7Sht1DFfS_0rh3otW0ev7_VZEVbv26zdXunrZBrkUDpNQ8n1rdrtUU6RN2HvNV-lxu9n6ecE99dttS5B-7cNYu_JoXncOokUt3dmeYx_VgcvrPmM_gBY5cVKewjcvh0yUrfzdC4UUEuAbdgstjFrShXcdnp8Dc-Wcz-RKF3wpBf-cdoTcy7wY_E4p4jZjpkuGi0jOPuQgyi18IdUdhhdjAwYUTup48' },
  ]
};

import { useRouter } from 'expo-router';

const HomeScreen = () => {
  const router = useRouter();
  const renderMovieItem = ({ item }) => (
    <TouchableOpacity onPress={() => router.push('/movie-detail')}>
      <Image source={{ uri: item.image }} style={styles.movieImage} />
      <Text style={styles.movieTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderBannerItem = ({ item }) => (
    <TouchableOpacity onPress={() => router.push('/movie-detail')}>
      <Image source={{ uri: item.image }} style={styles.bannerImage} />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.7)']}
        style={styles.bannerGradient}
      />
      <Text style={styles.bannerTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image
            alt="Pitter Jackson avatar"
            style={styles.avatar}
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzUaocpM4-kzTn9W95630cUq03yD1Ls9vsm43gJ4zTIcGnc-tLu7wWIHfjGXQkhFblZ0PTQRmSrgz2fQ-WPH3ywAeQz6LoxHepuVWnWDSn9U4sOF4oNo1GgcCKpTqGpvfmFG641gJ1-TCGsyBGZMchM4c5HkmYh9cuBzUM7AAczW4eXGUd05Wtz7M0Pu1D5O8tU8URofT77jrTwWLToBXaqUWxNHr_GLkCO3iJy1sxoojGJrSPvQOOpHWMfqCxqNa-wkXhVz4wAEs' }}
          />
          <View>
            <Text style={styles.headerText}>Hello Pitter Jackson</Text>
            <Text style={styles.headerSubText}>@pitterjackson</Text>
          </View>
        </View>

        <View style={styles.searchContainer}>
          <MaterialIcons name="search" size={24} color="#9CA3AF" style={styles.searchIcon} />
          <TextInput
            placeholder="Search Movies..."
            style={styles.searchInput}
            placeholderTextColor="#9CA3AF"
          />
          <MaterialIcons name="mic" size={24} color="#9CA3AF" style={styles.micIcon} />
        </View>

        <FlatList
          horizontal
          data={movies.banner}
          renderItem={renderBannerItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.bannerCarousel}
        />

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top Movies</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={movies.top}
            renderItem={renderMovieItem}
            keyExtractor={(item) => item.id}
            numColumns={3}
            columnWrapperStyle={styles.movieGrid}
          />
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Upcoming Movies</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={movies.upcoming}
            renderItem={renderMovieItem}
            keyExtractor={(item) => item.id}
            numColumns={3}
            columnWrapperStyle={styles.movieGrid}
          />
        </View>
      </ScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity><MaterialIcons name="explore" size={28} color="#9CA3AF" /></TouchableOpacity>
        <TouchableOpacity><MaterialIcons name="favorite-border" size={28} color="#9CA3AF" /></TouchableOpacity>
        <TouchableOpacity><MaterialIcons name="shopping-cart" size={28} color="#9CA3AF" /></TouchableOpacity>
        <TouchableOpacity><MaterialIcons name="person-outline" size={28} color="#9CA3AF" /></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1F2937' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#374151' },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 16 },
  headerText: { color: 'white', fontWeight: '600' },
  headerSubText: { color: '#9CA3AF', fontSize: 12 },
  searchContainer: { padding: 16, backgroundColor: '#374151', position: 'relative' },
  searchInput: { backgroundColor: '#4B5563', borderRadius: 8, paddingLeft: 40, paddingRight: 40, height: 44, color: 'white' },
  searchIcon: { position: 'absolute', left: 28, top: 26 },
  micIcon: { position: 'absolute', right: 28, top: 26 },
  bannerCarousel: { paddingLeft: 16, paddingVertical: 16 },
  bannerImage: { width: 320, height: 176, borderRadius: 12, marginRight: 12 },
  bannerGradient: { position: 'absolute', bottom: 0, left: 0, right: 12, height: '50%', borderRadius: 12 },
  bannerTitle: { position: 'absolute', bottom: 16, left: 16, color: 'white', fontWeight: 'bold', fontSize: 18 },
  section: { paddingHorizontal: 16, marginTop: 24 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  sectionTitle: { color: 'white', fontWeight: 'bold', fontSize: 20 },
  seeAll: { color: '#9CA3AF', fontSize: 14 },
  movieGrid: { justifyContent: 'space-between' },
  movieImage: { width: 100, height: 140, borderRadius: 8, marginBottom: 8 },
  movieTitle: { color: 'white', fontWeight: '600', width: 100 },
  bottomNav: { position: 'absolute', bottom: 16, left: 16, right: 16, flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#374151', borderRadius: 999, paddingVertical: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 5 }, shadowOpacity: 0.3, shadowRadius: 5, elevation: 10 },
});

export default HomeScreen;
