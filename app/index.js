import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
} from "react-native";
import EmailItemContainer from "./components/EmailItemContainer";

export default function App() {
  let Data = require("../data.json");
  return (
    <View style={styles.container}>
      <View style={styles.titleCont}>
        <Text style={styles.title}>EduMail</Text>
      </View>
      <FlatList
        data={Data}
        renderItem={({ item }) => {
          return (
            <Pressable onPress={() => router.push(`inbox/${item.id}`)}>
              <EmailItemContainer heading={item.subject} body={item.content} />
            </Pressable>
          );
        }}
        keyExtractor={(e) => e.id}
      ></FlatList>

      <View style={styles.composeEmail}>
        <Pressable
          testID="send"
          onPress={() => {
            router.push("inbox/ComposeEmail");
          }}
        >
          <View style={styles.addButton}>
            <Text style={styles.plus}>+</Text>
          </View>
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    // fontSize: 30,
  },
  title: {
    fontSize: 40,
    marginLeft: 15,
    fontWeight: "800",
    alignItems: "center",
    color: "#276b80",
  },
  titleCont: {
    alignItems: "center",
    marginBottom: 12,
  },
  composeEmail: {
    // borderWidth: 1,
    margin: 10,
    height: 60,
    flexDirection: "row-reverse",
  },
  addButton: {
    height: 60,
    width: 60,
    borderRadius: 100,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingLeft: 3,
  },
  plus: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
    // borderWidth:1,
    height: 80,
  },
});
