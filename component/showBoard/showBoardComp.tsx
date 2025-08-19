import { View, Text} from "react-native"






const ShowBoardComp = () => {

    return(
        
        <View style={{
            // backgroundColor: "green",
            width: "100%", 
            height: "60%", 
            // opacity: 0.5,
         }}>
         <View style={{
            // backgroundColor:"orange",
            width: "100%",
            height: "80%",
            display: "flex",
            justifyContent: "center", 
            alignItems: "center", 

         }}>
            <View style={{
                //   backgroundColor:"blue",
                  width: "100%",
                  height: "80%",
            }}>
            <Text>1</Text>
            </View>

         
         </View>

         <View style={{
            // backgroundColor:"pink",
            width: "100%",
            height: "20%",
            // opacity: 0.8,
            display: "flex",
            justifyContent: "center", 
            alignItems: "center", 
            position: "relative", 
            borderBottomWidth: 1, 
            borderBottomColor: "gray" ,
            borderTopColor: "gray", 
            borderTopWidth: 0  //default 1
              


           
         }}>

                <View style={{
                    backgroundColor: "black", 
                    width: "70%",
                    height: "60%", 
                    position: "absolute", 
                    top: "-30%",
                    borderWidth: 1, 
                    borderColor: "gray",
                    borderStyle: "solid", 
                    borderRadius: 7,
                    display: "flex", 
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: 0 //defaul none 
                }}>
                    <Text style={{
                        color: "yellow",
                        fontSize: 25, 
                        letterSpacing: 10

                    }}> WINNER</Text>
                </View>
                <View style={{
                    backgroundColor: "black", 
                    width: "30%",
                    height: "60%",
                    position: "absolute", 
                    top: "70%",
                    borderRadius: 70,
                    display: "flex",
                    justifyContent: "center", 
                    alignItems: "center", 
                    borderWidth: 1,
                    borderColor: "gray" 



                }}>
                    <Text style={{
                        color: "darkred", 
                        fontSize: 25
                    }}
                    >00:00</Text>
                </View>
         </View>
         
         </View>
 
    )
}

export default ShowBoardComp