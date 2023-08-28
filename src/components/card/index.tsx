import {GlobalStyles} from 'common';
import * as React from 'react';
import {ViewStyle} from 'react-native';
import {Text, View, StyleSheet} from 'react-native';

interface CardProps {
  children: any;
  style?: ViewStyle;
}

const Card = (props: CardProps) => {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
};

export {Card};

const styles = StyleSheet.create({
  container: {
    ...GlobalStyles.feedItemShadow,
  },
});
