import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { ParamListBase } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useState } from "react";

const ChargeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  let [heartBeatCount, setheartBeatCount] = useState(100);

  const HearthBoxes = [
    { id: 1, image: "/gesHeart.png", description: "desdcjksasa", cost: 5 },
    { id: 2, image: "image1", description: "desdcjksasa", cost: 5 },
    { id: 3, image: "image1", description: "desdcjksasa", cost: 5 },
    { id: 4, image: "image1", description: "desdcjksasa", cost: 5 },
    { id: 5, image: "image1", description: "desdcjksasa", cost: 5 },
    { id: 6, image: "image1", description: "desdcjksasa", cost: 5 },
  ];

  const hanleGoBackToProfile = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View className="h-[10%] w-full flex flex-row border border-b-gray-500">
        <View className="h-full w-[80%] justify-center pl-[2%] ">
          <View className="flex flex-row w-[45%] h-[46%] rounded-full border border-gray-500 ">
            <View className="w-[40%] h-full items-center justify-center border-r border-r-gray-500 ">
              <Image
                source={require("../assets/h1.png")}
                style={{
                  // width: scale(100),
                  // height: verticalScale(25),
                  width: "40%",
                  height: "50%",
                  // borderRadius: 100,
                }}
              />
            </View>

            <View className=" w-[60%] h-full items-center justify-center">
              <Text className="text-xl color-white">200</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="h-full w-[20%]  items-center justify-center "
        >
          <Image
            source={require("../assets/ddown.png")}
            style={{
              // width: scale(100),
              // height: verticalScale(25),
              width: "40%",
              height: "40%",
              // borderRadius: 100,
            }}
          />
        </TouchableOpacity>
      </View>

      {/* Counter Section */}
      <View className="h-[30%] w-full">
        <View className="w-full h-[50%] flex flex-col">
          {/* Counter  */}
          <View className="w-full h-[80%] flex flex-row items-center justify-center">
            <View className=" h-[50%] w-[60%]  items-end justify-center">
              <Text className="text-5xl color-white">{heartBeatCount}</Text>
            </View>

            <View className=" h-[50%] w-[50%] items-start justify-center pb-[2%] ">
              <Image
                source={require("../assets/lovebomb.png")}
                style={{
                  // width: scale(100),
                  // height: verticalScale(25),
                  width: "25%",
                  height: "70%",
                  // borderRadius: 100,
                }}
              />
            </View>
          </View>

          {/* Euivalent Section */}
          <View className="w-full h-[20%] flex flex-row items-center justify-center pl-[3%]">
            <Text className="text-gray-500">100 = 0.80€</Text>
          </View>
        </View>

        <View className="flex flex-row w-full h-[50%] items-center justify-center gap-10">
          <TouchableOpacity
            onPress={() =>
              heartBeatCount > 100 && setheartBeatCount((heartBeatCount -= 100))
            }
            className="w-[30%] h-[60%] bg-orange-500 rounded-lg items-center justify-center gap"
          >
            <Text className="text-2xl">- 100</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setheartBeatCount((heartBeatCount += 100))}
            className="w-[30%] h-[60%] bg-green-500 rounded-lg items-center justify-center gap"
          >
            <Text className="text-2xl">+ 100</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="h-[60%] w-full">
        <View className="w-full h-[70%] p-3 ">
          <FlatList
            data={HearthBoxes}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View className="mt-[8%] border border-gray-500 rounded-lg flex flex-row items-center h-20">
              <View className="w-[30%] h-full  items-center justify-center flex">
              <Image
                source={require(`../assets/gesHeart.png`)}
                style={{
                  // width: scale(100),
                  // height: verticalScale(25),
                  width: "35%",
                  height: "50%",
                  // borderRadius: 100,
                }}/>
              </View>

              <View className=" w-[45%] h-full items-center justify-center">
              <Text className=" color-white">{item.description}</Text>
              </View>
             

              <View className="w-[25%] h-full bg-rot-200 items-center justify-center">
              <TouchableOpacity className=" bg-yellow-500 h-[40%] w-[80%] rounded-md items-center justify-center opacity-90">
              <Text className="color-white">{item.cost}€</Text>
              </TouchableOpacity>
              </View>
           
            </View>
        
            )}
           
          />
        </View>

        <View className="w-full h-[30%] items-center justify-center">
          <TouchableOpacity
          onPress={() => navigation.goBack()}
           className="bg-blue-600 w-[60%] h-[60&] rounded-lg  items-center justify-center">
            <Text className="text-white text-2xl">Purchase</Text>
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
    // width: "100%",
    // justifyContent: "center",

    // alignItems: "center",
    // paddingTop: 50,
    // padding: 7
  },
});

export default ChargeScreen;
