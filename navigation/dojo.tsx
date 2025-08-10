import { View, Text, Image, ImageBackground, StyleSheet } from "react-native"
import ShowBoardComp from "../component/showBoard/showBoardComp"
import DescripScroll from "../component/descriptionscroll/descripScroll"
import SliderComp from "../component/Slider/sliderComp"



const DojoScreenStucture = () => {
    return(
      <View style={styles.container}>
        <View  
       
        style={{
         backgroundColor: "grey",
        //  flex: 1,
         // backgroundImage: 'url("/assets/bat.webp")',
         // experimental_backgroundImage: 'url("/assets/bat.webp")',
         width: "100%", 
         height: "92%", 
         display: "flex", 
         flexDirection: "column", 
         gap: 10, 
         borderWidth: 1,
        //  borderColor: "gray",
        //  borderStyle: "solid",
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
           source={require("../assets/back.webp")}
           style={{
             width: "100%",
             height: "100%",
             borderRadius:7, 
            //  opacity: 0.7
             
           
 
           }}
         />
 
         </View>
         
         {/* Play Board  */}
         <ShowBoardComp/>
       
 
         <DescripScroll/>
 
 
         <SliderComp/>
 
        </View >

      </View>
    )



}

const styles = StyleSheet.create({

  container: {
    backgroundColor: "black",
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



export default DojoScreenStucture