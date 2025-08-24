import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import {NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";
import ConnectScreen from './navigation/connectScreen';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
import { Provider } from 'react-redux';
import { BlurView } from 'expo-blur';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import ChargeScreen from './navigation/chargeScreen';
import SettingScreen from './navigation/settingScreen';
import TelefonScreenStructure from './navigation/telefon';
import SetProfileScreen from './navigation/setProfileInfo';
// import LoginScreenStructure from './navigaation/login';
// import DojoScreenStucture from './screen/dojo';
// import ProfileScreenStructure from './screen/profile';
// import SignUpScreenStructure from './screen/signUp';
import LoginScreen from './navigation/loginScreen';
import DojoScreenStucture from './navigation/dojo';
import ProfileScreenStructure from './navigation/profile';
import SignUpScreen from './navigation/signUpScreen';
import RainLayer from './component/Rain/rainlayer';
import FightTopic from './navigation/fightTopic';
import BattleTopicScreen from './navigation/battleTopicScreen';
import JoinScreen from './navigation/JoinScreen';
import CreateScreen from './navigation/createScreen';
import ShopScreen from './navigation/shopScreen';
import GuideScreen from './navigation/guideScreen';
import BattleFieldBackgroundScreen from './navigation/battleFieldBackgroundScreen';
import ChallengeWaitingRoom from './navigation/challengeWaitingRoom';
import ImageSelectionScreen from './navigation/ImageSelectionScreen';


const MyTheme = {

  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  
  },
};


type RouteName = 'Profile' | 'Dojo';


const icons: Record<RouteName, {focused: any; unfocused: any}> = {
  Profile: {
    focused: require('./assets/benw.png'),
    unfocused: require('./assets/beng.png')
  }, 

  Dojo: {

    focused: require('./assets/djw.png'),
    unfocused: require('./assets/djg.png')
  },


}


function AppNavigator() {

  return(
    <NavigationContainer theme={MyTheme} >
     
     <ImageBackground
        source={require("./assets/bgdo.webp")}
        style={styles.background}
      >
    
      <Stack.Navigator screenOptions={{ headerShown: false }}>

          <Stack.Screen name="Login" component={LoginScreen}  options={{gestureEnabled: false,  }} />
         
          {/* <Stack.Screen name="ConnectionScreen" component={TabNavigator}  options={{gestureDirection: 'vertical' }} /> */}
          <Stack.Screen name="SetProfileScreen" component={SetProfileScreen}  options={{ presentation: "card", gestureEnabled: false, }} />
          <Stack.Screen name="SignupScreen" component={SignUpScreen}  options={{ presentation: "modal" }} />
          <Stack.Screen name="ChargeScreen" component={ChargeScreen}  options={{ presentation: "modal" }} />
          <Stack.Screen name="BattleFieldBackgroundScreen" component={BattleFieldBackgroundScreen}  options={{ presentation: "transparentModal" }} />
          <Stack.Screen name="GuideScreen" component={GuideScreen}  options={{ presentation:  "transparentModal"  }}/>
          <Stack.Screen name="BattleTopicScreen" component={BattleTopicScreen}  options={{ presentation:  "card"  }}/>
          <Stack.Screen name="ShopScreen" component={ShopScreen}  options={{ presentation:  "transparentModal"  }}/>
          <Stack.Screen name="CreateScreen" component={CreateScreen}  options={{ presentation:  "transparentModal"  }}/>
          <Stack.Screen name="JoinScreen" component={JoinScreen}  options={{ presentation:  "transparentModal"  }}/>
          <Stack.Screen name="DojoScreen" component={DojoScreenStucture}  options={{ presentation:  "card" ,  gestureEnabled: false,  }}/>
          <Stack.Screen name="SettingScreen" component={SettingScreen}  options={{ presentation:  "card"  }}/>
          <Stack.Screen name="TelefonScreen" component={TelefonScreenStructure}  options={{ presentation:  "transparentModal"  }}/>
          <Stack.Screen name="ChallengeWaitingScreen" component={ChallengeWaitingRoom}  options={{ presentation:  "card", gestureEnabled: false,  }}/>
          <Stack.Screen name="ImageSelectionScreen" component={ImageSelectionScreen}  options={{ presentation:  "card", gestureEnabled: false,  }}/>
          {/* <Stack.Screen name="ChallengeWaitingScreen" component={ChallengeWaitingRoom}  options={{ presentation:  "transparentModal", gestureEnabled: false, cardStyle: { backgroundColor: 'transparent' } }}/> */}

        
        </Stack.Navigator>
  
    </ImageBackground>
    </NavigationContainer>

  )

}




