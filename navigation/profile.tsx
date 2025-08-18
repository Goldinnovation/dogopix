import { View, Text, Image, TouchableOpacity, StyleSheet} from "react-native"
import { ParamListBase } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";



const ProfileScreenStructure = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();




  const handleChargeScreen = () => {
    navigation.push("ChargeScreen");
  }
    return(
        <View style={styles.container}>
            <View style={{
                // backgroundColor: "orange", 
                width: "100%", 
                height:"7%", 
                flexDirection: "row", 
                alignItems: "center", 
                justifyContent: "space-between", 
                marginTop: "3%",
                // opacity: 0
            }}>
         

       

                {/* Love Heart Section */}
                <View style={{
                // backgroundColor: "green", 
                width: "30%", 
                height: "100%", 
                // alignItems:"center",
                justifyContent: "center",
                paddingLeft: "2%"


              }}>
                <View style={{
                    width: "100%", 
                    height: "60%",
                    borderWidth: 1,
                    borderRadius: 50, 
                    borderColor: "gray", 
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    flexDirection: "row",
                    
                }}>
                   <View style={{
                    width: "40%", 
                    height: "100%",
                    // backgroundColor: "pink",
                    alignItems: "center", 
                    justifyContent: "center"

                   }}>
                   
                   <Image
                  source={require("../assets/h1.png")}
                  style={{
                    // width: scale(100),
                    // height: verticalScale(25),
                    width: "40%",
                    height: "60%"
                    // borderRadius: 100,
                  }}
                />
                   </View>

                   <View style={{
                    width: "60%", 
                    height: "100%",
                    // backgroundColor: "pink", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    borderLeftWidth: 1, 
                    borderLeftColor: "gray"
                   }}>
                   <Text style={{
                    color: "white", 
                    fontSize: 15
                   }}> 200</Text>
                   </View>



                </View>

              </View>



                
                {/* Charge Life */}
                <View style={{
                // backgroundColor: "pink", 
                width: "50%", 
                height: "100%", 
                alignItems: "flex-end",
                justifyContent: "center",
                
                paddingRight: "4%"


              }}>
                <TouchableOpacity 

                onPress={() => handleChargeScreen()}
                style={{
                    width: "90%", 
                    height: "60%",
                    // borderWidth: 1,
                    borderRadius: 7, 
                    // borderColor: "gray", 
                    backgroundColor: 'rgba(185, 4, 170, 0.69)',
                    flexDirection: "row"

                }}>
                  
                   <View style={{
                    width: "100%", 
                    height: "100%",
                    // backgroundColor: "pink", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    // borderLeftWidth: 1, 
                    // borderLeftColor: "gray"
                   }}>
                   <Text style={{
                    color: "white", 
                    fontSize: 15
                   }}> Charge Life</Text>
                   </View>



                </TouchableOpacity>

              </View>

          
            </View>


            <View style={{
              width: "100%",
              height: "75%", 
              // backgroundColor: "pink", 
              justifyContent: "center", 
              alignItems: "center", 
              // 
              
           
             
            }}>

                <View style={{
                  // backgroundColor: "skyblue", 
                  width: "100%", 
                  height: "60%",
                  justifyContent: "center", 
                  alignItems: "center", 
                  gap: "15%", 
                  paddingTop: "7%"

                }}>
                <Text style={{
              fontSize: 35,
              textAlign: "center", 
              color: "white", 
              opacity: 0.9


            }}>You do not truly know someone until you fight them</Text>
          <Text style={{
                 fontSize: 20,
                 textAlign: "center", 
                 color: "white", 
                 opacity: 0.9
            }}>
              -Seraph (Matrix)
           
            </Text>
            

                </View>


             
              <View>

              </View>


           
           
          
          
            </View>

        
        </View>
    )
}



const styles = StyleSheet.create({

  container: {
    // backgroundColor: "black",
    // background: "transparent"
    flex: 1,
    // height: "100%",
    // width: "100%",
    // justifyContent: "center",
    // alignItems: "center",
    // paddingTop: 50,
    // padding: 7


  },
})



export default ProfileScreenStructure