
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

const dates = [ { day: 'Sun', date: '07 Sep' }, { day: 'Mon', date: '08 Sep' }, { day: 'Tue', date: '09 Sep' }, { day: 'Wed', date: '10 Sep' }, { day: 'Thu', date: '11 Sep' }];
const times = ['06:00 AM', '08:00 AM', '10:00 AM', '12:00 PM', '02:00 PM'];
const initialSeats = [
  ['u','a','u','u','u','u','u','u'],
  ['u','s','u','u','u','u','u','a'],
  ['u','s','u','u','u','a','u','u'],
  ['u','u','u','s','a','u','u','a'],
  ['u','s','u','u','u','u','s','u'],
  ['u','u','a','a','u','s','u','u'],
  ['u','u','s','u','u','u','u','u'],
];

import { useRouter } from 'expo-router';

const SeatSelectionScreen = () => {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState('08 Sep');
  const [selectedTime, setSelectedTime] = useState('12:00 PM');
  const [seats, setSeats] = useState(initialSeats);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (row, col) => {
    const newSeats = [...seats];
    const seat = newSeats[row][col];
    const seatName = `${String.fromCharCode(65 + row)}${col + 1}`;

    if (seat === 'a') {
      newSeats[row][col] = 's';
      setSelectedSeats([...selectedSeats, seatName]);
    } else if (seat === 's') {
      newSeats[row][col] = 'a';
      setSelectedSeats(selectedSeats.filter(s => s !== seatName));
    }
    setSeats(newSeats);
  };

  const renderDate = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedDate(item.date)}>
      <View style={[styles.dateItem, selectedDate === item.date && styles.selectedDateItem]}>
        <Text style={[styles.dateDay, selectedDate === item.date && styles.selectedDateText]}>{item.day}</Text>
        <Text style={[styles.dateText, selectedDate === item.date && styles.selectedDateText]}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderTime = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedTime(item)}>
      <View style={[styles.timeItem, selectedTime === item && styles.selectedTimeItem]}>
        <Text style={[styles.timeText, selectedTime === item && styles.selectedTimeText]}>{item}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderSeat = ({ item, index }) => {
    const row = Math.floor(index / 8);
    const col = index % 8;
    const status = seats[row][col];
    let seatStyle = styles.seatAvailable;
    if (status === 'u') seatStyle = styles.seatUnavailable;
    if (status === 's') seatStyle = styles.seatSelected;

    return (
      <TouchableOpacity onPress={() => toggleSeat(row, col)} disabled={status === 'u'}>
        <View style={[styles.seat, seatStyle]}>
          {status === 's' && <Text style={styles.seatSelectedText}>{`${String.fromCharCode(65 + row)}${col + 1}`}</Text>}
        </View>
      </TouchableOpacity>
    );
  };

  const totalPrice = selectedSeats.length * 120;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><MaterialIcons name="arrow-back" size={24} color="white" /></TouchableOpacity>
        <Text style={styles.headerTitle}>Selected Seats</Text>
        <View style={{ width: 24 }} />
      </View>
      <ScrollView>
        <View style={styles.pickerContainer}>
          <FlatList horizontal data={dates} renderItem={renderDate} keyExtractor={item => item.date} showsHorizontalScrollIndicator={false} />
        </View>
        <View style={styles.pickerContainer}>
          <FlatList horizontal data={times} renderItem={renderTime} keyExtractor={item => item} showsHorizontalScrollIndicator={false} />
        </View>

        <View style={styles.screenContainer}>
          <View style={styles.screenLine} />
          <Text style={styles.screenText}>SCREEN</Text>
        </View>

        <View style={styles.seatGrid}>
          <FlatList
            data={seats.flat()}
            renderItem={renderSeat}
            keyExtractor={(item, index) => index.toString()}
            numColumns={8}
          />
        </View>

        <View style={styles.legendContainer}>
            <View style={styles.legendItem}><View style={[styles.legendBox, styles.seatAvailable]} /><Text style={styles.legendText}>Available</Text></View>
            <View style={styles.legendItem}><View style={[styles.legendBox, styles.seatSelected]} /><Text style={styles.legendText}>Selected</Text></View>
            <View style={styles.legendItem}><View style={[styles.legendBox, styles.seatUnavailable]} /><Text style={styles.legendText}>Unavailable</Text></View>
        </View>

        <View style={styles.selectedSeatsContainer}>
            <Text style={styles.selectedSeatsTitle}>Selected Seats</Text>
            <View style={styles.selectedSeatsList}>
                {selectedSeats.map(seat => <Text key={seat} style={styles.selectedSeat}>{`Seat ${seat}`}</Text>)}
            </View>
        </View>

      </ScrollView>
      <View style={styles.footer}>
        <View>
          <Text style={styles.priceText}>${totalPrice.toFixed(1)}</Text>
          <Text style={styles.seatCountText}>{selectedSeats.length} Seat Selected</Text>
        </View>
        <TouchableOpacity style={styles.downloadButton} onPress={() => router.push('/checkout-confirmation')}>
          <Text style={styles.downloadButtonText}>DOWNLOAD TICKET</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111827' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#1F2937' },
  headerTitle: { flex: 1, textAlign: 'center', color: 'white', fontSize: 20, fontWeight: 'bold' },
  pickerContainer: { paddingHorizontal: 16, paddingVertical: 8 },
  dateItem: { alignItems: 'center', marginRight: 12, padding: 12, borderRadius: 8, backgroundColor: '#1F2937' },
  selectedDateItem: { backgroundColor: '#F97316' },
  dateDay: { color: '#9CA3AF', fontSize: 14 },
  dateText: { color: 'white', fontSize: 14 },
  selectedDateText: { color: 'white' },
  timeItem: { paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8, backgroundColor: '#1F2937', marginRight: 8 },
  selectedTimeItem: { backgroundColor: '#FBBF24' },
  timeText: { color: 'white', fontSize: 14 },
  selectedTimeText: { color: 'black' },
  screenContainer: { alignItems: 'center', marginVertical: 24 },
  screenLine: { width: '80%', height: 3, backgroundColor: '#22C55E', borderRadius: 3, borderTopLeftRadius: 0, borderTopRightRadius: 0, transform: [{ perspective: 100 }, { rotateX: '-30deg' }] },
  screenText: { color: '#9CA3AF', marginTop: 4, fontSize: 12 },
  seatGrid: { paddingHorizontal: 24, alignItems: 'center' },
  seat: { width: 28, height: 28, borderRadius: 4, margin: 4, justifyContent: 'center', alignItems: 'center' },
  seatAvailable: { backgroundColor: '#4B5563' },
  seatUnavailable: { backgroundColor: '#374151' },
  seatSelected: { backgroundColor: '#3B82F6' },
  seatSelectedText: { color: 'white', fontSize: 10, fontWeight: 'bold' },
  legendContainer: { flexDirection: 'row', justifyContent: 'space-around', padding: 16, marginTop: 16 },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  legendBox: { width: 16, height: 16, borderRadius: 2 },
  legendText: { color: '#9CA3AF', fontSize: 12 },
  selectedSeatsContainer: { padding: 16 },
  selectedSeatsTitle: { color: 'white', fontSize: 16, fontWeight: '600', marginBottom: 8 },
  selectedSeatsList: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  selectedSeat: { color: '#9CA3AF', fontSize: 14 },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, backgroundColor: '#1F2937', borderTopWidth: 1, borderTopColor: '#374151' },
  priceText: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  seatCountText: { color: '#9CA3AF', fontSize: 12 },
  downloadButton: { backgroundColor: '#22C55E', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 8 },
  downloadButtonText: { color: 'white', fontWeight: '600' },
});

export default SeatSelectionScreen;
