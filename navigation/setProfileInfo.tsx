import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ImageBackground } from "react-native";
import RainLayer from "../component/Rain/rainlayer";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";

const SetProfileScreen = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    const handleAgentEntry = () => {
        navigation.replace("ConnectionScreen"); 
    }
  return (

    <View style={{ flex: 1,  backgroundColor:"black" }}>
    <ImageBackground
        source={require("./../assets/room.webp")}
        style={{flex: 1,}}
      >

     
              {/* <RainLayer /> */}
   
    <View style={styles.container}>
      <View
        style={{
        //   backgroundColor: "green",
          width: "100%",
          height: "15%",
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          
        }}
      >
        <Text style={{
            fontSize: 30, 
            color: "green"


        }}>Enter Your Profile</Text>
      </View>

      <View
        style={{
        //   backgroundColor: "red",
          width: "100%",
          height: "70%",
        }}
      >
        <View style={{
            height: "40%",
            width: "100%",
            // backgroundColor: "orange",
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            
        }}>
            
            <TouchableOpacity style={{
            height: "75%",
            width: "43%",
            backgroundColor: "grey", 
            borderRadius: 100,
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            position: "relative"
            
            }}>
           
           
           <Image
                  source={require("./../assets/agent.png")}
                  style={{
                    // width: scale(100),
                    // height: verticalScale(25),
                    width: "70%",
                    height: "90%"
                    // borderRadius: 100,
                  }}
                />

            <View style={{
                position:"absolute",
                top: "10%",
                
                width: "36%",
                height: "30%",
                left: "70%",
                // backgroundColor: "green",
                zIndex: 5,
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 
            }}>
                    <Image
                  source={require("./../assets/shot.png")}
                  style={{
                    // width: scale(100),
                    // height: verticalScale(25),
                    width: "70%",
                    height: "90%"
                    // borderRadius: 100,
                  }}
                />

               

            </View>
          
        </TouchableOpacity>
       
        </View>
        
        <View style={{
            height: "20%",
            width: "100%",
            // backgroundColor: "pink",
            alignItems: "center", 
            justifyContent: "center"
            
        }}>
                  <TextInput
            style={styles.passwordInput}
            // onChangeText={}
            // value={password}
            placeholder="Enter your Name"
            placeholderTextColor="#000" 
          />
        </View>

        <View
        style={{
        //   backgroundColor: "blue",
          width: "100%",
          height: "25%",
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
        }}
      >
        <TouchableOpacity 
        style={{
            backgroundColor: "green",
            height: 40,
            width: "50%",
            borderRadius: 100,
            alignItems: "center",
            justifyContent: "center",
        }}
        onPress={handleAgentEntry}
        >
            <Text style={{
              color: "white"
            }}>Enter</Text>
          </TouchableOpacity>
      </View>

       
      </View>

      

    </View>
    </ImageBackground>
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    // background: "transparent"
    flex: 1,
    height: "100%",
    // width: "100%",
    // justifyContent: "center",
    alignItems: "center",
    paddingTop: 60,
    // padding: 7
  },

  passwordInput: {
    height: 40,
    borderWidth: 1,
    padding: 5,
    width: "80%",
    // margin: 30,
    backgroundColor: "#c7c7c7",
    borderRadius: 7,
  },
});

export default SetProfileScreen;
