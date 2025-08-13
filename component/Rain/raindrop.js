

// Raindrop.js
import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const Raindrop = ({ left, size, duration, delay }) => {
  const top = useRef(new Animated.Value(-size * 2)).current;

  useEffect(() => {
    const animate = () => {
      top.setValue(-size * 2);
      Animated.sequence([
        Animated.delay(delay),
        Animated.timing(top, {
          toValue: height,
          duration,
          useNativeDriver: false,
        }),
      ]).start(() => animate());
    };
    animate();
  }, []);

  return (
    <Animated.View
      style={{
        position: 'absolute',
        left,
        top,
        width: size / 2,
        height: size * 2,
        backgroundColor: 'rgba(173,216,230,0.6)',
        borderRadius: size / 2,
        opacity: 0.7,
      }}
    />
  );
};

export default Raindrop;
