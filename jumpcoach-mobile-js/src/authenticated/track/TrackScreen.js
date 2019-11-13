import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import VertChart from "./_VertChart";

const TrackScreen = ({ navigation }) => (
  <View style={styles.container}>
    <VertChart />

    <TouchableOpacity
      onPress={() => navigation.navigate("AddVert")}
      style={styles.buttonContainer}
    >
      <Text style={styles.buttonText}>Add New Vert Data For Today</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => navigation.navigate("PastWorkout")}
    >
      <Text style={styles.buttonText}>View Past Workouts</Text>
    </TouchableOpacity>
  </View>
);

TrackScreen.navigationOptions = {
  title: "Track Your Progress",
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

export default TrackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000"
  },
  text: {
    color: "#fff"
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold"
  },
  buttonContainer: {
    marginTop: 16,
    marginBottom: 16,
    padding: 16,
    overflow: "hidden",
    borderRadius: 8,
    backgroundColor: "#26262B",
    width: "90%",
    alignSelf: "center"
  }
});
