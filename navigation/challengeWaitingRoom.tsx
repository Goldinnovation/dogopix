import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import { ParamListBase } from "@react-navigation/native";
import { useState } from "react";




const ChallengeWaitingRoom = () => {
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
      <View className="w-full  h-[7%]  flex mt-[15%]	flex-row items-center  justify-between">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
         className="flex flex-row w-[35%] h-[100%] pl-[2%] items-center">
          
          <Image
            source={require("./../assets/arr1.png")}
            style={{
              // width: scale(100),
              // height: verticalScale(25),
              width: "20%",
              height: "60%",
              // borderRadius: 100,
            }}
          />

          <View className=" pl-[6%]">
            <Text className="color-white text-xl">Back</Text>
          </View>
        </TouchableOpacity>

        <View className="pr-[5%]">
          <Text className="text-2xl text-white font-bold tracking-wide">
            Waiting Room
          </Text>
        </View>
      </View>

                {/* Display Show Area */}
      <View className="w-full items-center justify-around flex flex-row" style={{ flex: 1 }}>
  
           
           <Image
                  source={require("./../assets/me.jpeg")}
                  // className="h-[27%] w-[40%] rounded-full"
                  
                     className="h-[22%] w-[35%] rounded-full"
                />

              <View>
                <Text className="text-4xl text-white ">VS</Text>
              </View>
                  <Image
                  source={require("./../assets/prof.jpg")}
                  className="h-[22%] w-[35%] rounded-full"
                />

                {/* Search Size */}
                 {/* </View>
                  <Image
                  source={require("./../assets/prof.jpg")}
                  className="h-[30%] w-[45%] rounded-full"
                /> */}


       
       
      </View>



    


    {/* Start Battle Button, User can click on the Button to start the challenge */}
   <View className="px-6  h-[15%] flex justify-center items-center">
          <TouchableOpacity
            onPress={() => navigation.push("ImageSelectionScreen")}
            className="h-12 w-[70%] rounded-lg items-center justify-center border border-blue-500 bg-blue-800/40"
          >
            <Text className="text-white text-xl">Connection</Text>
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

export default ChallengeWaitingRoom;
