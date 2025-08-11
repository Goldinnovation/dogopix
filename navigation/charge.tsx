import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { ParamListBase } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";



const ChargeScreenStructure = () => { 
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();





    const hanleGoBackToProfile = () => {

        navigation.goBack()
    }
 
    return(
            
         <View style={styles.container}>
            <Text>Charge</Text>


            <TouchableOpacity
                onPress={() => hanleGoBackToProfile()}
            >
                <Text>Back </Text>
            </TouchableOpacity>
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


export default ChargeScreenStructure