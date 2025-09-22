
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const carouselImages = [
  { id: '1', title: 'Carousel Image', image: require('../All images/Sliding Carousel/wide.jpg') },
  { id: '2', title: 'Carousel Image', image: require('../All images/Sliding Carousel/wide1.jpg') },
  { id: '3', title: 'Carousel Image', image: require('../All images/Sliding Carousel/wide3.jpg') },
  { id: '4', title: 'Carousel Image', image: require('../All images/Sliding Carousel/wide4.jpg') },
];

const movieImages = [
  { id: '1', title: 'Atlas', image: require('../All images/Movies and names/Atlas.jpg') },
  { id: '2', title: 'Bad Boys Ride or Die', image: require('../All images/Movies and names/Bad Boys Ride or Die.jpg') },
  { id: '3', title: 'Bad Boys', image: require('../All images/Movies and names/Bad Boys.jpg') },
  { id: '4', title: 'Dune Part Two', image: require('../All images/Movies and names/Dune Part Two.jpg') },
  { id: '5', title: 'Fly Me to the Moon', image: require('../All images/Movies and names/Fly Me to the Moon.jpg') },
  { id: '6', title: 'Furiosa', image: require('../All images/Movies and names/Furiosa.jpg') },
  { id: '7', title: 'Godzilla X Kong', image: require('../All images/Movies and names/Godzilla X Kong.jpg') },
  { id: '8', title: 'Kung Fu Panda 4', image: require('../All images/Movies and names/Kung Fu Panda 4.jpg') },
  { id: '9', title: 'Ordinary Angels', image: require('../All images/Movies and names/Ordinary Angels.jpg') },
  { id: '10', title: 'Rebel Moon', image: require('../All images/Movies and names/Rebel Moon.jpg') },
  { id: '11', title: 'The Bitch', image: require('../All images/Movies and names/The Bitch.jpg') },
  { id: '12', title: 'The Fall Guy', image: require('../All images/Movies and names/The Fall Guy.jpg') },
    { id: '13', title: 'The Gorge', image: require('../All images/Movies and names/The Gorge.jpg') },
];

const movies = {
  top: movieImages,
  upcoming: movieImages,
  banner: carouselImages,
};

import { useRouter } from 'expo-router';

const HomeScreen = () => {
  const router = useRouter();
  const renderMovieItem = ({ item }: { item: { id: string; title: string; image: any } }) => (
    <TouchableOpacity onPress={() => router.push(`/movie-detail?title=${item.title}`)}>
      <Image source={item.image} style={styles.movieImage} />
      <Text style={styles.movieTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderBannerItem = ({ item }: { item: { id: string; title: string; image: any } }) => (
    <TouchableOpacity onPress={() => router.push('/movie-detail')}>
      <Image source={item.image} style={styles.bannerImage} />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.7)']}
        style={styles.bannerGradient}
      />
      <Text style={styles.bannerTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={movies.upcoming}
        renderItem={renderMovieItem}
        keyExtractor={(item: { id: string }) => item.id}
        numColumns={3}
        columnWrapperStyle={styles.movieGrid}
        ListHeaderComponent={
          <>
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
              keyExtractor={(item: { id: string }) => item.id}
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
                keyExtractor={(item: { id: string }) => item.id}
                numColumns={3}
                columnWrapperStyle={styles.movieGrid}
                scrollEnabled={false}
              />
            </View>

            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Upcoming Movies</Text>
              <TouchableOpacity>
                <Text style={styles.seeAll}>See all</Text>
              </TouchableOpacity>
            </View>
          </>
        }
        ListFooterComponent={
          <View style={styles.bottomNavContainer}>
            <View style={styles.bottomNav}>
              <TouchableOpacity><MaterialIcons name="explore" size={28} color="#9CA3AF" /></TouchableOpacity>
              <TouchableOpacity><MaterialIcons name="favorite-border" size={28} color="#9CA3AF" /></TouchableOpacity>
              <TouchableOpacity><MaterialIcons name="shopping-cart" size={28} color="#9CA3AF" /></TouchableOpacity>
              <TouchableOpacity><MaterialIcons name="person-outline" size={28} color="#9CA3AF" /></TouchableOpacity>
            </View>
          </View>
        }
        contentContainerStyle={styles.mainContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1F2937' },
  mainContent: { paddingBottom: 100 },
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
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, paddingHorizontal: 16 },
  sectionTitle: { color: 'white', fontWeight: 'bold', fontSize: 20 },
  seeAll: { color: '#9CA3AF', fontSize: 14 },
  movieGrid: { justifyContent: 'space-between', paddingHorizontal: 16 },
  movieImage: { width: 100, height: 140, borderRadius: 8, marginBottom: 8 },
  movieTitle: { color: 'white', fontWeight: '600', width: 100 },
  bottomNavContainer: { padding: 16, marginTop: 24 },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#374151', borderRadius: 999, paddingVertical: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 5 }, shadowOpacity: 0.3, shadowRadius: 5, elevation: 10 },
});

export default HomeScreen;
