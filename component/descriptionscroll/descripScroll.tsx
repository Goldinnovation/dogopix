import { View, Text } from "react-native";
import { Image } from "react-native";

const DescripScroll = () => {
  return (
    <View
      style={{
        // backgroundColor: "pink",
        width: "100%",
        height: "20%",
        // opacity: 0.5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 7,
        padding: 7,
      }}
    >
      <View
        style={{
        //   backgroundColor: "red",
          width: "35%",
          height: "80%",
          position: "relative", 
          
          
        }}
      >
          <Image
          source={require("../../assets/bat.webp")}
          style={{
            width: "100%",
            height: "100%",
            borderRadius:7
          

          }}/>
           <View
        style={{
            height: "40%",
            width: "90%",
            top: "108%",
            left: "50%",
            transform: "translate(-20%, 0%)",
            position: "absolute"
        }} 
        >
            <Text style={{
                color: "white"
            }}>Bobby</Text>
        </View>
      </View>

      <View
        style={{
          // backgroundColor:"blue",
          width: "25%",
          height: "80%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 45,
          }}
        >
          VS
        </Text>
      </View>
      <View
        style={{
        //   backgroundColor: "green",
          width: "35%",
          height: "80%",
          borderRadius: 10,
          borderWidth: 2, 
          borderColor: "green", 
          position: "relative", 
        
        }}
      >
        {/* <Text>3</Text> */}
        {/* <img src="img1.png" /> */}
        <Image
          source={require("../../assets/fran.webp")}
          style={{
            width: "100%",
            height: "100%",
            borderRadius:7, 
            
          

          }}
        />

        <View
        style={{
            height: "40%",
            width: "90%",
            top: "108%",
            left: "50%",
            transform: "translate(-10%, 0%)",
            position: "absolute"
        }} 
        >
            <Text style={{
                color: "white"
            }}>You</Text>
        </View>
      </View>
    </View>
  );
};

export default DescripScroll;
