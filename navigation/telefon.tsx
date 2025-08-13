import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native"

import { ParamListBase } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import "../global.css"


const TelefonScreenStructure = () => { 
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    const CityMap = [
      {
        Id: "1", 
        city: "Berlin",
        image: "image.png"
      }, 
      {
        Id: "1", 
        city: "Berlin",
        image: "image.png"
      },
      {
        Id: "1", 
        city: "Berlin",
        image: "image.png"
      },
      {
        Id: "1", 
        city: "Berlin",
        image: "image.png"
      },
      {
        Id: "1", 
        city: "Berlin",
        image: "image.png"
      }

    ]




    const hanleGoBackToProfile = () => {

        navigation.goBack()
    }
 
    return(
            
         <View style={styles.container}>
            <Text>Charge</Text>


            <View className="items-center justify-center bg-blue-200 h-[20%]">

            <Text>halldsdsdsdlo</Text>
            </View>

            <View>
            <Text>Content</Text>
            </View>
            {/* <TouchableOpacity
                onPress={() => hanleGoBackToProfile()}
            >
               
            </TouchableOpacity> */}
         </View>
    )
}





const styles = StyleSheet.create({

  container: {
    backgroundColor: "pink",
    // background: "transparent"
    flex: 1,
    height: "100%",
    // width: "100%",
    justifyContent: "center",
    alignItems: "center",
    // paddingTop: 50,
    // padding: 7

  },
})


export default TelefonScreenStructure