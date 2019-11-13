import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { connect } from "react-redux";
import { signupAttempt } from "../../redux/auth/actionCreators";

const SignUp = ({ signupAttempt }) => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        autoCorrect={false}
        style={styles.input}
        onChangeText={setDisplayName}
        value={displayName}
        placeholder="Display Name"
        placeholderTextColor="#AADAFA"
      />
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
      <TextInput
        autoCorrect={false}
        style={styles.input}
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        secureTextEntry={true}
        placeholder="Confirm Password"
        placeholderTextColor="#AADAFA"
      />
      <Button
        title="Sign Up"
        onPress={() => signupAttempt(displayName, email, password)}
      />
    </View>
  );
};

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  signupAttempt: (displayName, email, password) =>
    dispatch(signupAttempt(displayName, email, password))
});

const ConnectedSignUp = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);

export default ConnectedSignUp;

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
