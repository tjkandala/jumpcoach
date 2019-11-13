import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const WarmupScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Dynamic Warmup</Text>
      <Text style={styles.sectionContent}>You should (elaborate)</Text>
    </View>

    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Sports</Text>
      <Text style={styles.sectionContent}>
        Either play pick-up games or practice your sport for ~30 minutes
        (explain)
      </Text>
    </View>

    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => navigation.navigate("Explosive")}
    >
      <Text style={styles.buttonText}>Next</Text>
    </TouchableOpacity>
  </View>
);

WarmupScreen.navigationOptions = {
  title: "Warmup",
  headerStyle: {
    backgroundColor: "#26262B",
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold"
  }
};

export default WarmupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#000",
    width: "100%"
  },
  sectionContainer: {
    width: "90%"
  },
  sectionTitle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 12
  },
  sectionContent: {
    color: "#d3d3d3",
    textAlign: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold"
  },
  buttonContainer: {
    marginTop: 24,
    marginBottom: 16,
    padding: 16,
    overflow: "hidden",
    borderRadius: 8,
    backgroundColor: "#26262B",
    width: "90%",
    alignSelf: "center"
  }
});
