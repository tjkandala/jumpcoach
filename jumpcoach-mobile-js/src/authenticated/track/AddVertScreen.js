import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { addVertDataAttempt } from "../../../redux/vertHistory/actionCreators";
import { StackActions, NavigationActions } from "react-navigation";

// make confirm screen first, move this there!
const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "Track" })]
});

const AddVertScreen = ({ navigation, addVertDataAttempt }) => {
  const [standingVertical, setStandingVertical] = useState(0);
  const [maxVertical, setMaxVertical] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Vertical on {formatDate()}</Text>

      <Text style={styles.text}>standingVertical: {standingVertical}</Text>
      <Text style={styles.text}>maxVertical: {maxVertical}</Text>

      <TextInput
        autoCorrect={false}
        style={styles.input}
        onChangeText={setStandingVertical}
        placeholder="Standing Vertical"
        placeholderTextColor="#777"
      />
      <TextInput
        autoCorrect={false}
        style={styles.input}
        onChangeText={setMaxVertical}
        placeholder="Max Vertical"
        placeholderTextColor="#777"
      />

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          addVertDataAttempt(standingVertical, maxVertical);
          navigation.dispatch(resetAction);
        }}
      >
        <Text style={styles.buttonText}>Add Vert</Text>
      </TouchableOpacity>
    </View>
  );
};

AddVertScreen.navigationOptions = {
  title: "Add Vert Data",
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

const mapDispatchToProps = dispatch => ({
  addVertDataAttempt: (standingVertical, maxVertical) =>
    dispatch(addVertDataAttempt(standingVertical, maxVertical))
});

const ConnectedAddVertScreen = connect(
  null,
  mapDispatchToProps
)(AddVertScreen);

export default ConnectedAddVertScreen;

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
  },
  input: {
    height: 40,
    width: 260,
    margin: 8,
    borderColor: "transparent",
    borderWidth: 1,
    borderRadius: 6,
    color: "#d3d3d3",
    backgroundColor: "#26262B",
    textAlign: "center"
  }
});

const formatDate = (date = new Date()) => {
  const dateObject = new Date(date);
  const formattedDate = `${dateObject.getMonth() +
    1}-${dateObject.getDate()}-${dateObject.getFullYear()}`;

  return formattedDate;
};
