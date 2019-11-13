import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { progressUpdateAttempt } from "../../../redux/workout/actionCreators";

const baseRepsToRecommendedReps = {
  0: "As Many Reps As Possible",
  1: "1",
  3: "3",
  5: "4 to 6",
  8: "6 to 10",
  12: "8 to 15"
};

const Exercise = ({ item, progressUpdateAttempt }) => {
  const { name, sets, _id, description, baseReps } = item;

  const [showDescription, toggleShowDescription] = useState(false);

  // ANIMATE THIS

  return (
    <View style={styles.container}>
      <Text style={styles.exercise}>{name}</Text>
      <TouchableOpacity onPress={() => toggleShowDescription(!showDescription)}>
        <Text style={styles.recommendedRepsText}>
          {showDescription ? "Hide Description" : "Show Description"}
        </Text>
      </TouchableOpacity>

      {showDescription ? (
        <>
          <Text style={styles.descriptionText}>{description}</Text>
          <Text style={styles.recommendedRepsText}>
            Recommended Reps: {baseRepsToRecommendedReps[baseReps]}
          </Text>
        </>
      ) : (
        <></>
      )}

      {Array.from({ length: sets }).map((v, i) => (
        <View key={i + 1}>
          <Text style={styles.setText}>Set #{i + 1}</Text>
          <TextInput
            autoCorrect={false}
            onChangeText={text => progressUpdateAttempt(_id, i, text)}
            placeholder="set notes"
            placeholderTextColor="#777"
            style={styles.input}
            maxLength={40}
          />
        </View>
      ))}
    </View>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  progressUpdateAttempt: (exerciseId, set, note) =>
    dispatch(progressUpdateAttempt(exerciseId, set, note))
});

const ConnectedExercise = connect(
  mapStateToProps,
  mapDispatchToProps
)(Exercise);

export default ConnectedExercise;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  exercise: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    paddingTop: 24,
    paddingBottom: 8
  },
  descriptionText: {
    color: "#d3d3d3",
    textAlign: "center",
    width: "90%",
    padding: 4,
    marginBottom: 2
  },
  recommendedRepsText: {
    color: "#777",
    textAlign: "center",
    width: "90%",
    padding: 4,
    marginBottom: 2
  },
  setText: {
    color: "#d3d3d3",
    textAlign: "center",
    padding: 2
  },
  input: {
    height: 40,
    width: 260,
    margin: 2,
    borderColor: "transparent",
    borderWidth: 1,
    borderRadius: 6,
    color: "#d3d3d3",
    backgroundColor: "#26262B",
    textAlign: "center"
  }
});
