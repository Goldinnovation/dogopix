import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import { ParamListBase } from "@react-navigation/native";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useDispatch } from "react-redux";
import { createDojoAction } from "../store/Action/dojoCreaterIdAction";



const BattleTopicScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const dispatch = useDispatch()
  const {dojo_creater_id} = useSelector((state: RootState) => state.dojoCreatorReducer);


  const InterestTopics: { label: string; icon: string }[] = [
    { label: "Screenshots", icon: "📸" },
    { label: "Food", icon: "🍔" },
    { label: "Travel", icon: "🏖️" },
    { label: "Animals", icon: "🐾" },
    { label: "Party", icon: "🎉" },
    { label: "Family", icon: "👨‍👩‍👧‍👦" },
    { label: "Friends", icon: "👫" },
    { label: "Slow Motion", icon: "🐢" },
    { label: "Love", icon: "❤️" },
    { label: "Sports", icon: "🏀" },
    { label: "0.5x Zoom Photos", icon: "🔍" },
    { label: "Sleep", icon: "😴" },
    { label: "Outfit", icon: "👗" },
    { label: "Sins", icon: "😈" },
    { label: "Dirty Pleasure", icon: "🍑" },
    { label: "Favorites", icon: "⭐" },
    { label: "Childhood", icon: "🧸" },
    { label: "Color", icon: "🎨" },
    { label: "Interested", icon: "🤔" },
    { label: "Music", icon: "🎵" },
    { label: "Vehicles", icon: "🚗" },
    { label: "Hobbies", icon: "🧩" },
    { label: "Movies", icon: "🎬" },
    { label: "Series", icon: "📺" },
    { label: "Selfies", icon: "🤳" },
    { label: "Books", icon: "📚" },
    { label: "YouTube", icon: "▶️" },
    { label: "Body Parts", icon: "🦵" },
    { label: "Drugs", icon: "💊" },
    { label: "Netflix", icon: "🍿" },
    { label: "Job", icon: "💼" },
    { label: "Art", icon: "🖼️" },
    { label: "Piercings & Tattoos", icon: "🧷" },
    { label: "Taboos", icon: "🚫" },
    { label: "Origin", icon: "🌍" },
    { label: "Hair", icon: "💇" },
    { label: "Room", icon: "🛏️" },
    { label: "Nature", icon: "🌿" },
    { label: "Plants", icon: "🌱" },
    { label: "Emotional", icon: "😌" },
  ];


  const handleUserBattleTopic = () =>{ 
    
    if(selectedTopic !== ""){
      console.log('triggert on handle');
      const storeType = "dojo_topic"
      navigation.push("BattleFieldBackgroundScreen")
      dispatch(createDojoAction(storeType, selectedTopic))
    }
    


  }


  // console.log('dojo_creater_id', dojo_creater_id);

  
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["black", "black", "gray", "#0a0a0a", "#3a3a3a"]}
        start={[0, 0]}
        end={[1, 1]}
        style={{ flex: 1 }}
      >
        {/* Header */}
        <View className="w-full  h-[7%]  flex mt-[15%]	flex-row items-center  justify-between">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="flex flex-row w-[35%] h-[100%] pl-[2%] items-center"
          >
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
              Choose your Topic
            </Text>
          </View>
        </View>

        {/* Body Section */}
        <View className="px-6 py-4">
          <Text className="text-white/70">
            Get personalized topic recommendations
          </Text>
          {selectedTopic !== "" && (
            <Text className="text-green-500 mt-2">
              Selected: {selectedTopic}
            </Text>
          )}
        </View>

        {/* Scroll View Section */}
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-row flex-wrap justify-between">
            {InterestTopics.map((topic) => {
              const isSelected = selectedTopic === topic.label;
              return (
                <TouchableOpacity
                  key={topic.label}
                  className={`rounded-full px-4 py-3 my-2 mr-2 border ${isSelected ? "bg-green-800/40 border-green-400" : "bg-white/10 border-white/20"}`}
                  onPress={() =>   setSelectedTopic(topic.label)}
                  activeOpacity={0.8}
                >
                  <Text
                    className={`text-base ${isSelected ? "text-green-300" : "text-white"}`}
                  >
                    {topic.icon} {topic.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>

        <View className="px-6  h-[15%] flex justify-center items-center">
          <TouchableOpacity
            onPress={handleUserBattleTopic}
            className="h-12 w-[70%] rounded-lg items-center justify-center border border-green-500 bg-green-800/90"
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

export default BattleTopicScreen;
