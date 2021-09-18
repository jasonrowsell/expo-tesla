import React, { useRef } from 'react';
import {
  View, StyleSheet, Dimensions, Animated,
} from 'react-native';

import CarCard from '../car-card';
import cars from './cars';

export default function CarsList() {
  const scrollY = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={cars}
        renderItem={
          ({ item, index }) => (
            /* eslint-disable react/jsx-props-no-spreading */
            <CarCard {...item} index={index} scrollY={scrollY} />
          )
        }
        keyExtractor={(item, index) => String(index)}
        showsVerticalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={Dimensions.get('screen').height}
        alwaysBounceVertical
        scrollY={scrollY}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={16}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
