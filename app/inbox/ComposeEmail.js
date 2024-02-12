import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { router } from "expo-router";

export default function ComposeEmail() {
  const [value, onChangeText] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Compose</Text>
      </View>

      <View style={styles.inputWrapper}>
        <Text style={styles.label}>To:</Text>
        <TextInput numberOfLines={1} style={styles.input} />
      </View>

      <View style={styles.messageWrapper}>
        <TextInput
          editable
          multiline
          textAlign="left"
          onChangeText={(text) => onChangeText(text)}
          value={value}
          placeholder="Your Email"
          style={styles.messageInput}
        />
      </View>

      <TouchableOpacity
        testID="back"
        accessibilityLabel="back"
        onPress={() => {
          router.back();
        }}
      >
        <View style={styles.sendButton}>
          <Text style={styles.sendText}>Send</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 40,
  },
  header: {
    marginBottom: 20,
    alignItems: "flex-start",
    alignItems: "center",
  },
  heading: {
    fontSize: 40,
    fontWeight: "800",
    color: "#276b80",
  },
  inputWrapper: {
    backgroundColor: "#e9f5f8",
    marginBottom: 15,
    flexDirection: "row",
    borderRadius: 5,
    borderWidth: 1,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  label: {
    fontSize: 22,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  input: {
    flex: 1,
    // backgroundColor: "#e9f5f8", 
    fontSize: 22,
    borderColor: "grey", 
  },
  messageWrapper: {
    flex: 1,
  },
  messageInput: {
    flex: 1,
    marginVertical: 25,
    padding: 10,
    backgroundColor: "#e9f5f8", // Adjust as needed
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "grey", // Adjust as needed
    padding: 10,
    fontSize: 22,
  },
  sendButton: {
    // borderWidth: 1,
    borderColor: "grey",
    width: 100,
    height: 55,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "red",
    margin: 10,
  },
  sendText: {
    fontSize: 25,
    fontWeight: "800",
    color: "white",
  },
});
