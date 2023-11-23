import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function App() {
  function goalInputHandler() {}

  function addGoalHandler() {}
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputHandler()}
          placeholder="Choose your goals!"
        />
        <Button onPress={addGoalHandler()} title="Add Goal" />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#666",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    minWidth: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 4,
  },
});
