import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import { ParamListBase } from "@react-navigation/native";
import { useState } from "react";

const ImageSelectionScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["black", "black", "gray", "#0a0a0a", "#3a3a3a"]}
        start={[0, 0]}
        end={[1, 1]}
        style={{ flex: 1 }}
      >
        {/* Header Section */}
        <View className="w-full  h-[7%]  flex mt-[15%]	flex-row items-center  justify-center">
        
            <Text className="text-2xl text-white font-bold tracking-wide">
              Select Your Images
            </Text>
        
        </View>

        {/* Display Show Area */}
        <View
          className="w-full items-center justify-around  p-3"
          style={{ flex: 1 }}
        >
          <View className="bg-black/30 w-full h-[20%]  flex flex-row  border-2 border-white rounded-lg">
            <View className="w-[40%] items-center justify-center p-2">
              <TouchableOpacity className="w-full h-full border-2 border-white  rounded-lg items-center justify-center">
                <Image
                  source={require("./../assets/scis.png")}
                  style={{
                    // width: scale(100),
                    // height: verticalScale(25),
                    width: "50%",
                    height: "60%",
                    // borderRadius: 100,
                  }}
                />
              </TouchableOpacity>
            </View>

            <View className=" w-[60%] items-center justify-center gap-3">
              <View className=" w-full h-[30%]">
                <Text className="text-3xl text-white">Scissors</Text>
              </View>
              <View className="w-full h-[40%] flex flex-row">
                <View className="h-full w-[80%]">
                  <Text className="text-sm text-white">
                    Click on the scissors icon to upload your image.
                  </Text>
                </View>
                <View className="h-full w-[20%] items-center justify-center">
                  <Image
                    source={require("./../assets/check.png")}
                    style={{
                      // width: scale(100),
                      // height: verticalScale(25),
                      width: "55%",
                      height: "60%",
                      // borderRadius: 100,
                    }}
                  />
                </View>
              </View>
            </View>
          </View>

          <View className="bg-black/30 w-full h-[20%]  flex flex-row  border-2 border-white rounded-lg">
                    
                {/* Papers Upload Image Section */}
            <View className="w-[40%] items-center justify-center p-2">
              <TouchableOpacity className="w-full h-full border-2 border-white  rounded-lg items-center justify-center">
                <Image
                  source={require("./../assets/pape.png")}
                  style={{
                    // width: scale(100),
                    // height: verticalScale(25),
                    width: "40%",
                    height: "55%",
                    // borderRadius: 100,
                  }}
                />
              </TouchableOpacity>
            </View>
                   {/* Papers Text Section */}
            <View className=" w-[60%] items-center justify-center gap-3">
              <View className=" w-full h-[30%]">
                <Text className="text-3xl text-white">Papers</Text>
              </View>
              <View className="w-full h-[40%] flex flex-row">
                <View className="h-full w-[80%]">
                  <Text className="text-sm text-white">
                    Click on the scissors icon to upload your image.
                  </Text>
                </View>
                <View className="h-full w-[20%] items-center justify-center">
                  <Image
                    source={require("./../assets/check1.png")}
                    style={{
                      // width: scale(100),
                      // height: verticalScale(25),
                      width: "50%",
                      height: "50%",
                      // borderRadius: 100,
                    }}
                  />
                </View>
              </View>
            </View>
          </View>

          <View className="bg-black/30 w-full h-[20%]  flex flex-row  border-2 border-white rounded-lg">
           
                {/* Stone Upload Image Section */}
            <View className="w-[40%] items-center justify-center p-2">
              <TouchableOpacity className="w-full h-full border-2 border-white  rounded-lg items-center justify-center">
                <Image
                  source={require("./../assets/scis.png")}
                  style={{
                    // width: scale(100),
                    // height: verticalScale(25),
                    width: "50%",
                    height: "60%",
                    // borderRadius: 100,
                  }}
                />
              </TouchableOpacity>
            </View>

                {/* Stone Text Section */}
            <View className=" w-[60%] items-center justify-center gap-3">
              <View className=" w-full h-[30%]">
                <Text className="text-3xl text-white">Stone</Text>
              </View>
              <View className="w-full h-[40%] flex flex-row">
                <View className="h-full w-[80%]">
                  <Text className="text-sm text-white">
                    Click on the scissors icon to upload your image.
                  </Text>
                </View>
                <View className="h-full w-[20%] items-center justify-center">
                  <Image
                    source={require("./../assets/check1.png")}
                    style={{
                      // width: scale(100),
                      // height: verticalScale(25),
                      width: "50%",
                      height: "50%",
                      // borderRadius: 100,
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Start Battle Button, User can click on the Button to start the challenge */}
        <View className="px-6  h-[15%] flex justify-center items-center">
          <TouchableOpacity
            onPress={() => navigation.push("DojoScreen")}
            className="h-12 w-[70%] rounded-lg items-center justify-center border border-blue-500 bg-blue-800/40"
          >
            <Text className="text-white text-xl">Ready</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    // paddingTop: 50,
  },
});

export default ImageSelectionScreen;
