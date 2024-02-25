import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-date-picker';

const SearchBar = ({ setFDate, fDate, selected }) => {
  const [date, setDate] = useState(null); // Start with no date selected
  const [open, setOpen] = useState(false);
  const [formatted, setFormatted] = useState("");

  // Formatting date for display
  const formatDate = (date) => {
    if (!date) { // Check if date is null
      setFormatted(""); // Set formatted string to empty
      setFDate(""); // Assuming setFDate can handle empty strings or null
      return "";
    }

    let fDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    setFDate(fDate);
    setFormatted(fDate);
    return fDate;
  };

  useEffect(() => {
    formatDate(date); // Call formatDate when date changes
  }, [date]);

  return (
    <View style={styles.container}>
      <Text style={styles.selectedDateText}>
        Selected Date: {formatted || "No date selected"}
      </Text>

      {/* Custom styled button */}
      <TouchableOpacity onPress={() => setOpen(true)} style={styles.button}>
        <Text style={styles.buttonText}>Select Date</Text>
      </TouchableOpacity>

      <DatePicker
        modal
        open={open}
        date={date || new Date()} // Use current date as default if `date` is null
        onConfirm={(selectedDate) => {
          setOpen(false);
          setDate(selectedDate);
        }}
        onCancel={() => {
          setOpen(false);
          setDate(null); // Allow clearing date selection
        }}
        mode="date"
      />
    </View>
  );
};

const styles = StyleSheet.create({
   container: {
     backgroundColor: 'transparent',
     alignItems: 'center',
     justifyContent: 'center',
//      padding: 20,
   },
   selectedDateText: {
     fontSize: 16,
     color: '#fff', // Dark text for readability
//      marginBottom: 10, // Space above the button
   },
   button: {
     backgroundColor: '#007bff', // Vibrant blue background for the button
     paddingHorizontal: 20,
     paddingVertical: 10,
     borderRadius: 20, // Rounded corners
     shadowOpacity: 0.3, // Adding some shadow for depth
     shadowRadius: 5,
     shadowOffset: { width: 0, height: 2 },
     elevation: 3, // Shadow for Android
   },
   buttonText: {
     color: '#fff', // White text for contrast
     fontSize: 18,
   },
 });

export default SearchBar;
