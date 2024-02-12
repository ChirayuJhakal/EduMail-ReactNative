import { View, Text, StyleSheet } from "react-native";

import BouncyCheckbox from "react-native-bouncy-checkbox";
export default function EmailItemContainer(props) {
  return (
    <View style={styles.mainCont}>
      <View style={styles.subCont}>
        <BouncyCheckbox fillColor="green"></BouncyCheckbox>
      </View>
      <View style={styles.subCont}>
        <Text numberOfLines={1} style={styles.emailHeading}>
          {props.heading}
        </Text>
        <Text numberOfLines={1} style={styles.emailBody}>
          {props.body}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainCont: {
    backgroundColor: "#e9f5f8",
    height: 80,
    flexDirection: "row",
    padding: 8,
    marginTop: 10,
    borderWidth: 1,
    marginHorizontal: 15,
    borderRadius: 10,
    margin: 4,
  },
  text: {
    marginRight: 40,
  },
  emailHeading: {
    // borderWidth:1,
    fontSize: 22,
    marginRight: 40,
    fontWeight: "600",
    padding: 1,
  },
  emailBody: {
    // borderWidth:1,
    marginRight: 40,
    fontSize: 14,
  },
});
