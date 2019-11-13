import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";

const FAQScreen = ({ navigation, articleIds }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={articleIds}
        style={{ alignSelf: "stretch" }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Article", { articleId: item })}
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
      />
    </View>
  );
};

FAQScreen.navigationOptions = {
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

const mapStateToProps = state => ({
  articleIds: state.FAQ.allIds
});

const mapDispatchToProps = dispatch => ({});

const ConnectedFAQScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(FAQScreen);

export default ConnectedFAQScreen;

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
    marginBottom: 8,
    padding: 16,
    overflow: "hidden",
    borderRadius: 8,
    backgroundColor: "#26262B",
    width: "90%",
    alignSelf: "center"
  }
});
