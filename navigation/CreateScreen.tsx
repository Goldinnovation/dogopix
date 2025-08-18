import { View, Text, StyleSheet, TouchableOpacity, Image, Modal  } from "react-native";
import { ParamListBase } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

const CreateScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [width, setWidth] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalSimpleVisible, setModalSimpleVisible] = useState(false);

  const hanleGoBackToProfile = () => {
    navigation.goBack();
  };

  return (
   
     <LinearGradient
      colors={["#ffffff", "#1e293b", "#000000"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
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
        <View className=" h-full w-full flex flex-row justify-around">
          <Text className="color-black text-4xl font-medium">Make</Text>
          <Text className="color-black text-4xl font-medium">Yo</Text>
          <Text className="color-white text-4xl font-medium">ur</Text>
          <Text className="color-white text-4xl font-medium">Choice</Text>
        </View>
      </View>

      <TouchableOpacity className="bg-white/80 h-full w-[50%] justify-center items-center">
        <View className="flex flex-col gap-5 items-center w-full h-[25%] justify-center items-center mt-5">
          <Text className="color-black text-5xl font-medium">Simple</Text>
          <Text className="color-black text-4xl font-medium">Trust</Text>
          <TouchableOpacity
           onPress={() => setModalSimpleVisible(true)}
          className="w-[30%] h-[25%] justify-center items-center">
            <Image
              source={require(`../assets/rufb.png`)}
              style={{
                width: "50%",
                height: "50%",
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

      <View className="bg-black/90 h-full w-[50%] justify-center items-center relative">
        <View className="flex flex-col gap-5 items-center w-full h-[25%] justify-center items-center mt-5">
          <Text className="color-white text-5xl font-medium">Deep</Text>
          <Text className="color-white text-4xl font-medium">Trust</Text>
          <TouchableOpacity
           onPress={() => setModalVisible(true)}
          className="w-[30%] h-[25%] justify-center items-center">
            <Image
              source={require(`../assets/ruf.png`)}
              style={{
                width: "50%",
                height: "50%",
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
      <Modal
  visible={modalVisible}
  transparent
  animationType="fade"
  onRequestClose={() => setModalVisible(false)}
>
  <View className="flex-1 justify-center items-center bg-black/70">
  <BlurView
  intensity={60}
  tint="dark"
  className="rounded-lg w-[85%]  shadow-2xl p-6 bg-black/60"
  style={{
    alignSelf: "center",
    // fallback for bg-black/60 if NativeWind is not applied on BlurView
    backgroundColor: "rgba(0,0,0,0.6)",
   
  }}
>
  <Text className="text-lg font-bold text-green-200 mb-2 text-center">
    2. Deep Trust <Text className="text-black text-xl">🏴</Text>
  </Text>
  <View>
    <Text className="mb-5">
      <Text className="font-bold text-green-300">Step 1.</Text> <Text className="text-white">Choose from multiple topics—AI will randomly pick one for you.</Text>
    </Text>
    <Text className="mb-5">
      <Text className="font-bold text-green-300">Step 2.</Text> <Text className="text-white">Decide on a battlefield for your match.</Text>
    </Text>
    <Text className="mb-5">
      <Text className="font-bold text-green-300">Step 3.</Text> <Text className="text-white">The AI scans your photo library and selects three images based on the chosen topic.</Text>
    </Text>
    <Text className="mb-5">
      <Text className="font-bold text-green-300">Step 4.</Text> <Text className="text-white">You play rock, paper, scissors (without seeing the AI-selected images).</Text>
    </Text>
    <Text className="mb-5">
      <Text className="font-bold text-green-300">Step 5.</Text> <Text className="text-white">If you win, you get to see the opponent’s image for that round.</Text>
    </Text>
    <Text className="mb-5">
      <Text className="font-bold text-green-300">Step 6.</Text> <Text className="text-white">If you lose, your opponent sees your image for that round.</Text>
    </Text>
  </View>
  <TouchableOpacity
    className="mt-4 bg-green-500 px-6 py-2 rounded-full items-center"
    onPress={() => setModalVisible(false)}
  >
    <Text className="text-white font-bold">Close</Text>
  </TouchableOpacity>
</BlurView>
  </View>
</Modal>
<Modal
  visible={modalSimpleVisible}
  transparent
  animationType="fade"
  onRequestClose={() => setModalVisible(false)}
>
  <View className="flex-1 justify-center items-center bg-black/70">
    <BlurView
      intensity={60}
      tint="dark"
      className="rounded-lg w-[85%]  border-gray-500 shadow-2xl p-6 bg-black/60"
      style={{
        alignSelf: "center",
        backgroundColor: "rgba(0,0,0,0.6)", // fallback for NativeWind
      }}
    >
      <Text className="text-lg font-bold text-green-200 mb-2 text-center">
        1. Simple Trust <Text className="text-white text-xl">🏳️</Text>
      </Text>
      <View>
        <Text className="mb-5">
          <Text className="font-bold text-green-300">Step 1.</Text> <Text className="text-white">Select a topic for your image battle.</Text>
        </Text>
        <Text className="mb-5">
          <Text className="font-bold text-green-300">Step 2.</Text> <Text className="text-white">Decide on a battlefield for your match.</Text>
        </Text>
        <Text className="mb-5">
          <Text className="font-bold text-green-300">Step 3.</Text> <Text className="text-white">You’ll receive a code to connect with another player.</Text>
        </Text>
        <Text className="mb-5">
          <Text className="font-bold text-green-300">Step 4.</Text> <Text className="text-white">Once connected, both players choose their own images for each round, based on the topic.</Text>
        </Text>
        <Text className="mb-5">
          <Text className="font-bold text-green-300">Step 5.</Text> <Text className="font-bold text-green-200">You can always see your own selected images for each round.</Text>
        </Text>
        <Text className="mb-5">
          <Text className="font-bold text-green-300">Step 6.</Text> <Text className="text-white">You play rock, paper, scissors.</Text>
        </Text>
        <Text className="mb-5">
          <Text className="font-bold text-green-300">Step 7.</Text> <Text className="text-white">If you win, you get to see the opponent’s image for that round.</Text>
        </Text>
        <Text className="mb-5">
          <Text className="font-bold text-green-300">Step 8.</Text> <Text className="text-white">If you lose, your opponent sees nothing.</Text>
        </Text>
      </View>
      <TouchableOpacity
        className="mt-4 bg-green-500 px-6 py-2 rounded-full items-center"
        onPress={() => setModalSimpleVisible(false)}
      >
        <Text className="text-white font-bold">Close</Text>
      </TouchableOpacity>
    </BlurView>
  </View>
</Modal>
    </LinearGradient>
  
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
