import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

const ArticleScreen = ({ navigation, article }) => (
  <View style={styles.container}>
    <Text style={styles.titleText}>{navigation.state.params.articleId}</Text>
    <Text style={styles.contentText}>{article.content}</Text>
  </View>
);

ArticleScreen.navigationOptions = {
  title: "FAQ",
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

const mapStateToProps = (state, ownProps) => ({
  article: state.FAQ.byId[ownProps.navigation.state.params.articleId]
});

const ConnectedArticleScreen = connect(
  mapStateToProps,
  null
)(ArticleScreen);

export default ConnectedArticleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#000"
  },
  titleText: {
    color: "#fff",
    fontWeight: "bold",
    width: "90%",
    marginTop: 16,
    marginBottom: 16
  },
  contentText: {
    color: "#d3d3d3",
    width: "90%"
  }
});
