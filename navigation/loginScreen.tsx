import React from "react";
import LoginComponentStructure from "../component/loginComponent/LoginComponentStructure";
import { View, StyleSheet} from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <LoginComponentStructure />
      </View>
  )
 
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
  },
 
  });
  



export default LoginScreen;