// RainLayer.js
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Raindrop from './raindrop';

const { width } = Dimensions.get('window');
const NUM_DROPS = 50;

const RainLayer = () => {
  const drops = Array.from({ length: NUM_DROPS }).map((_, i) => ({
    left: Math.random() * width,
    size: 8 + Math.random() * 8,
    duration: 1200 + Math.random() * 1200,
    delay: Math.random() * 2000,
    key: `drop-${i}`,
  }));

  return (
    <View style={StyleSheet.absoluteFillObject} pointerEvents="none">
      {drops.map((props) => (
        <Raindrop {...props} key={props.key} />
      ))}
    </View>
  );
};

export default RainLayer;
