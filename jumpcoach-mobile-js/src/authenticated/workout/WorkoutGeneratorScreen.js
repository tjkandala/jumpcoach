import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import {
  fetchWorkout,
  quitWorkout
} from "../../../redux/workout/actionCreators";

const WorkoutGeneratorScreen = ({
  workingOut,
  fetchWorkout,
  quitWorkout,
  navigation
}) => {
  const [advanced, setAdvanced] = useState(true);
  const [equipment, setEquipment] = useState(true);
  const [readiness, setReadiness] = useState(0);
  const [recent, setRecent] = useState(false);

  return (
    <View style={styles.container}>
      {workingOut ? (
        <TouchableOpacity
          style={styles.quitWorkoutContainer}
          onPress={quitWorkout}
        >
          <Text style={styles.buttonText}>Quit Workout</Text>
        </TouchableOpacity>
      ) : (
        <></>
      )}

      {workingOut ? (
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("Warmup")}
        >
          <Text style={styles.buttonText}>Go To Workout!</Text>
        </TouchableOpacity>
      ) : (
        <>
          <View style={styles.readinessQuestionContainer}>
            <Text style={styles.questionText}>
              Enable Intermediate/Advanced Exercises?
            </Text>
            <View style={styles.readinessAnswers}>
              <TouchableOpacity
                style={
                  advanced
                    ? styles.enabledAnswerContainer
                    : styles.disabledAnswerContainer
                }
                onPress={() => setAdvanced(true)}
              >
                <Text style={styles.answerText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  advanced
                    ? styles.disabledAnswerContainer
                    : styles.enabledAnswerContainer
                }
                onPress={() => setAdvanced(false)}
              >
                <Text style={styles.answerText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.readinessQuestionContainer}>
            <Text style={styles.questionText}>
              Do you have access to gym equipment?
            </Text>
            <View style={styles.readinessAnswers}>
              <TouchableOpacity
                style={
                  equipment
                    ? styles.enabledAnswerContainer
                    : styles.disabledAnswerContainer
                }
                onPress={() => setEquipment(true)}
              >
                <Text style={styles.answerText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  equipment
                    ? styles.disabledAnswerContainer
                    : styles.enabledAnswerContainer
                }
                onPress={() => setEquipment(false)}
              >
                <Text style={styles.answerText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.readinessQuestionContainer}>
            <Text style={styles.questionText}>How do you feel?</Text>
            <View style={styles.readinessAnswers}>
              <TouchableOpacity
                style={
                  readiness === -1
                    ? styles.enabledAnswerContainer
                    : styles.disabledAnswerContainer
                }
                onPress={() => setReadiness(-1)}
              >
                <Text style={styles.answerText}>Lethargic</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  readiness === 0
                    ? styles.enabledAnswerContainer
                    : styles.disabledAnswerContainer
                }
                onPress={() => setReadiness(0)}
              >
                <Text style={styles.answerText}>Alright</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  readiness === 1
                    ? styles.enabledAnswerContainer
                    : styles.disabledAnswerContainer
                }
                onPress={() => setReadiness(1)}
              >
                <Text style={styles.answerText}>Pumped</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.readinessQuestionContainer}>
            <Text style={styles.questionText}>
              Have you completed a JumpCoach workout or other intense lower body
              workout in the last two days?
            </Text>
            <View style={styles.readinessAnswers}>
              <TouchableOpacity
                style={
                  recent
                    ? styles.enabledAnswerContainer
                    : styles.disabledAnswerContainer
                }
                onPress={() => setRecent(true)}
              >
                <Text style={styles.answerText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  recent
                    ? styles.disabledAnswerContainer
                    : styles.enabledAnswerContainer
                }
                onPress={() => setRecent(false)}
              >
                <Text style={styles.answerText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => fetchWorkout(readiness, equipment, advanced)}
          >
            <Text style={styles.buttonText}>Generate Workout</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

WorkoutGeneratorScreen.navigationOptions = {
  title: "Workout Generator",
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

const mapStateToProps = state => ({
  workingOut: state.workout.workingOut
});

const mapDispatchToProps = dispatch => ({
  fetchWorkout: (readiness, equipment, advanced) =>
    dispatch(fetchWorkout(readiness, equipment, advanced)),
  quitWorkout: () => dispatch(quitWorkout())
});

const ConnectedWorkoutGeneratorScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutGeneratorScreen);

export default ConnectedWorkoutGeneratorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#000",
    alignSelf: "stretch"
  },
  readinessQuestionContainer: {
    marginTop: 16,
    marginBottom: 16,
    width: "90%"
  },
  text: {
    color: "#d3d3d3"
  },
  readinessAnswers: {
    flexDirection: "row"
  },
  disabledAnswerContainer: {
    padding: 12,
    backgroundColor: "#0F1012",
    borderRadius: 8,
    marginRight: 6
  },
  enabledAnswerContainer: {
    padding: 12,
    backgroundColor: "#26262B",
    borderRadius: 8,
    marginRight: 6
  },
  answerText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold"
  },
  questionText: {
    color: "#d3d3d3",
    marginBottom: 8,
    fontWeight: "bold"
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
  },
  quitWorkoutContainer: {
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
