/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import {
  View, StyleSheet, Dimensions, Animated,
} from 'react-native';

import CarCard from '../car-card';
import ProductCard from '../product-card';
import items from './items';

export default function ItemsList() {
  const scrollY = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={items}
        renderItem={
          ({ item, index }) => {
            switch (item.type) {
              case 'car':
                return (
                  <CarCard {...item} index={index} scrollY={scrollY} />
                );
              case 'product':
                return (
                  <ProductCard {...item} index={index} scrollY={scrollY} />
                );
              default:
                return null;
            }
          }
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
