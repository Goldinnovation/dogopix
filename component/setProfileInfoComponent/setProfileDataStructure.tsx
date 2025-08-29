import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";
import { setProfileInfo } from "../../api/setProfile/setProfileInfoApi";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import { BlurView } from "expo-blur";

const SetProfileDataStructureComponent = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [userImage, setUserImage] = useState<string | null>(null);
  const [date, setDate] = useState<Date>(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [openDate, setOpenDateInfo] = useState(false);
  const [flashMessage, setFlatMessage] = useState(false);
  const [imageObj, setImageObj] = useState({}) as any;

  // const handleAgentEntry = () => {
  //     navigation.replace("ConnectionScreen");
  // }

  const wrapFileInToFormdata = async (imageFile: any) => {
    try {
      const formData = new FormData();
      const convertDate = date.toLocaleDateString();
      const imageUrl = imageFile.assets[0].uri;
      const imageName = imageFile.assets[0].uri.split("/").pop();
      const imagemimetype = imageFile.assets[0].mimeType;

      // // Sets the data into a formData
      formData.append("image", {
        uri: imageUrl,
        name: imageName,
        type: imagemimetype,
      } as any);

      convertDate && formData.append("userBirthDAY", convertDate);
      return formData;
    } catch (error) {
      console.error(
        "Error on resizing Image, function: convertImageToBase64 ",
        error
      );
    }
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const handleConfirm = (date: any) => {
    // console.log(date);
    setOpenDateInfo(true);
    setDate(date);
    hideDatePicker();
  };

  const handlepickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.canceled) {
      setUserImage(result.assets[0].uri);
      setImageObj(result);
      setFlatMessage(true);
      setInterval(() => {
        setFlatMessage(false);
      }, 1500);
    }
  };

  const handlesetProfileData = async () => {
    const imageFile = imageObj;

    // Wrapes the Image into a fileData

    const encodedFormImageData = await wrapFileInToFormdata(imageFile);

    const userResCall = await setProfileInfo(encodedFormImageData);



    if(userResCall?.message == "add connection to set User Profile"){
      await AsyncStorage.setItem('userProfileImageUrl', userResCall.userProfileImage);
      await AsyncStorage.setItem('userId',userResCall.userId )
      navigation.replace("ConnectionScreen");
    }
    
  };

  return (
    <ImageBackground
      source={require("../../assets/room.webp")}
      style={{ flex: 1 }}
    >
      {/* <RainLayer /> */}

      <View style={styles.container}>
        {/* Header Section */}
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
          <Text
            style={{
              fontSize: 30,
              color: "green",
            }}
          >
            Enter Your Profile
          </Text>
        </View>

        {/* Content Body Section */}
        <View
          style={{
            //   backgroundColor: "red",
            width: "100%",
            height: "70%",
            position: "relative",
          }}
        >
          <View className="h-[40%] w-full items-center">
            <View className="h-[100%] w-[90%]">
              <View className="h-[10%] w-full justify-center">
                <Text className="text-white">Profile Image</Text>
              </View>

              <View className="h-[90%] w-full justify-center items-center ">
                <TouchableOpacity
                  style={{
                    height: !userImage ? "75%" : "92%",
                    width: !userImage ? "43%" : "60%",
                    backgroundColor: !userImage ? "gray" : "transparent",
                    borderRadius:!userImage ? 100 : 0,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    marginBottom: !userImage ? "5%" : "0%",
                  }}
                  onPress={handlepickImage}
                >
                  {userImage ? (
                    <Image
                      source={{ uri: userImage }}
                      className="h-full  w-full rounded-lg"
                    />
                  ) : (
                    <Image
                      source={require("../../assets/agent.png")}
                      style={{
                        // width: scale(100),
                        // height: verticalScale(25),
                        width: "70%",
                        height: "90%",
                        // borderRadius: 100,
                      }}
                    />
                  )}
                  <View
                    style={{
                      position: "absolute",
                      top: "10%",

                      width: !userImage ? "36%" : "36%",
                      height:!userImage ? "30%" : "32%",
                      left: "70%",
                      //   backgroundColor: "green",
                      zIndex: 5,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={require("../../assets/shot.png")}
                      style={{
                        // width: scale(100),
                        // height: verticalScale(25),
                        width: "70%",
                        height: "90%",
                        // borderRadius: 100,
                      }}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Birthdate Section */}
          <View
            style={{
              height: "20%",
              width: "100%",
              //   backgroundColor: "pink",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* <TextInput
            style={styles.passwordInput}
            // onChangeText={}
            // value={password}
            placeholder="Enter your Name"
            placeholderTextColor="#000" 
          /> */}
            <View className="h-[70%] w-[90%] items-center justify-center  gap-5">
              <View className="h-[30%] w-full ">
                <Text className="text-white">Birthday</Text>
              </View>

              {/* <Button title="Show Date Picker" onPress={showDatePicker} /> */}
              <TouchableOpacity
                style={{
                  backgroundColor: "black",
                  height: "70%",
                  width: "70%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 1,
                  borderColor: "white",
                  borderRadius: 7,
                  paddingTop: 4
                  // opacity: 0.9,
                }}
                onPress={showDatePicker}
              >
                {openDate ? (
                  <Text className="text-4xl text-white">
                    {" "}
                    {date.toLocaleDateString()}
                  </Text>
                ) : (
                  <Text className="text-4xl text-white opacity-25">
                    00.00.0000
                  </Text>
                )}
              </TouchableOpacity>

              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                themeVariant="light" // or "dark"
              />
            </View>
          </View>

          {/* Button Section */}
          <View
            style={{
              // backgroundColor: "blue",
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
              onPress={() => handlesetProfileData()}
            >
              <Text
                style={{
                  color: "white",
                }}
              >
                Enter
              </Text>
            </TouchableOpacity>
          </View>

          {flashMessage && (
            <View className="h-[20%] w-full items-center justify-center rounded-md">
              <View 
              className="bg-orange-500 h-[50%] w-[80%] rounded-lg items-center justify-center opacity-50"
              style={{ opacity: 0.9 }}
              >
                <Text
                  style={{
                    color: "white",
                  }}
                >
                  {" "}
                  successfully uploaded an Image
                </Text>
              </View>
            </View>
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "black",
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

export default SetProfileDataStructureComponent;
