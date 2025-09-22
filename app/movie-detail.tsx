import { MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useRouter } from 'expo-router';

import { useLocalSearchParams } from 'expo-router';

const MovieDetailScreen = () => {
  const router = useRouter();
  const { title } = useLocalSearchParams<{ title: string }>();
const movieImages: { [key: string]: any } = {
  "Atlas": require('../All images/Movies and names/Atlas.jpg'),
  "Bad Boys Ride or Die": require('../All images/Movies and names/Bad Boys Ride or Die.jpg'),
  "Bad Boys": require('../All images/Movies and names/Bad Boys.jpg'),
  "Dune Part Two": require('../All images/Movies and names/Dune Part Two.jpg'),
  "Fly Me to the Moon": require('../All images/Movies and names/Fly Me to the Moon.jpg'),
  "Furiosa": require('../All images/Movies and names/Furiosa.jpg'),
  "Godzilla X Kong": require('../All images/Movies and names/Godzilla X Kong.jpg'),
  "hu40Uxp9WtpL34jv3zyWLb5zEVY": require('../All images/Movies and names/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg'),
  "Kung Fu Panda 4": require('../All images/Movies and names/Kung Fu Panda 4.jpg'),
  "Ordinary Angels": require('../All images/Movies and names/Ordinary Angels.jpg'),
  "Rebel Moon": require('../All images/Movies and names/Rebel Moon.jpg'),
  "The Bitch": require('../All images/Movies and names/The Bitch.jpg'),
  "The Fall Guy": require('../All images/Movies and names/The Fall Guy.jpg'),
  "The Gorge": require('../All images/Movies and names/The Gorge.jpg'),
};
  const [cast, setCast] = useState<{ id: string; name: string; image: any }[]>([]);

  const actorData = [
    { id: '0', name: "Aaron Taylor-Johnson", image: require('../All images/actor/Aaron Taylor-Johnson.jpg') },
    { id: '1', name: "Alan Ritchson", image: require('../All images/actor/Alan Ritchson.jpg') },
    { id: '2', name: "Alexander Ludwig", image: require('../All images/actor/Alexander Ludwig.jpg') },
    { id: '3', name: "Alvaro-Morte", image: require('../All images/actor/Alvaro-Morte.png') },
    { id: '4', name: "Anya Taylor", image: require('../All images/actor/Anya Taylor.png') },
    { id: '5', name: "Awkwafina", image: require('../All images/actor/Awkwafina.png') },
    { id: '6', name: "Benedetta-Porcaroli", image: require('../All images/actor/Benedetta-Porcaroli.png') },
    { id: '7', name: "Brian-Tyree-Henry", image: require('../All images/actor/Brian-Tyree-Henry.png') },
    { id: '8', name: "Channing Tatum", image: require('../All images/actor/Channing Tatum.jpg') },
    { id: '9', name: "Colm-Meaney", image: require('../All images/actor/Colm-Meaney.png') },
    { id: '10', name: "Dan-Stevens", image: require('../All images/actor/Dan-Stevens.png') },
    { id: '11', name: "Djimon-Hounsou", image: require('../All images/actor/Djimon-Hounsou.png') },
    { id: '12', name: "Don Mike", image: require('../All images/actor/Don Mike.jpg') },
    { id: '13', name: "Dustin-Hoffman", image: require('../All images/actor/Dustin-Hoffman.png') },
    { id: '14', name: "Ed-Skrein", image: require('../All images/actor/Ed-Skrein.png') },
    { id: '15', name: "Emily Blunt", image: require('../All images/actor/Emily Blunt.jpg') },
    { id: '16', name: "Gianni-Capaldi", image: require('../All images/actor/Gianni-Capaldi.png') },
    { id: '17', name: "Greg Cohan", image: require('../All images/actor/Greg Cohan.jpg') },
    { id: '18', name: "Hannah Waddingham", image: require('../All images/actor/Hannah Waddingham.jpg') },
    { id: '19', name: "Hilary Swank", image: require('../All images/actor/Hilary Swank.jpg') },
    { id: '20', name: "Jack-Black", image: require('../All images/actor/Jack-Black.png') },
    { id: '21', name: "Javier Bardem", image: require('../All images/actor/Javier Bardem.jpg') },
    { id: '22', name: "Jennifer Lopez", image: require('../All images/actor/Jennifer Lopez.jpg') },
    { id: '23', name: "Jeremias-Amoore", image: require('../All images/actor/Jeremias-Amoore.png') },
    { id: '24', name: "Kaylee-Hottle", image: require('../All images/actor/Kaylee-Hottle.png') },
    { id: '25', name: "Laura-Haddock", image: require('../All images/actor/Laura-Haddock.png') },
    { id: '26', name: "Martin Lawrence (Copy)", image: require('../All images/actor/Martin Lawrence - Copy.jpg') },
    { id: '27', name: "Martin Lawrence", image: require('../All images/actor/Martin Lawrence.jpg') },
    { id: '28', name: "Michiel-Huisman", image: require('../All images/actor/Michiel-Huisman.png') },
    { id: '29', name: "Miles Teller", image: require('../All images/actor/Miles Teller.png') },
    { id: '30', name: "Ray Romano", image: require('../All images/actor/Ray Romano.jpg') },
    { id: '31', name: "Rebecca Ferguson", image: require('../All images/actor/Rebecca Ferguson.jpg') },
    { id: '32', name: "Rebecca-Hall", image: require('../All images/actor/Rebecca-Hall.png') },
    { id: '33', name: "Romain-Duris", image: require('../All images/actor/Romain-Duris.png') },
    { id: '34', name: "Ryan Gosling", image: require('../All images/actor/Ryan Gosling.jpg') },
    { id: '35', name: "Samuel-L.-Jackson", image: require('../All images/actor/Samuel-L.-Jackson.png') },
    { id: '36', name: "Scarlett Johansson", image: require('../All images/actor/Scarlett Johansson.jpg') },
    { id: '37', name: "Sigourney Weaver", image: require('../All images/actor/Sigourney Weaver.png') },
    { id: '38', name: "Simona-Tabasco", image: require('../All images/actor/Simona-Tabasco.png') },
    { id: '39', name: "Simu Liu", image: require('../All images/actor/Simu Liu.jpg') },
    { id: '40', name: "Sofia-Boutella", image: require('../All images/actor/Sofia-Boutella.png') },
    { id: '41', name: "Sope Dirisu", image: require('../All images/actor/Sope Dirisu.png') },
    { id: '42', name: "Sophie-McIntosh", image: require('../All images/actor/Sophie-McIntosh.png') },
    { id: '43', name: "Sterling Brown", image: require('../All images/actor/Sterling Brown.jpg') },
    { id: '44', name: "Sydney-Sweeney", image: require('../All images/actor/Sydney-Sweeney.png') },
    { id: '45', name: "Tamala Jones", image: require('../All images/actor/Tamala Jones.jpg') },
    { id: '46', name: "Timothée Chalamet", image: require('../All images/actor/Timothée Chalamet.jpg') },
    { id: '47', name: "Vanessa Hudgens", image: require('../All images/actor/Vanessa Hudgens.jpg') },
    { id: '48', name: "Vincent-Cassel", image: require('../All images/actor/Vincent-Cassel.png') },
    { id: '49', name: "Viola-Davis", image: require('../All images/actor/Viola-Davis.png') },
    { id: '50', name: "Will Smith", image: require('../All images/actor/Will Smith.jpg') },
    { id: '51', name: "Will-Attenborough", image: require('../All images/actor/Will-Attenborough.png') },
    { id: '52', name: "Woody Harrelson", image: require('../All images/actor/Woody Harrelson.jpg') },
    { id: '53', name: "Zendaya", image: require('../All images/actor/Zendaya.jpg') },
  ];

  useEffect(() => {
    const fetchCast = async () => {
      const numActors = Math.floor(Math.random() * 2) + 4; // Random number between 4 and 5
      const selectedActors = [];
      const usedIndices = new Set<number>();
      
      while (selectedActors.length < numActors && usedIndices.size < actorData.length) {
        const randomIndex = Math.floor(Math.random() * actorData.length);
        if (!usedIndices.has(randomIndex)) {
          usedIndices.add(randomIndex);
          selectedActors.push({
            ...actorData[randomIndex],
            id: `cast-${selectedActors.length}-${actorData[randomIndex].id}` // Ensure unique key
          });
        }
      }
      setCast(selectedActors);
    };
    fetchCast();
  }, []);

  const renderCastItem = ({ item }: { item: { id: string; name: string; image: any } }) => {
    return (
      <View style={styles.castItem}>
        <Image source={item.image} style={styles.castImage} />
        <Text style={styles.castName}>{item.name}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageBackground
          style={styles.banner}
          source={movieImages[title]}
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
            <Text style={styles.title}>{title}</Text>
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
              keyExtractor={(item: { id: string }) => item.id}
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
