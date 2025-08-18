import { View, Text, StyleSheet, TouchableOpacity, Image} from "react-native"
import { ParamListBase } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";





const ShopScreen = () => { 
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();


    return(
        <View style={styles.container}>
        <View className="h-[7%] w-full flex flex-row items-center justify-center">
          <Text className="text-3xl color-white">Shop</Text>
        </View>
        <View className="h-[90%] w-full flex flex-col">
         

          <View className="w-full h-[100%] p-[4%] items-center justify-center">
            <View className="w-[97%] h-[80%] border rounded-lg border-white">

            <Image
                source={require("../assets/up.jpg")}
                style={{
                  // width: scale(100),
                  // height: verticalScale(25),
                  width: "100%",
                  height: "100%",
                  borderRadius: 7,
                }}
              />
            </View>
            <View className="w-full h-[20%] flex flex-col items-center justify-around ">
             <View className="w-[97%] h-[40%] items-center justify-between flex flex-row">
                
                <View className="pl-[1%]">
                <Text className="color-white">Title: Moon Night</Text>
                </View>
              
                <View className=" flex flex-row h-[50%] w-[30%] border rounded-lg border-white">
                 <View className="w-[60%] h-full items-end pr-[10%]">
                 <Text className="text-white text-lg">400</Text>
                 </View>

                <View className=" w-[40%] h-full items-center justify-center">
                <Image
                source={require("../assets/h1.png")}
                style={{
                  // width: scale(100),
                  // height: verticalScale(25),
                  width: "40%",
                  height: "60%",
                  // borderRadius: 100,
                }}
                    />
                </View>
               
                </View>
               
             </View>
             <View className="w-[97%]  h-[50%]">
                <View className="w-full h-[50%] items-center justify-center pb-[6%]">
                 <View className="bg-gray-500 w-[90%] h-[40%] rounded-full">
                 <View className="bg-red-500 w-[80%] h-[100%] rounded-full">

                    </View>     
                 </View>
                </View>

                <View className="w-full h-[50%] flex flex-row items-center justify-between">
                <View className="h-[50%] pl-[2%] ">
                <Text className="text-white text-md">Stock:</Text>
                </View>
                <View className="h-[50%] pr-[2%]">
                <Text className="text-white text-md">8 | 10</Text>
                </View>
                </View>
             </View>
             
            </View>
          </View>
          {/* <View className="bg-green-400 w-full h-[20%]">
            
            <View>
            <Text>22121</Text>
            </View>
          </View> */}
        </View>
        
  
     
      </View>
    )
}



const styles = StyleSheet.create({

    container: {
      backgroundColor: "black",
      // background: "transparent"
      flex: 1,
      height: "100%",
      // width: "100%",
    //   justifyContent: "center",
    //   alignItems: "center",
      paddingTop: 50,
      // padding: 7
  
    },
  })
  


export default ShopScreen