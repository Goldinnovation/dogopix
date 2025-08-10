import { View, Text, Image } from "react-native"




const ProfileScreenStructure = () => {
    return(
        <View>
            <View style={{
                // backgroundColor: "orange", 
                width: "100%", 
                height:"25%"
            }}>
              <View style={{
                // backgroundColor: "pink", 
                width: "50%", 
                height: "100%", 
                // alignItems:"center",
                justifyContent: "center",
                paddingLeft: "2%"


              }}>
                <View style={{
                    width: "60%", 
                    height: "60%",
                    borderWidth: 1,
                    borderRadius: 50, 
                    borderColor: "gray", 
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    flexDirection: "row"
                }}>
                   <View style={{
                    width: "40%", 
                    height: "100%",
                    // backgroundColor: "pink",
                    alignItems: "center", 
                    justifyContent: "center"

                   }}>
                   
                   <Image
                  source={require("../assets/wag.png")}
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
                   }}>1</Text>
                   </View>

                </View>

              </View>

              <View>

              </View>
            </View>

            <View>
            <Text>1</Text>
            </View>

        
        </View>
    )
}



export default ProfileScreenStructure