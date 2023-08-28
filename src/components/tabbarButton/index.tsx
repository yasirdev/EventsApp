import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import {Colors, wp} from 'common';
import {FontAwesome5} from 'common/Icons';

const TabbarButton = ({name, label, accessibilityState, onPress}: any) => {
  const focused = accessibilityState.selected;

  return (
    <TouchableOpacity
      style={[styles.button, focused && {opacity: 1}]}
      onPress={onPress}>
      <View style={[styles.container]}>
        <FontAwesome5
          name={name}
          size={wp(6)}
          color={focused ? Colors.white : Colors.lightWhite}
        />

        {focused && <Text style={[styles.tablabel]}>{label}</Text>}
      </View>
    </TouchableOpacity>
  );
};

export {TabbarButton};
