import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CompletedExercise = ({ exercise }) => {
  const { name, recordedSets } = exercise;

  return (
    <View>
      <Text style={styles.exercise}>{name}</Text>
      {recordedSets.map((setNote, i) => (
        <View key={i + 1} style={styles.setContainer}>
          <Text style={styles.text}>
            Set #{i + 1}: {setNote}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default CompletedExercise;

const styles = StyleSheet.create({
  exercise: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    paddingTop: 12,
    paddingBottom: 12
  },
  text: {
    color: "#d3d3d3",
    textAlign: "center"
  },
  setContainer: {
    paddingBottom: 6
  }
});
