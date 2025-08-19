
import { View, Text, StyleSheet } from "react-native";




const BattleTopicScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Battle Topic Screen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "pink",
        paddingTop: 50,
    }
})

export default BattleTopicScreen;
