import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { connect } from "react-redux";
import { loginAttempt } from "../../redux/auth/actionCreators";

const SignIn = ({ loginAttempt }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        autoCorrect={false}
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        placeholderTextColor="#AADAFA"
      />
      <TextInput
        autoCorrect={false}
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        placeholder="Password"
        placeholderTextColor="#AADAFA"
      />
      <Button title="Sign In" onPress={() => loginAttempt(email, password)} />
    </View>
  );
};

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loginAttempt: (email, password) => dispatch(loginAttempt(email, password))
});

const ConnectedSignIn = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);

export default ConnectedSignIn;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
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
