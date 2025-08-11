import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { ParamListBase } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";



const SettingScreenStructure = () => { 
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();



    const handleGoBackTopProfile = () => {
        navigation.goBack()
    }


    return(
            
         <View style={styles.container}>
            <Text>Setting</Text>

             <TouchableOpacity
             onPress={() => handleGoBackTopProfile()}
             >
                <Text>
                    Back
                </Text>
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


export default SettingScreenStructure