import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

const VertChart = ({ vertHistory }) => (
  <View>
    <Text style={styles.titleText}>Hey!</Text>
    <Text style={styles.titleText}>{vertHistory[0].standingVertical}</Text>
  </View>
);

const mapStateToProps = state => ({
  vertHistory: state.vertHistory
});

const ConnectedVertChart = connect(
  mapStateToProps,
  null
)(VertChart);

export default ConnectedVertChart;

const styles = StyleSheet.create({
  titleText: {
    color: "#fff"
  }
});

const formatDate = (date = new Date()) => {
  const dateObject = new Date(date);
  const formattedDate = `${dateObject.getMonth() +
    1}-${dateObject.getDate()}-${dateObject.getFullYear()}`;

  return formattedDate;
};
