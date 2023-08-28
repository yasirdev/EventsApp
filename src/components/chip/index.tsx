import {Colors, Utils, wp} from 'common';
import {FontAwesome5} from 'common/Icons';
import * as React from 'react';
import {ViewStyle} from 'react-native';
import {Text, View, StyleSheet} from 'react-native';
import {CategoryItemModel} from 'reduxStore/types';

interface ChipProps {
  item: CategoryItemModel;
  index: number;
  style?: ViewStyle;
}

const Chip = (props: ChipProps) => {
  return (
    <View style={[styles.container, props.style]}>
      <FontAwesome5
        size={wp(5)}
        color={Colors.white}
        name={Utils.getCategoryIcon(props.item.tag)}
      />
      <Text style={styles.chipTitle}>{props.item.title}</Text>
    </View>
  );
};

export {Chip};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(3),
    paddingVertical: wp(1),
    marginRight: wp(2),
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    borderColor: Colors.white,
    flexDirection: 'row',
  },
  chipTitle: {
    color: Colors.white,
  },
});
