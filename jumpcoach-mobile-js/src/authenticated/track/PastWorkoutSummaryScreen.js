import React from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { connect } from "react-redux";
import CompletedExercise from "./_CompletedExercise";

const PastWorkoutSummaryScreen = ({ navigation, completedWorkout }) => (
  <View style={styles.container}>
    <FlatList
      data={completedWorkout.workout}
      style={{ alignSelf: "stretch" }}
      renderItem={({ item }) => <CompletedExercise exercise={item} />}
      keyExtractor={item => item._id}
      ListHeaderComponent={
        <Text style={styles.title}>
          Your JumpCoach workout on {completedWorkout.date.slice(0, 10)}
        </Text>
      }
    />
  </View>
);

PastWorkoutSummaryScreen.navigationOptions = {
  title: "Past Workout Summary",
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

const mapStateToProps = (state, ownProps) => ({
  completedWorkout: state.workoutHistory.find(
    completedWorkout =>
      completedWorkout._id === ownProps.navigation.state.params.workoutId
  )
});

const mapDispatchToProps = dispatch => ({});

const ConnectedPastWorkoutSummaryScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(PastWorkoutSummaryScreen);

export default ConnectedPastWorkoutSummaryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    width: "100%"
  },
  text: {
    color: "#fff"
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
    padding: 16,
    overflow: "hidden",
    borderRadius: 8,
    backgroundColor: "#26262B",
    width: "90%",
    textAlign: "center",
    alignSelf: "center"
  }
});

const formatDate = (date = new Date()) => {
  const dateObject = new Date(date);
  const formattedDate = `${dateObject.getMonth() +
    1}-${dateObject.getDate()}-${dateObject.getFullYear()}`;

  return formattedDate;
};
