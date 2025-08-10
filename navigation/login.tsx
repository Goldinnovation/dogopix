import { View, Text, StyleSheet, TouchableOpacity,TextInput, ImageBackground, Image} from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useState } from "react";
import { ParamListBase } from "@react-navigation/native";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';




const LoginScreenStructure = () => {
  const [email, setonChangeEmail] = useState("");
  const [password, setonChangePassword] = useState("");
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleLoginData = async () => {

    navigation.replace("ConnectionScreen");
    // try {
    //   const result = await useLoginPost(email, password);
    //   if (result.message && result.token) {
    //     result?.message === "Interest section is empty"
    //       ? navigation.replace("interestScreeen")
    //       : navigation.replace("UserExploreScreen");
    //     const userData = await AsyncStorage.setItem(
    //       "token",
    //       JSON.stringify({
    //         token: result,
    //       })
    //     );
    //   } else {
    //     //  Need to create a error Pop up if the process with the login fail
    //     console.log(
    //       "error on handleLoginData, failed to process result of login"
    //     );
    //   }
    // } catch (error) {
    //   console.log("Error on handleLoginData submit fetch, Server Res issue", error);
    // }
  };





     return(
      <View style={styles.container}>

<ImageBackground
        source={require("./../assets/cont.webp")}
        style={styles.background}
      > 
      <View style={{
        //  backgroundColor: "green",

         width: scale(350), //"100%"
         height: verticalScale(550),
         justifyContent: "center",
         marginTop: 10
      }}>



      
        <View style={ {
          // backgroundColor: "pink",
          height: verticalScale(390),
          gap: hp("4%"),
          //  gap: 20,

          //  paddingTop: 0,
           marginTop: 50,
           alignItems: "center",
           display: "flex", 
           flexDirection: "column",
           justifyContent: "center"

        }}>
           <View style={{
            // backgroundColor: "green",
          }}> 
            {/* // <Text style={{
            //   fontWeight: "bold",
            //   fontSize: 27,
            //   textAlign: "center",
            //   color: "white",
            // }}>Worthsec</Text> */}
         
          {/* <Image
                  source={require("../assets/emsfw.png")}
                  style={{
                    width: scale(280),
                    // width: wp("90%"),
                    height: verticalScale(65),
                    // height: hp("11%")
                    // borderRadius: 100,
                  }}
          /> */}
          <Text style={{
            fontSize: 60, 
            color: "red", 
            fontFamily: "Helvetica"

          }}>
            DO-JO-PIX
          </Text>
           </View> 
          <View style={{
            // backgroundColor: "orange",
            marginTop: "5%"
          }}>
          <Text
            style={{
              fontWeight: "300",
              fontSize: 18,
              textAlign: "center",
              color: "white",

            }}
          >
            login to your Account
          </Text>

          </View>
         
         
          <TextInput
            style={styles.emailInput}
            onChangeText={setonChangeEmail}
            value={email}
            placeholder="Enter your Email"
            placeholderTextColor="#000" 
          />
          <TextInput
            style={styles.passwordInput}
            onChangeText={setonChangePassword}
            value={password}
            placeholder="Enter your Password"
            secureTextEntry={true}
            placeholderTextColor="#000" 
          />
          <View
            style={{
              // backgroundColor: "green",
              width: "80%",
              height: 30,
              justifyContent: "center",
              alignItems: "flex-end",
              marginTop:"2%"
            }}
          >
            <Text style={{ fontWeight: "500", color: "white", marginRight: 2 }}>
              forgot Password?
            </Text>
          </View>
        </View>
        <View style={{
           // backgroundColor: "orange",
          justifyContent: "center",
          alignItems: "center",
          height: 90,
        }}>
          <TouchableOpacity style={styles.loginBtn} onPress={handleLoginData}>
            <Text style={{
              color: "white"
            }}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.SignBtn_layer}>
          <TouchableOpacity style={styles.SignUpBtn}
          
          onPress={() => navigation.push("SignupScreen")}
          >
            <Text style={{
              color: "white"
            }}>Create a New Account</Text>
          </TouchableOpacity>
        </View>
      </View>

      </ImageBackground>
    </View>
     )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
  },
  loginLayer: {
    backgroundColor: "green",

    width: "100%",
    height: 500,
    justifyContent: "center",
  },
  loginInputLayer: {
    // backgroundColor: "pink",
    height: 230,
    gap: 20,
    paddingTop: 30,
    marginTop: 80,
    alignItems: "center",
  },
  emailInput: {
    height: 40,

    borderWidth: 1,
    padding: 5,
    // margin: 30,
    width: "80%",
    backgroundColor: "#c7c7c7",
    borderRadius: 7,
    marginTop: 20,
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
  loginBtn_layer: {
    // backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    // marginTop: 10,
  },
  loginBtn: {
    backgroundColor: "grey",
    height: 40,
    width: "60%",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 50
  },
  SignBtn_layer: {
    // backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  SignUpBtn: {
    // backgroundColor: "grey",
    height: 40,
    width: "60%",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  SignUpBtn_text: {
    color: "white",
    textDecorationLine: "underline",
  },
  
  background: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
  
  },
  });
  


export default LoginScreenStructure