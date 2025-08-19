import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from "react-native"
import { ParamListBase } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import "../global.css"


const SettingScreen = () => { 
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();



    const handleGoBackTopProfile = () => {
        navigation.goBack()
    }


    return(
      <ImageBackground
      source={require("./../assets/bgdo.webp")}
      style={{flex: 1,}}
    >
         <View style={styles.container}>

     
        
          {/* Header Section */}
            <View  className="w-full  h-[7%]  flex	flex-row items-center  justify-between">  
            <TouchableOpacity 
            onPress={handleGoBackTopProfile}
            className="flex flex-row w-[35%] h-[100%] pl-[2%] items-center">
            <Image
                  source={require("./../assets/arr1.png")}
                  style={{
                    // width: scale(100),
                    // height: verticalScale(25),
                    width: "20%",
                    height: "60%"
                    // borderRadius: 100,
                  }}
                />

                <View className=" pl-[6%]">
                  <Text className="color-white text-xl">
                    Back
                  </Text>
                </View>

            </TouchableOpacity>
           
            <View className="pr-[5%]">
            <Text className="text-3xl text-white font-bold tracking-wide">Setting</Text>
            </View>
            </View>
           
          {/* Body Section */}
              <View className=" h-[90%] mt-[20%]  items-center" >
                <View className="w-full h-[95%]  gap-16">
                  {/* Component first row  */}
                  <View className=" mt-[20%] h-[17%] flex flex-row items-center justify-center gap-11">
                  
                  {/* Shop */}
                  <View className="w-[30%] h-[100%] items-center justify-center   gap-2">
                  <TouchableOpacity
                  // onPress={() => navigation.push("ShopScreen")
                  onPress={() => navigation.push("GuideScreen")}
                   className=" h-[70%] w-[70%] bg-[rgba(0,0,0,0.75)] rounded-full items-center justify-center">
                  {/* <Image
                  source={require("./../assets/fed.png")}
                  style={{
                    // width: scale(100),
                    // height: verticalScale(25),
                    width: "50%",
                    height: "50%"
                    // borderRadius: 100,
                  }}
                    
                /> */}
                 <Image
                  source={require("./../assets/alien.png")}
                  style={{
                    // width: scale(100),
                    // height: verticalScale(25),
                    width: "50%",
                    height: "50%"
                    // borderRadius: 100,
                  }}/>
                  </TouchableOpacity>
                  <View className="w-[100%] h-[20%] items-center justify-center">
                    <Text className="color-white">Guide</Text>
                  </View>
                  </View>

                  {/*   Shop */}
                  <View className="w-[30%] h-[100%] items-center justify-center   gap-2">
                  <TouchableOpacity
                  onPress={() => navigation.push("SetProfileScreen")}
                   className=" h-[70%] w-[70%] bg-[rgba(0,0,0,0.75)] rounded-full items-center justify-center">
                  <Image
                  source={require("./../assets/edpf.png")}
                  style={{
                    // width: scale(100),
                    // height: verticalScale(25),
                    width: "50%",
                    height: "50%"
                    // borderRadius: 100,
                  }}
                />
                  </TouchableOpacity>
                  <View className="w-[100%] h-[20%] items-center justify-center">
                    <Text className="color-white">Edit</Text>
                  </View>
                  </View>

                 
                  
                  </View>

                    {/* Component Second Row */}
                  <View className=" h-[17%] flex flex-row items-center justify-center gap-11 mt-[10%]">
                  
                  {/* Feedback */}
                  <View className="w-[30%] h-[100%]  items-center justify-center   gap-2">
                  <TouchableOpacity className=" h-[70%] w-[70%] bg-[rgba(0,0,0,0.75)] rounded-full items-center justify-center">
                  <Image
                  source={require("./../assets/fdk.png")}
                  style={{
                    // width: scale(100),
                    // height: verticalScale(25),
                    width: "55%",
                    height: "55%"
                    // borderRadius: 100,
                  }}/>
                  </TouchableOpacity>
                  <View className="w-[100%] h-[20%] items-center justify-center">
                    <Text className="color-white">Feedback</Text>
                  </View>
                  </View>

                  {/*   Shop */}
                  <View className="w-[30%] h-[100%]  items-center justify-center   gap-2">
                  <TouchableOpacity
                   onPress={() => navigation.replace("Login")}
                  className=" h-[70%] w-[70%] bg-[rgba(0,0,0,0.75)] rounded-full items-center justify-center">
                 
                   <Image
                  source={require("./../assets/pwOf.png")}
                  style={{
                    // width: scale(100),
                    // height: verticalScale(25),
                    width: "45%",
                    height: "45%"
                    // borderRadius: 100,
                  }}/>
                  </TouchableOpacity>
                  <View className="w-[100%] h-[20%] items-center justify-center">
                    <Text className="color-white">Power Off</Text>
                  </View>
                  </View>



                 
                  
                  </View>


                  {/* Power Off Section */}
                  {/* 
                  <View className=" h-[17%] flex flex-row items-center justify-center gap-11 ">
                  
             
                  <View className="w-[30%] h-[100%]  items-center justify-center   gap-2">
                    
                  <TouchableOpacity 
                 
                  className=" h-[70%] w-[70%] bg-[rgba(0,0,0,0.75)] rounded-full items-center justify-center">
                  <Image
                  source={require("./../assets/pwOf.png")}
                  style={{
                    // width: scale(100),
                    // height: verticalScale(25),
                    width: "45%",
                    height: "45%"
                    // borderRadius: 100,
                  }}/>
                  </TouchableOpacity>
                  
                  <View className="w-[100%] h-[20%] items-center justify-center">
                    <Text className="color-white">Power Off</Text>
                  </View>
                  </View>

                 


                 
                  
                  </View> */}

                </View>
              </View>

         </View>
         
         </ImageBackground>
    )
}





const styles = StyleSheet.create({

  container: {
    backgroundColor: "transaprent",
    // background: "transparent"
    flex: 1,
    height: "100%",
    // width: "100%",
    // justifyContent: "center",
    // alignItems: "center",
    paddingTop: 40,
    // padding: 7

  },
})


export default SettingScreen