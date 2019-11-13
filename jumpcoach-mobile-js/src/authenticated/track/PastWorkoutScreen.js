import React from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { selectCompletedWorkouts } from "../../../redux/workoutHistory/reducer";
import { syncPastWorkouts } from "../../../redux/workoutHistory/actionCreators";

const PastWorkoutScreen = ({
  navigation,
  completedWorkouts,
  syncPastWorkouts
}) => (
  <View style={styles.container}>
    <FlatList
      data={completedWorkouts}
      style={{ alignSelf: "stretch" }}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() =>
            navigation.navigate("PastWorkoutSummary", { workoutId: item._id })
          }
        >
          <Text style={styles.buttonText}>{formatDate(item.date)}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={item => item._id}
      ListHeaderComponent={
        <>
          <Button onPress={syncPastWorkouts} title="sync with other devices" />
        </>
      }
    />
  </View>
);

PastWorkoutScreen.navigationOptions = {
  title: "Past Workouts",
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
  completedWorkouts: selectCompletedWorkouts(state)
});

const mapDispatchToProps = dispatch => ({
  syncPastWorkouts: () => dispatch(syncPastWorkouts())
});

const ConnectedPastWorkoutScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(PastWorkoutScreen);

export default ConnectedPastWorkoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000"
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold"
  },
  buttonContainer: {
    marginTop: 8,
    marginBottom: 8,
    padding: 16,
    overflow: "hidden",
    borderRadius: 8,
    backgroundColor: "#26262B",
    width: "90%",
    alignSelf: "center"
  }
});

const formatDate = (date = new Date()) => {
  const dateObject = new Date(date);
  const formattedDate = `${dateObject.getMonth() +
    1}-${dateObject.getDate()}-${dateObject.getFullYear()}`;

  return formattedDate;
};
