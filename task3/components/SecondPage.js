import React from "react";
import { View, Button, StyleSheet } from "react-native";
import * as DocumentPicker from "expo-document-picker";

const SecondPage = () => {
  const handleFilePick = async () => {
    try {
      const file = await DocumentPicker.getDocumentAsync();

      if (file.type === "success") {
        console.log(file);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Button onPress={handleFilePick} title="Pick a file" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
});

export default SecondPage;
