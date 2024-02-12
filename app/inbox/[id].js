import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router";
export default function Users() {
  const allData = require("../../data.json");

  const id = useLocalSearchParams().id;
  const myData = allData.filter((e) => {
    return e.id == String(id);
  });

  return (
    <View style={styles.container}>
      <View style={styles.headingCont}>
        <Text style={styles.emailHeading}>{myData[0].subject}</Text>
      </View>

      <View style={styles.senderCont}>
        <Text style={styles.senderText}>From: {myData[0].sender}</Text>
      </View>

      <ScrollView style={{ flex: 1 }}>
        <View style={styles.bodyCont}>
          <Text style={styles.bodyText}>{myData[0].content}</Text>
        </View>
      </ScrollView>

      <View style={styles.allBtns}>
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
        >
          <View style={styles.buttonCont}>
            <Text style={styles.buttonText}>Reply</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
        >
          <View style={styles.buttonCont}>
            <Text style={styles.buttonText}>Reply-All</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
        >
          <View style={styles.buttonContFwd}>
            <Text style={styles.buttonText}>Forward</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 60,
    margin: 20,
  },
  emailHeading: {
    fontSize: 42,
    margin: 4,
    fontWeight: "800",
    color: "#44a6c6",
  },
  headingCont: {
    borderColor: "grey",
    padding: 10,
    borderRadius: 7,
    backgroundColor: "#e9f5f8",
  },
  senderText: {
    fontSize: 22,
    margin: 4,
    padding: 10,
  },
  bodyCont: {
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    marginVertical: 20,
    borderRadius: 10,
    borderColor: "grey",
    backgroundColor: "#e9f5f8",
    paddingVertical: 22,
    paddingHorizontal: 10,
  },
  bodyText: {
    marginTop: 10,
    fontSize: 20,
  },
  allBtns: {
    height: "300",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 16,
    // borderWidth: 1,
  },
  senderCont: {
    marginTop: 12,
    padding: 2,
    // borderWidth: 1,
    borderColor: "grey",
    padding: 2,
    borderRadius: 7,

    backgroundColor: "#e9f5f8",
  },
  buttonCont: {
    // borderWidth: 1,
    width: "auto",
    height: 60,
    paddingVertical: 1,
    paddingHorizontal: 20,
    // borderColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "red",
    margin: 10,
  },
  buttonContFwd: {
    width: "auto",
    height: 60,
    paddingVertical: 1,
    paddingHorizontal: 20,
    // borderColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "green",
    margin: 10,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: "700",
    color: "white",
  },
});
