import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-date-picker';
import axios from "axios"

const SearchBar = ({ setFDate, fDate, selected, setPrice, formatted, setFormatted }) => {
  const [date, setDate] = useState(null);
  const [open, setOpen] = useState(false);

  const fetchPrediction = async (date, selected) => {
    const payload = {
            date: date,
            selected: selected,
        };

        try {
            const response = await axios.post('http://10.0.2.2:3001/predict', payload);
            console.log('Prediction Response:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching prediction:', error.response ? error.response.data : error.message);
        }

  }


  const formatDate = (date) => {
    if (!date) {
      setFormatted("");
      setFDate("");
      return "";
    }

    let fDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    setFDate(fDate);
    setFormatted(fDate);
    return fDate;
  };

  useEffect(() => {
    formatDate(date);
//     console.log(`fdate: ${formatted}`)

    const getPrediction = async () => {
          const predictionData = await fetchPrediction(formatted, selected);
          if (predictionData && predictionData.predicted_price) {
            console.log(predictionData.predicted_price);
            setPrice(Math.floor(predictionData.predicted_price));
          }
        };

        getPrediction();

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
     fontSize: 15,
     color: '#fff', // Dark text for readability
//      marginBottom: 10, // Space above the button
   },
   button: {
     backgroundColor: '#5D3FD3', // Vibrant blue background for the button
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
     fontSize: 16,
   },
 });

export default SearchBar;