import { Card } from "@rneui/themed";
import { useNavigation } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [text, onChangeText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();
  const [categories, setCategories] = useState([
    { label: "Low Interest Loans", value: "low-interest" },
    { label: "Quick Approval Loans", value: "quick-approval" },
    { label: "Educational Loans", value: "education" },
    { label: "Business Loans", value: "business" },
  ]);

  const handleSearch = () => {
    if (!text.trim() || !selectedCategory) {
      Alert.alert("Error", "Please enter search text and select a category.");
      return;
    }
    Alert.alert("Search Results");
  };

  const handleNavigateToBank = (cardTitle) => {
    navigation.navigate("bank", { title: cardTitle });
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Header Section with Profile Image and Title on the Same Line */}
          <View style={styles.headerContainer}>
            <Image
              source={require("../../assets/images/logo.jpg")}
              style={styles.profilePic}
            />
            <View style={styles.headerTextContainer}>
              <Text style={styles.header}>KreditKita</Text>
            </View>
          </View>
          <View>
            <Text style={styles.subheader}>
              A real-time microloan marketplace powered by Open Finance APIs
            </Text>
          </View>
          {/* Search Section */}
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.input}
              placeholder="Search for matching loans..."
              placeholderTextColor="#aaa"
              onChangeText={onChangeText}
              value={text}
            />
          </View>

          <View style={styles.itemsRow}>
            {/* Category Dropdown */}
            <View style={styles.dropdownContainer}>
              <DropDownPicker
                open={open}
                value={selectedCategory}
                items={categories}
                setOpen={setOpen}
                setValue={setSelectedCategory}
                setItems={setCategories}
                placeholder="Select a category"
                containerStyle={styles.dropdownStyle}
                style={styles.dropdown}
                dropDownStyle={styles.dropdownList}
              />
            </View>

            {/* Search Button */}
            <Pressable
              style={({ pressed }) => [
                styles.searchButton,
                pressed && { opacity: 0.8 },
              ]}
              onPress={handleSearch}
            >
              <Text style={styles.buttonLabel}>Search</Text>
            </Pressable>
          </View>

          {/* Featured Loans Section */}
          <View>
            <Text style={styles.sectionTitle}>Featured Loans</Text>
            <View style={styles.itemsRow}>
              <View style={styles.itemCard}>
                <Text style={styles.itemTitle}>Low Interest Loan</Text>
                <Text style={styles.itemPrice}>From 4.5% APR</Text>
              </View>
              <View style={styles.itemCard}>
                <Text style={styles.itemTitle}>Quick Approval Loan</Text>
                <Text style={styles.itemPrice}>Approval in 24 hours</Text>
              </View>
            </View>
          </View>

          {/* Loan Card */}
          <Pressable onPress={() => handleNavigateToBank("Public Bank")}>
            <Card containerStyle={styles.card}>
              <Card.Title style={styles.cardTitle}>Public Bank</Card.Title>
              <Card.Divider />
              <Text style={styles.cardText}>Loan Value: RM 100,000</Text>
              <Text style={styles.cardText}>Interest Rate: 3.15%</Text>
            </Card>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f9fb",
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  headerTextContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2c3e50",
    textAlign: "left",
  },
  subheader: {
    fontSize: 16,
    color: "#7f8c8d",
    textAlign: "center",
    marginBottom: 10,
  },
  searchContainer: {
    marginBottom: 10,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#bdc3c7",
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: "#fff",
    color: "#2c3e50",
    marginBottom: 15,
  },
  itemsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  dropdownContainer: {
    width: "70%",
  },
  dropdownStyle: {
    height: 50,
    width: "100%",
    zIndex: 1000,
  },
  dropdown: {
    backgroundColor: "#fff",
    borderColor: "#bdc3c7",
    borderWidth: 1,
    borderRadius: 8,
    color: "#2c3e50",
  },
  dropdownList: {
    backgroundColor: "#fff",
    borderColor: "#bdc3c7",
    borderWidth: 1,
  },
  searchButton: {
    width: "25%",
    backgroundColor: "#3498db",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 10,
  },
  itemCard: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    marginHorizontal: 5,
    borderRadius: 8,
    height: 130,
    borderWidth: 1,
    borderColor: "#bdc3c7",
    alignItems: "center",
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 8,
  },
  itemPrice: {
    fontSize: 14,
    color: "#27ae60",
    fontWeight: "bold",
  },
  card: {
    borderRadius: 8,
    padding: 15,
    marginHorizontal: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2c3e50",
    textAlign: "center",
  },
  cardText: {
    fontSize: 14,
    color: "#7f8c8d",
    marginBottom: 5,
    textAlign: "center",
  },
});
