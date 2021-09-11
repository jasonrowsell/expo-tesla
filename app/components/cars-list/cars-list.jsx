import React from 'react';
import {
  View, StyleSheet, FlatList, Dimensions,
} from 'react-native';
import CarCard from '../car-card';
import cars from './cars';

export default function CarsList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={
          ({ item }) => (
            <CarCard
              title={item.title}
              tagline={item.tagline}
              taglineCTA={item.taglineCTA}
              image={item.image}
            />
          )
        }
        keyExtractor={(item, index) => String(index)}
        showsVerticalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={Dimensions.get('screen').height}
        alwaysBounceVertical
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
