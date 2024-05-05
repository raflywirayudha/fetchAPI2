import { StyleSheet, Text, SafeAreaView } from "react-native";
import ProductListing from "./screens/ProductListing";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ProductListing />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
