import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

const SetProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
        //   backgroundColor: "green",
          width: "100%",
          height: "15%",
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          
        }}
      >
        <Text style={{
            fontSize: 30, 
            color: "green"


        }}>Enter Your Profile</Text>
      </View>

      <View
        style={{
        //   backgroundColor: "red",
          width: "100%",
          height: "70%",
        }}
      >
        <View style={{
            height: "40%",
            width: "100%",
            // backgroundColor: "orange",
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            
        }}>
            
            <View style={{
            height: "75%",
            width: "43%",
            backgroundColor: "pink", 
            borderRadius: 100    
            
            }}>
           
          
        </View>
       
        </View>
        
        <View style={{
            height: "20%",
            width: "100%",
            // backgroundColor: "pink",
            alignItems: "center", 
            justifyContent: "center"
            
        }}>
                  <TextInput
            style={styles.passwordInput}
            // onChangeText={}
            // value={password}
            placeholder="Enter your Name"
            placeholderTextColor="#000" 
          />
        </View>

        <View
        style={{
        //   backgroundColor: "blue",
          width: "100%",
          height: "25%",
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
        }}
      >
        <TouchableOpacity 
        style={{
            backgroundColor: "green",
            height: 40,
            width: "50%",
            borderRadius: 100,
            alignItems: "center",
            justifyContent: "center",
        }}
        
        >
            <Text style={{
              color: "white"
            }}>Login</Text>
          </TouchableOpacity>
      </View>

       
      </View>

      

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    // background: "transparent"
    flex: 1,
    height: "100%",
    // width: "100%",
    // justifyContent: "center",
    alignItems: "center",
    paddingTop: 60,
    // padding: 7
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
});

export default SetProfileScreen;
