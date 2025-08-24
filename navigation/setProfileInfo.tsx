import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ImageBackground } from "react-native";
import RainLayer from "../component/Rain/rainlayer";
import SetProfileDataStructureComponent from "../component/setProfileInfoComponent/setProfileDataStructure";

const SetProfileScreen = () => {


  return (

    <View style={{ flex: 1,  backgroundColor:"black" }}>
      <SetProfileDataStructureComponent/>
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    // background: "transparent"
    flex: 1,
    height: "100%",
    // width: "100%",
    // justifyContent: "center",
    alignItems: "center",
    paddingTop: 60,
    // padding: 7
  },

  passwordInput: {
    height: 40,
    borderWidth: 1,
    padding: 5,
    width: "80%",
    // margin: 30,
    backgroundColor: "#c7c7c7",
    borderRadius: 7,
  },
});

export default SetProfileScreen;
