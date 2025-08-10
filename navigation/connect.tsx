import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ParamListBase } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
const ConnectScreenStructure = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();


    const handleInputData = () => {
        
    navigation.replace("DojoScreen");
    }


    return(
        <View style={styles.container}>
            <View style={{
                // backgroundColor: "orange",
                width: "100%",
                height: "30%", 
                alignItems: "center", 
                justifyContent: "center"
            }}>
                <View style={{
                    width: "100%", 
                    height: "80%", 
                    // backgroundColor: "skyblue",
                    alignItems: "center", 
                    justifyContent: "center"
                }}>
                        <Image
                  source={require("../assets/me.jpeg")}
                  style={{
                    // width: scale(100),
                    // height: verticalScale(25),
                    width: "40%",
                    height: "90%",
                    borderRadius: 100,
                  }}
                />
                </View>
                <View style={{
                    width: "100%", 
                    height: "20%", 
                    // backgroundColor: "orange", 
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                        <Text
                        style={{
                            fontSize: 20, 
                            color: "white",
                            opacity: 0.5
                        }}
                        >CPN3000</Text>
                </View>

              
            </View>
         <View
            style={{
                //  backgroundColor: "orange",
              justifyContent: "center",
              alignItems: "center",
              // height: verticalScale(90),
              gap: "30%",
              height: hp("35%"),
              width: wp("100%"),
              marginBottom: hp("15%"),
            }}
          >

           
            
            <TouchableOpacity onPress={handleInputData} activeOpacity={0.7}>
                <LinearGradient
                    colors={['pink','red','darkred', 'red', 'pink']}
                    style={{ 
                    height: hp("5%"),
                    width: wp("70%"),
                    borderRadius: 100,
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: 7,
                    opacity: 0.8
                    }}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 0, y: 0 }}
                >
                    <Text
                    style={{
                        color: "white",
                        fontSize: 20,
                        letterSpacing: 10
                    }}
                    >
                    Create
                    </Text>
                </LinearGradient>
                </TouchableOpacity>
     
                <TouchableOpacity onPress={handleInputData} activeOpacity={0.7}>
                <LinearGradient
                    colors={['skyblue', 'blue', 'darkblue', 'blue', 'skyblue', ]}
                    style={{
                    height: hp("5%"),
                    width: wp("70%"),
                    borderRadius: 100,
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: 7,
                    opacity: 0.8
                    }}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 0, y: 0 }}
                >
                    <Text
                    style={{
                        color: "white",
                        fontSize: 20,
                        letterSpacing: 10
                    }}
                    >
                    Join
                    </Text>
                </LinearGradient>
                </TouchableOpacity>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "transparent",
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },

      gradient: {
    ...StyleSheet.absoluteFillObject,
    // paddingTop: verticalScale(40),
    flex: 1,
  },

})

export default ConnectScreenStructure