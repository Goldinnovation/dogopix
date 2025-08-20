import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import SignUpComponentStructure from "../component/signUpComponent/signUpstructure";

const SignUpScreen = () => {
 

  return (
    <View
      style={styles.container}
    >
      <SignUpComponentStructure/>
    </View>
  );
};

const styles = StyleSheet.create({

  container:{
    height: "100%",
    // flex: 1,
    backgroundColor: "green",
    paddingTop: 40,
    borderTopWidth: 1,
    borderColor: "rgba(179,179,179,1)",
    borderRadius: 11,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    // paddingTop: verticalScale(40),
    flex: 1,
  },
});

export default SignUpScreen;
