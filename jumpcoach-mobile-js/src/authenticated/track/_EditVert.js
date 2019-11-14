import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { deleteVertDataAttempt } from "../../../redux/vertHistory/actionCreators";
import { StackActions, NavigationActions } from "react-navigation";

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "Track" })]
});

const EditVert = ({ index, vert, deleteVertDataAttempt, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        Alert.alert(
          `Delete Vert Data`,
          `${formatDate(vert.x)}: ${vert.y} inches `,
          [
            {
              text: "cancel",
              onPress: () => console.log("NO Pressed"),
              style: "cancel"
            },
            {
              text: "DELETE",
              onPress: () => {
                deleteVertDataAttempt(index);
                navigation.dispatch(resetAction);
              }
            }
          ]
        );
      }}
      style={styles.buttonContainer}
    >
      <Text style={styles.buttonText}>
        {formatDate(vert.x)}: {vert.y} inches
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
  }
});

const mapStateToProps = (state, ownProps) => ({
  vert: state.vertHistory[ownProps.index]
});

const mapDispatchToProps = dispatch => ({
  deleteVertDataAttempt: index => dispatch(deleteVertDataAttempt(index))
});

const ConnectedEditVert = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditVert);

export default ConnectedEditVert;

const formatDate = (date = new Date()) => {
  const dateObject = new Date(date);
  const formattedDate = `${dateObject.getMonth() +
    1}-${dateObject.getDate()}-${dateObject.getFullYear()}`;

  return formattedDate;
};
