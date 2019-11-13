import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import UnauthenticatedApp from "./src/unauthenticated/App";
import AuthenticatedApp from "./src/authenticated/App";

const AuthContainer = ({ token }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      {token ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </View>
  );
};

const mapStateToProps = state => ({
  token: state.auth.token
});

const ConnectedAuthContainer = connect(
  mapStateToProps,
  null
)(AuthContainer);

export default ConnectedAuthContainer;
