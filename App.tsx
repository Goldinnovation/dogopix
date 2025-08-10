import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import DescripScroll from './component/descriptionscroll/descripScroll';
import SliderComp from './component/Slider/sliderComp';
import ShowBoardComp from './component/showBoard/showBoardComp';

export default function App() {
  return (
    <View style={styles.container}>
    

       <View  
       
       style={{
        // backgroundColor: "grey",
        // backgroundImage: 'url("/assets/bat.webp")',
        // experimental_backgroundImage: 'url("/assets/bat.webp")',
        width: "95%", 
        height: "91%", 
        display: "flex", 
        flexDirection: "column", 
        gap: 10, 
        borderWidth: 1,
        borderColor: "gray",
        borderStyle: "solid",
        borderRadius: 7,
        position:"relative"
        

       }}>
        <View style={{
          position: "absolute",
          width: "100%", 
          height: "100%",

          zIndex: 0
        }}>
        <Image
          source={require("./assets/back.webp")}
          style={{
            width: "100%",
            height: "100%",
            borderRadius:7, 
            
          

          }}
        />

        </View>
        
        {/* Play Board  */}
        <ShowBoardComp/>
      

        <DescripScroll/>


        <SliderComp/>

       </View >
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: "100%",
    backgroundColor: 'black',
    display: "flex", 
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: "2%"

  },
});