function TabNavigator() {

  const [filter, setFilter] = useState(false)
  const [modeScreenToggle, setModeScreenToggle] = useState(false)
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();







  return (
    <Tab.Navigator
  
     
    screenOptions={({route }) => ({
      tabBarIcon: ({focused}) => {
        const icon = focused
        ? icons[route.name as RouteName].focused
        : icons[route.name as RouteName].unfocused
        return <Image source={icon} 
        style={{
          width: 30, 
          height: 30
      }}
        />
       },
       abBarBackground: () => (
        <BlurView
          intensity={20}
          // tint="light" // or "dark", or "default"
          // style={{ flex: 1 }}
        />
      ),
      tabBarLabelStyle: {
        marginTop: 10, // This creates a gap between icon and labelS

      
      },
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'gray',
      
      tabBarStyle: { 
        ...styles.tabBar,
     

       },
      headerTitleStyle: {
        display: "none"
      },
    })}
   
 
    >
      
     {/* Explore Tab  */}
      <Tab.Screen 
      name='Dojo' 
      component={ConnectScreen}
      options={{
        title: 'Dojo',
        
        headerStyle: {
          backgroundColor: 'rgba(0, 0, 0, 0.53)',
        },
        headerLeft: () => (
          <View style={{
            // backgroundColor:  filter ?  "pink" : "green",
            width:  199,
            height: 30,
            flexDirection: "row",
            alignItems: "center",
            // backgroundColor: "pink"
            paddingLeft: "5%"
           
        
          }}>
            {/* Explore Mode Option */}
            <Text style={{
              fontSize: 25,
              color: "red"
            }}>
              DO-JO-PIX
            </Text>
            
          </View>
        ),
        headerRight: () => (
          <View style={{
            // backgroundColor:  filter ?  "pink" : "green",
            width:  150,
            height: 30,
            flexDirection: "row",
            alignItems: "center",
          justifyContent: "flex-end",
            // backgroundColor: "pink",
            paddingRight: "5%"
           
        
          }}>
            {/* Explore Mode Option */}
          
          <TouchableOpacity 
            onPress={() => navigation.push("TelefonScreen")}
          style={{
            height: "90%",
            width: "30%", 
            // backgroundColor: "pink", 
          alignItems: "center", 
          justifyContent: "center", 
          opacity: 0   //removed the telefon option from the top right section

          }}>
               <Image
                  source={require("./assets/tel.png")}
                  style={{
                    // width: scale(100),
                    // height: verticalScale(25),
                    width: "70%",
                    height: "90%"
                    // borderRadius: 100,
                  }}
                />

          </TouchableOpacity>
            
          </View>
        ),
          headerTintColor: 'grey',
          // headerTitleStyle: {
          //   fontWeight: 'bold'}
            
      }}
      
      ></Tab.Screen>



         {/* Profile Tab */}
      <Tab.Screen    
      name='Profile'
      component={ProfileScreenStructure}
      options={{
        title: 'Profile',
        headerStyle: {
          backgroundColor: 'rgba(0, 0, 0, 0.53)'},
          headerLeft: () => (
            <View style={{
              // backgroundColor:  filter ?  "pink" : "green",
              width:  199,
              height: 30,
              flexDirection: "row",
              alignItems: "center",
              // backgroundColor: "pink"
              paddingLeft: "5%"
             
          
            }}>
              {/* Explore Mode Option */}
              <Text style={{
                fontSize: 25,
                color: "red"
              }}>
                DO-JO-PIX
              </Text>
              
            </View>
          ),
          headerRight: () => (
            <View style={{
              // backgroundColor:  filter ?  "pink" : "green",
              width:  150,
              height: 30,
              flexDirection: "row",
              alignItems: "center",
            justifyContent: "flex-end",
              // backgroundColor: "pink",
              paddingRight: "5%"
             
          
            }}>
              {/* Explore Mode Option */}
            
            <TouchableOpacity 

            onPress={() => navigation.push("SettingScreen")}
            style={{
              height: "90%",
              width: "30%", 
              // backgroundColor: "pink", 
            alignItems: "center", 
            justifyContent: "center"
            }}>
                 <Image
                    source={require("./assets/setw.png")}
                    style={{
                      // width: scale(100),
                      // height: verticalScale(25),
                      width: "55%",
                      height: "94%"
                      // borderRadius: 100,
                    }}
                  />
  
            </TouchableOpacity>
              
            </View>
          ),

          headerTintColor: 'grey',
          // headerTitleStyle: {
          //   fontWeight: 'bold'}

          
      }}
      
       ></Tab.Screen>
    </Tab.Navigator>
  );
}


export default function App() {
  return (

    // <Provider store={store} >
    // <View style={styles.container}>
    
    <AppNavigator/>
    
       
       
     
    // </View>
    // </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    // backgroundColor: 'skyblue',
    display: "flex", 
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: "2%"

  },
  tabBar: {
    // backgroundColor: 'grey', // Customize the background color
   
    height: 100, 
    borderTopWidth: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.53)', // Semi-transparent white for frosted effect
    position: 'absolute',
    paddingTop: 20,
    gap: 5
  },

  background: {
    flex: 1,
  },
});
