import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { explosiveExerciseSelector } from "../../../redux/workout/reducer";
import Exercise from "./_Exercise";

const ExplosiveScreen = ({ navigation, exercises }) => (
  <View style={styles.container}>
    <FlatList
      data={exercises}
      style={{ alignSelf: "stretch" }}
      renderItem={({ item }) => <Exercise item={item} />}
      keyExtractor={item => item._id}
      ListFooterComponent={
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("Strength")}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      }
    />
    {/* <Button title="next" onPress={() => navigation.navigate("Strength")} /> */}
  </View>
);

ExplosiveScreen.navigationOptions = {
  title: "Explosive Exercises",
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
  exercises: explosiveExerciseSelector(state)
});

const mapDispatchToProps = dispatch => ({});

const ConnectedExplosiveScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExplosiveScreen);

export default ConnectedExplosiveScreen;

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
