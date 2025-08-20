import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import { ParamListBase } from "@react-navigation/native";
import { useState } from "react";
import { Image as ExpoImage } from 'expo-image';



const BattleFieldBackgroundScreen = () => {
    
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    const [selectedImage, setSelectedImage] = useState("")

    const backgroundImages = [
        {
            id: 1,
            Title: "New york Streed",
            Image: "loop.gif",
        },
        {
            id: 2,
            Title: "Tokyo Night",
            Image: "aqua.webp",
        },
        {
            id: 3,
            Title: "Snowy Mountains",
            Image: "damn1.gif",
        },
        {
            id: 4,
            Title: "Desert Dunes",
            Image: "olym.webp",
        },
       
        // {
        //     id: 5,
        //     Title: "Neon City",
        //     Image: "image5",
        // },
        // {
        //     id: 6,
        //     Title: "Forest Mist",
        //     Image: "image6",
        // },
    ]

    // Static asset map for local images (Metro requires static paths)
    const imageSources: Record<string, any> = {
        "loop.gif": require("./../assets/loop.gif"),
        "aqua.webp": require("./../assets/aqua.webp"),
        "olym.webp": require("./../assets/olym.webp"),
        "damn1.gif": require("./../assets/damn1.gif")
    };

  const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
  const pageWidth = screenWidth; // one full page per item
  const itemWidth = Math.round(screenWidth * 0.78); // centered card width
  const itemHeight = Math.round(screenHeight * 0.55);

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
            Choose your Battlefield
          </Text>
        </View>
      </View>

      {/* Body Text Selection - user can click on a image and the tite will be displayed  */}
      <View className="px-6 py-4 flex flex-row gap-2">
        <Text className="text-white/70">
          Select an Background: 
        </Text>
        <Text className="text-blue-400">
         {selectedImage}
        </Text>
      </View>

                {/* Display Show Area */}
      <View className="w-full items-center justify-center" style={{ flex: 1 }}>
        <View style={{ height: itemHeight + 40, justifyContent: "center" }}>
          <FlatList
            data={backgroundImages}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            decelerationRate="fast"
            contentContainerStyle={{}}
            scrollEventThrottle={16}
            renderItem={({ item }) => (
              <View style={{ width: pageWidth, alignItems: "center" }}>
              <TouchableOpacity

                onPress={() => setSelectedImage(item.Title)}
                className={`bg-white/10 rounded-2xl border overflow-hidden  ${selectedImage == item.Title ? "bg-green-800/90 border-blue-400" : "bg-red/10 border-white/40" }`}
                style={{ width: itemWidth, height: itemHeight }}
              >
                {imageSources[item.Image] ? (
                  <ExpoImage
                    source={imageSources[item.Image]}
                    style={{ width: "100%", height: "100%" }}
                    resizeMode="cover"
                  />
                ) : (
                  <View className="flex-1 items-center justify-center">
                    <Text className="text-white/70">{item.Title}</Text>
                  </View>
                )}
              </TouchableOpacity>
              <View className="flex-1 items-center justify-center mt-[4%]">
                    <Text className="text-white/70">{item.Title}</Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>



    


    {/* Start Battle Button, User can click on the Button to start the challenge */}
   <View className="px-6  h-[15%] flex justify-center items-center">
          <TouchableOpacity
            onPress={() => navigation.push("ChallengeWaitingScreen")}
            className="h-12 w-[70%] rounded-lg items-center justify-center border border-blue-500 bg-blue-800/40"
          >
            <Text className="text-white text-xl">Next</Text>
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

export default BattleFieldBackgroundScreen;
