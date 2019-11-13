import React, { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { View, Button } from "react-native";

const App = () => {
  const [hasAccount, setHasAccount] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      {hasAccount ? (
        <>
          <SignIn />
          <Button
            title="Don't have an account yet?"
            onPress={() => setHasAccount(false)}
          />
        </>
      ) : (
        <>
          <SignUp />
          <Button
            title="Already have an account?"
            onPress={() => setHasAccount(true)}
          />
        </>
      )}
    </View>
  );
};

export default App;
