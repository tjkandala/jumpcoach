import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  DatePickerIOS,
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
  const [maxVertical, setMaxVertical] = useState(0);
  const [chosenDate, setDate] = useState(new Date());

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Vertical on {formatDate(chosenDate)}</Text>
      <Text style={styles.text}>maxVertical: {maxVertical}</Text>

      <TextInput
        autoCorrect={false}
        style={styles.input}
        onChangeText={setMaxVertical}
        placeholder="Max Vertical"
        placeholderTextColor="#777"
      />

      <View style={styles.datePicker}>
        <DatePickerIOS
          mode="date"
          date={chosenDate}
          onDateChange={setDate}
          maximumDate={new Date()}
        />
      </View>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          addVertDataAttempt(maxVertical, chosenDate);
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
  addVertDataAttempt: (maxVertical, chosenDate) =>
    dispatch(addVertDataAttempt(maxVertical, chosenDate))
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
  datePicker: {
    backgroundColor: "#d3d3d3",
    width: "90%",
    height: 200,
    borderRadius: 12
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
