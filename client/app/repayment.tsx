import Slider from "@react-native-community/slider";
import { useNavigation } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Repayment() {
  const [sliderValue, setSliderValue] = useState(0); // State to store the slider value
  const navigation = useNavigation();

  const handleSliderChange = (value) => {
    setSliderValue(value); // Update the slider value
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.sliderContainer}>
          <Text style={styles.label}>Set Repayment Amount</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#1E90FF"
            maximumTrackTintColor="#B0C4DE"
            onValueChange={handleSliderChange}
            value={sliderValue}
          />
          <Text style={styles.valueText}>{`Value: ${sliderValue.toFixed(
            2
          )}%`}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Set Repayment Amount</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  sliderContainer: {
    width: "80%",
    alignItems: "center",
    marginBottom: 30,
  },
  slider: {
    width: "100%",
    height: 40,
  },
  label: {
    fontSize: 18,
    color: "#333",
    marginBottom: 10,
    fontWeight: "600",
  },
  valueText: {
    fontSize: 16,
    color: "#333",
    marginTop: 20,
    fontWeight: "500",
  },
  buttonContainer: {
    width: "auto",
    alignItems: "center",
    marginTop: 30,
  },
  button: {
    backgroundColor: "#1E90FF",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
