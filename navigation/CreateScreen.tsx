import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { ParamListBase } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useState } from "react";

const CreateScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [width, setWidth] = useState(0);

  const hanleGoBackToProfile = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View
        onLayout={(e) => setWidth(e.nativeEvent.layout.width)}
        style={{
          width: "69%",
          position: "absolute",
          top: "12%",
          left: "53%",
          transform: [{ translateX: -width / 2 }],
          zIndex: 10,
        }}
      >
        <View className=" h-full w-full  flex flex-row justify-around">
          <Text className="color-black text-4xl font-medium">Make</Text>
          <Text className="color-black text-4xl font-medium">Yo</Text>
          <Text className="color-white text-4xl font-medium">ur</Text>
          <Text className="color-white text-4xl font-medium">Choice</Text>
        </View>
      </View>
      <TouchableOpacity className="bg-white h-full w-[50%] justify-center items-center">
        <View className="flex flex-col gap-5 items-center w-full h-[25%] justify-center items-center mt-5">
          <Text className="color-black text-5xl font-medium">Simple</Text>

          <Text className="color-black text-4xl font-medium">Trust</Text>
          <TouchableOpacity className="w-[30%] h-[25%] justify-center items-center">
            <Image
              source={require(`../assets/rufb.png`)}
              style={{
                // width: scale(100),
                // height: verticalScale(25),
                width: "50%",
                height: "50%",
                // borderRadius: 100,
              }}
            />
          </TouchableOpacity>
        </View>
        <View className="w-full h-[10%] absolute top-[65%] justify-center items-center">
          <TouchableOpacity className="bg-white justify-center items-center w-[80%] h-[40%] rounded-full border border-black">
            <Text className="text-black">Accept</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <View className="bg-black h-full  w-[50%]  justify-center items-center gap  relative">
        <View className=" flex flex-col gap-5 items-center w-full h-[25%] justify-center items-center mt-5">
          <Text className="color-white text-5xl font-medium">Deep</Text>

          <Text className="color-white text-4xl font-medium">Trust</Text>

          <TouchableOpacity className="w-[30%] h-[25%] justify-center items-center">
            <Image
              source={require(`../assets/ruf.png`)}
              style={{
                // width: scale(100),
                // height: verticalScale(25),
                width: "50%",
                height: "50%",
                // borderRadius: 100,
              }}
            />
          </TouchableOpacity>
        </View>

        <View className="w-full h-[10%] absolute top-[65%] justify-center items-center">
          <TouchableOpacity className="bg-black justify-center items-center w-[80%] h-[40%] rounded-full border border-white">
            <Text className="text-white">Accept</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    // background: "transparent"
    flex: 1,
    height: "100%",
    display: "flex",
    flexDirection: "row",
    // width: "100%",
    // justifyContent: "center",
    // alignItems: "center",
    // paddingTop: 50,
    // padding: 7
  },
});

export default CreateScreen;
