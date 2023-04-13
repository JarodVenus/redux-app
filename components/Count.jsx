import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native";

const A = () => {
  const [nb, setNb] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Button title="-1" onPress={() => setNb(-1)} />
        <Text style={styles.count}>{nb}</Text>
        <Button title="+1" onPress={() => setNb(+1)} />
      </View>
      <View style={styles.btn}>
        <Button title="Reset" onPress={() => setNb(nb - nb)} />
      </View>
    </View>
  );
};

export default A;

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    width: 200,
    justifyContent: "space-around",
    marginBottom: 10,
  },
  btn: { width: 100, alignSelf: "center" },
  count: {
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 5,
    width: 50,
    textAlign: "center",
    height : 50,
    paddingTop : 15
  },
  container : {marginTop : 25, borderWidth : 1, padding : 10, borderRadius : 5}
});
