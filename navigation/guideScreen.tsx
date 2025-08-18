import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ParamListBase } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

const GuideScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.container}>
      <View className="h-[10%] w-full flex flex-row items-center justify-center">
        <Text className="text-3xl color-white">Enter Your Code</Text>
      </View>
      <View className="h-[50%] w-full flex flex-col">
       

        <View className="h-[30%] w-full flex flex-row items-center justify-center">
          <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          className="h-10 w-1/2 rounded-full items-center justify-center border border-blue-500 ">
            <Text className="text-white">Enter</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* <TouchableOpacity
                onPress={() => hanleGoBackToProfile()}
            >
                <Text>Back </Text>
            </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    // background: "transparent"
    flex: 1,
    height: "100%",
    // width: "100%",
    justifyContent: "center",
    alignItems: "center",
    // paddingTop: 50,
    // padding: 7
  },
});

export default GuideScreen;
