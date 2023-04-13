import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState, useReducer } from "react";
import { Button } from "react-native";

function reduce( state, action ){
    switch (action.type) {
        case "AUGMENTER" :
            return state + parseInt(action.payload);
        case "RESET" :
            return 0;
        default :
            return state;
    }
}

const B = () => {
//   const [nb, setNb] = useState(0);

    const [ nb, dispatch ] = useReducer( reduce, 0 )
    const [ t, setT ] = useState(0)

  return (
    <View style={styles.container}>
        <Text style={{fontSize : 25}}>Composant B</Text>
        <View style={styles.box}>
            <Button title="-1" onPress={() => dispatch({type : "AUGMENTER", payload : 1 })} />
            <Text styles={styles.count}>{nb}</Text>
            <Button title="+1" onPress={() => dispatch({type : "AUGMENTER", payload : 1 })} />
        </View>
        <View style={styles.btn}>
            <Button title="Reset" onPress={() => dispatch({type : "RESET"})} />
        </View>
        <TextInput style={[ styles.count, {alignSelf : "center", marginVertical : 10} ]} placeholder="chiffre" onChangeText={(texte) => setT(texte)} />
        <View style={styles.btn}>
            <Button title="ADD" onPress={() => dispatch({type : "AUGMENTER", payload : t})} />
        </View>
    </View>
  );
};

export default B;

const styles = StyleSheet.create({
    box: {
        flexDirection: "row",
        width: 200,
        justifyContent: "space-around",
        marginVertical: 10,
      },
      btn: { 
        width: 100, 
        alignSelf: "center" 
    },
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
