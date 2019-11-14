import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";

const EditVertScreen = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => navigation.navigate("AddVert")}
    >
      <Text style={styles.buttonText}>Add New Vert Data</Text>
    </TouchableOpacity>
  </View>
);

EditVertScreen.navigationOptions = {
  title: "Edit Vert History",
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

const mapDispatchToProps = state => ({});

const ConnectedEditVertScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditVertScreen);

export default ConnectedEditVertScreen;

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
  }
});
