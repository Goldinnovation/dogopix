import React, { useRef, useEffect, useState } from "react";
import { View, Text, Animated, PanResponder, Dimensions, TouchableOpacity, Image } from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;

interface SwipeableImageProps {
  source: any;
  swiped: boolean;
  onSwipedUp: () => void;
  resetSwiped: () => void;
  label: string;
}

function SwipeableImage({ source, swiped, onSwipedUp, resetSwiped, label }: SwipeableImageProps) {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) =>
        Math.abs(gestureState.dy) > 10,
      onPanResponderMove: Animated.event([null, { dy: pan.y }], { useNativeDriver: false }),
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dy < -70) {
          Animated.timing(pan, {
            toValue: { x: 0, y: -SCREEN_HEIGHT },
            duration: 200,
            useNativeDriver: false,
          }).start(() => {
            onSwipedUp();
            pan.setValue({ x: 0, y: 0 });
          });
        } else if (gesture.dy > 70) {
          Animated.timing(pan, {
            toValue: { x: 0, y: SCREEN_HEIGHT },
            duration: 200,
            useNativeDriver: false,
          }).start(() => pan.setValue({ x: 0, y: 0 }));
        } else {
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;


  useEffect(() => {
    if (swiped) {

      const timeoutId = setTimeout(() => {
        resetSwiped();
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
  });

  if (swiped) {
    return (
      <View
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex", 

        }}
      >
        <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>{label} Swiped!</Text>
      </View>
    );
  }

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={{
        width: "100%",
        height: "100%",
        transform: [{ translateY: pan.y }],
      }}
    >
      <TouchableOpacity
        style={{
          width: "100%",
          height: "100%",
        }}
        activeOpacity={0.7}
      >
        <Image
          source={source}
          style={{
            width: "100%",
            height: "100%",
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 7,
          }}
        />
      </TouchableOpacity>
    </Animated.View>
  );
}

const SliderComp = () => {
  // Single state for which image is swiped ("" if none)
  const [swiped, setSwiped] = useState<string>("");

  const handleSwipeState = (swipeState: string) => {

    console.log('swipeState', swipeState);

  }

  return (
    <View
      style={{
        width: "100%",
        height: "15%",
        justifyContent: "center",
        alignItems: "center",
        padding: 7,
        marginTop: 10,
      }}
    >
      <View
        style={{
          width: "99%",
          height: "99%",
          borderRadius: 7,
          // borderWidth: 1,
          // borderStyle: "solid",
          opacity: 0.9,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ width: "30%", height: "90%" }}>
          <SwipeableImage
            source={require("../../assets/stone.png")}
            swiped={swiped === "stone"}
            onSwipedUp={() => handleSwipeState("stone")}
            resetSwiped={() => setSwiped("")}
            label="Stone"
          />
        </View>
        <View style={{ width: "30%", height: "90%" }}>
          <SwipeableImage
            source={require("../../assets/sciss.png")}
            swiped={swiped === "sciss"}
            onSwipedUp={() => handleSwipeState("sciss")}
            resetSwiped={() => setSwiped("")}
            label="Scissors"
          />
        </View>
        <View style={{ width: "30%", height: "90%" }}>
          <SwipeableImage
            source={require("../../assets/lay.png")}
            swiped={swiped === "lay"}
            // onSwipedUp={() => setSwiped("lay")}
            onSwipedUp={() => handleSwipeState("lay")}
            resetSwiped={() => setSwiped("")}
            label="Paper"
          />
        </View>
      </View>
    </View>
  );
};

export default SliderComp;
