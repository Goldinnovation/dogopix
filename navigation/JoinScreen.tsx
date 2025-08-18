import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { ParamListBase } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";


const JoinScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const hanleGoBackToProfile = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <LinearGradient
      colors={["#1e3c72", "#2a5298", "#000428", "#004e92"]}
      start={[0, 0]}
      end={[1, 1]}
      style={{ flex: 1 }}
    >
      <View className="h-[10%] w-full flex flex-row items-center justify-center mt-[50%]">
        <Text className="text-3xl text-white font-bold tracking-wide">
          Enter Your Code
        </Text>
      </View>

      <View className="h-[50%] w-full flex flex-col">
        <View className="h-[30%] w-full flex flex-row items-center justify-center">
          <TextInput
            className="w-3/4 h-12 bg-white/20 text-white rounded-xl px-4 text-lg border border-blue-400"
            placeholder="Enter Code"
            placeholderTextColor="#b3c7e6"
            keyboardType="default"
          />
        </View>

        <View className="h-[30%] w-full flex flex-row items-center justify-center">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="h-12 w-1/2 rounded-full items-center justify-center border border-blue-500 bg-blue-800/70"
          >
            <Text className="text-white font-semibold text-lg tracking-wide">Enter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>

    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    // background: "transparent"
    flex: 1,
    height: "100%",
    // width: "100%",
    // justifyContent: "center",
    // alignItems: "center",
    // paddingTop: 50,
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

export default JoinScreen;
