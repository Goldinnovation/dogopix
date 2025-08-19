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
            <Text>
                Challenge Waiting Room
            </Text>

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
