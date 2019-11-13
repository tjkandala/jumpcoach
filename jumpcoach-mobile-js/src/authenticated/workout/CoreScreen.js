import React from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { coreExerciseSelector } from "../../../redux/workout/reducer";
import Exercise from "./_Exercise";
import { completeWorkoutAttempt } from "../../../redux/workout/actionCreators";

const CoreScreen = ({ navigation, exercises, completeWorkoutAttempt }) => (
  <View style={styles.container}>
    <FlatList
      data={exercises}
      style={{ alignSelf: "stretch" }}
      renderItem={({ item }) => <Exercise item={item} />}
      keyExtractor={item => item._id}
      ListFooterComponent={
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            completeWorkoutAttempt();
            navigation.push("Summary");
          }}
        >
          <Text style={styles.buttonText}>Complete</Text>
        </TouchableOpacity>
      }
    />
  </View>
);

CoreScreen.navigationOptions = {
  title: "Core Exercises",
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
  exercises: coreExerciseSelector(state)
});

const mapDispatchToProps = dispatch => ({
  completeWorkoutAttempt: () => dispatch(completeWorkoutAttempt())
});

const ConnectedCoreScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(CoreScreen);

export default ConnectedCoreScreen;

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
