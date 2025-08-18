import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";




const GuideScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  
  return (
    <View style={styles.container}>
         <LinearGradient
      colors={["#0f2027", "#143d1c", "#000"]}
      start={[0, 0]}
      end={[1, 1]}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 60,
          paddingVertical: 36,
          paddingHorizontal: 16,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* <BlurView
          intensity={70}
          tint="dark"
          style={{
            width: "100%",
            maxWidth: 420,
            borderRadius: 28,
            padding: 28,
            marginVertical: 16,
            borderWidth:2,
            borderColor: "rgba(80,255,120,0.15)",
            // backgroundColor: "rgba(20,40,30,0.35)",
            shadowColor: "#39ff14",
            shadowOpacity: 0.15,
            shadowRadius: 16,
            shadowOffset: { width: 0, height: 4 },
          }}
        > */}
          <Text className="text-3xl font-bold text-green-300 mb-4  text-center tracking-wider">
            Welcome to the Guide
          </Text>
          <Text className="text-base text-white leading-7 text-center mb-4">
            Using this app is based on <Text className="font-bold text-green-200">trust</Text> and <Text className="font-bold text-green-200">open communication</Text>.{"\n\n"}
            Playing this game means showing trust and respect for your relationships.{"\n\n"}
            <Text className="font-bold text-red-400">
            🚩 This app is not for cheaters, psychopaths, narcissists.
            </Text>{"\n\n"}
            Please use it with honesty, empathy, and a willingness to connect.{"\n\n"}
            If you’re ready to play fair and build trust, you’re in the right place!
          </Text>
          <View className="w-full bg-white/10 rounded-2xl p-4 mb-4 border border-white/10">
  <Text className="text-xl font-bold text-green-200 mb-5 mt-3  text-center">
    How to Play DojoPix
  </Text>
  <Text className="text-base text-white leading-7 mb-4">
    DojoPix is a creative twist on the classic game of rock, paper, scissors—using images!{"\n\n"}
    <Text className="font-bold">Choose Your Mode:</Text>
  </Text>
  {/* Simple Trust */}
  <View className="mb-6">
    <Text className="text-lg font-bold text-green-200 mb-2">
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
  </View>
  {/* Deep Trust */}
  <View>
    <Text className="text-lg font-bold text-green-200 mb-2">
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
  </View>
 
  <Text className="font-bold text-red-400 text-center mt-5 mb-5">
  Choose wisely! 😎
</Text>
</View>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="h-12 w-3/4 rounded-full items-center justify-center border border-green-400 bg-green-800/80 mt-2 self-center"
          >
            <Text className="text-green-100 font-bold text-lg">Start</Text>
          </TouchableOpacity>
        {/* </BlurView> */}
      </ScrollView>
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
});
export default GuideScreen;
