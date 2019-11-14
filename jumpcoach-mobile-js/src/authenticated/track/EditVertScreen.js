import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import EditVert from "./_EditVert";

const EditVertScreen = ({ navigation, vertHistory }) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => navigation.navigate("AddVert")}
    >
      <Text style={styles.buttonText}>Add New Vert Data</Text>
    </TouchableOpacity>

    <View style={styles.divider} />

    <FlatList
      data={vertHistory}
      style={{ alignSelf: "stretch" }}
      renderItem={({ _, index }) => (
        <EditVert index={index} navigation={navigation} />
      )}
      keyExtractor={(_, index) => index.toString()}
    />
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

const mapStateToProps = state => ({
  vertHistory: state.vertHistory
});

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
  divider: {
    color: "#CDE3F8",
    borderColor: "#CDE3F8",
    borderWidth: 1,
    height: 1,
    borderRadius: 1,
    width: "90%"
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

const formatDate = (date = new Date()) => {
  const dateObject = new Date(date);
  const formattedDate = `${dateObject.getMonth() +
    1}-${dateObject.getDate()}-${dateObject.getFullYear()}`;

  return formattedDate;
};
