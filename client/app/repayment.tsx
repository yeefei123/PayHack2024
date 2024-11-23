import { useNavigation } from "expo-router";
import { SafeAreaView, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function repayment() {
  const navigation = useNavigation();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}></SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f9fb",
  },
});
