import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

interface BookingsProps {}

const Bookings = (props: BookingsProps) => {
  const [bookings, setBookings] = React.useState([]);

  React.useEffect(() => {
    // This effect can be used for any setup needed when the component mounts
    console.log('Bookings component mounted');
    fetch('http://localhost:3000/bookings')
      .then((response) => response.json())
      .then((data) => setBookings(data));
    
    // Cleanup function if needed
    return () => {
      console.log('Bookings component unmounted');
    };
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={bookings}
        renderItem={({ item }) => <Text>{item.propertyId}</Text>}
        />
    </View>
  );
};

export default Bookings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  }
});
