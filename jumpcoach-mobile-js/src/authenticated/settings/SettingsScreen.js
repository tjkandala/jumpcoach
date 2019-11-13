import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { logout } from "../../../redux/auth/actionCreators";

const SettingsScreen = ({ logout }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You're logged in!</Text>
      <Button title="Log Out" onPress={() => logout()} />
    </View>
  );
};

SettingsScreen.navigationOptions = {
  title: "Settings",
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
  logout: () => dispatch(logout())
});

const ConnectedSettingsScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsScreen);

export default ConnectedSettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000"
  },
  text: {
    color: "#fff"
  }
});
