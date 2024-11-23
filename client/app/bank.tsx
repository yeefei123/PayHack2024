import { useRoute } from "@react-navigation/native";
import { CheckBox } from "@rneui/themed";
import { useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function BankScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const { title } = route.params;

  const [agree, setAgree] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      title: title || "Bank Details",
    });
  }, [navigation, title]);

  const handleProceed = () => {
    if (agree) {
      // Proceed with the loan application or other actions
      Alert.alert("Proceeding", "You can now apply for the loan.");
    } else {
      Alert.alert("Error", "You must agree to the terms and conditions first.");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.title}>Loan Terms and Conditions</Text>

        <Text style={styles.termsText}>
          Please read the following terms and conditions carefully before
          applying for the loan:
        </Text>

        <Text style={styles.termsText}>
          1. You agree to repay the loan within the agreed period, along with
          applicable interest.
        </Text>
        <Text style={styles.termsText}>
          2. The loan amount, interest rate, and repayment schedule will be
          provided before the loan agreement.
        </Text>
        <Text style={styles.termsText}>
          3. Failure to repay the loan on time will result in additional charges
          and may affect your credit score.
        </Text>
        <Text style={styles.termsText}>
          4. The lender reserves the right to take legal action in case of
          default.
        </Text>
        <Text style={styles.termsText}>
          5. By proceeding with the loan application, you agree to the privacy
          policy and terms of service of the lender.
        </Text>

        {/* Checkbox for agreeing to terms */}
        <View style={styles.checkboxContainer}>
          <CheckBox
            checked={agree}
            onPress={() => setAgree(!agree)}
            containerStyle={styles.checkbox}
          />
          <Text style={styles.checkboxLabel}>
            I agree to the Terms and Conditions
          </Text>
        </View>

        {/* Proceed Button */}
        <View style={styles.button}>
          <Button
            title="Proceed with Loan Application"
            onPress={handleProceed}
            disabled={!agree}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  termsText: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 22,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxLabel: {
    fontSize: 16,
  },
  button: {
    backgroundColor: "blue",
    color: "#fff",
    borderRadius: 10,
  },
});
