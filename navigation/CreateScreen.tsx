import { View, Text, StyleSheet, TouchableOpacity, Image, Modal  } from "react-native";
import { ParamListBase } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import ModalDeepTrust from "../component/createComponent/modals/ModalDeepTrust";
import ModalsSimpleTrust from "../component/createComponent/modals/ModalsSimpleTrust";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { dojoCreaterAction } from "../store/Action/dojoCreaterIdAction";


const CreateScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [width, setWidth] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalSimpleVisible, setModalSimpleVisible] = useState(false);
  const dispatchCreatorId = useDispatch()

  const hanleGoBackToProfile = () => {
    navigation.goBack();
  };

  const handleBattleField = (e: string) => {
    dispatchCreatorId(dojoCreaterAction(e))
  }

  
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
        {/* Display the Simple Trst Section */}
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
          <TouchableOpacity 
          onPress={() => navigation.navigate("BattleTopicScreen")}
          className="bg-white justify-center items-center w-[80%] h-[40%] rounded-full border border-black">
            <Text className="text-black">Accept</Text>
          </TouchableOpacity>

          <Text className="text-green-500	 pt-5">(Available)</Text>
        </View>
      </TouchableOpacity>

      {/* Display the Deep Trust Section */}
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
          <TouchableOpacity
           className="bg-black justify-center items-center w-[80%] h-[40%] rounded-full border border-white">
            <Text className="text-white">Accept</Text>
          </TouchableOpacity>

          <Text className="text-red-500	 pt-5">(Not Available)</Text>
        </View>
      </View>
        
        <ModalDeepTrust visible={modalVisible} onClose={() => setModalVisible(false)} />
        <ModalsSimpleTrust visible={modalSimpleVisible} onClose={() => setModalSimpleVisible(false)}/>
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
