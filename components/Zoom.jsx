import { StyleSheet, Image, View } from "react-native";
import React, { useReducer } from "react";
import { Button } from "react-native";

function reduce(state, action) {
  switch (action) {
    case "zoom":
      return { w: 120, h: 220 };
    case "dezoom":
      return { w: 80, h: 180 };
    case "hide":
      return { w: 0, h: 0 };
    case "reset":
      return { w: 100, h: 200 };
    default:
      return state;
  }
}

const Zoom = () => {
  const [zoom, dispatch] = useReducer(reduce, { w: 100, h: 200 });

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: 300,
        }}
      >
        <View>
          <Button title="-" onPress={() => dispatch("dezoom")} />
        </View>
        <View>
          <Image
            source={{ uri: "https://source.unsplash.com/random/100x200" }}
            style={{ width: zoom.w, height: zoom.h }}
          />
        </View>

        <View>
          <Button title="+" onPress={() => dispatch("zoom")} />
        </View>
      </View>

      <View>
        <Button title="hide" onPress={() => dispatch("hide")} />
      </View>
      <View>
        <Button title="reset" onPress={() => dispatch("reset")} />
      </View>
    </View>
  );
};

export default Zoom;

const styles = StyleSheet.create({});
