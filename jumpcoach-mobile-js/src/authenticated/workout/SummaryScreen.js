import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { StackActions, NavigationActions } from "react-navigation";
import { confirmWorkoutSummary } from "../../../redux/workout/actionCreators";

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "WorkoutGenerator" })]
});

const SummaryScreen = ({ navigation, confirmWorkoutSummary }) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      Congrats! You have completed a JumpCoach Workout!
    </Text>

    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => {
        navigation.dispatch(resetAction);
        confirmWorkoutSummary();
      }}
    >
      <Text style={styles.buttonText}>Confirm</Text>
    </TouchableOpacity>
  </View>
);

SummaryScreen.navigationOptions = {
  title: "Workout Summary",
  headerLeft: null,
  gesturesEnabled: false,
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  confirmWorkoutSummary: () => dispatch(confirmWorkoutSummary())
});

const ConnectedSummaryScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(SummaryScreen);

export default ConnectedSummaryScreen;

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
    marginBottom: 8,
    padding: 16,
    overflow: "hidden",
    borderRadius: 8,
    backgroundColor: "#26262B",
    width: "90%",
    alignSelf: "center"
  }
});
