import {hp} from 'common';
import React from 'react';
import {View} from 'react-native';

interface SpacerProps {
  type: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  showLine?: boolean;
}

const Spacer = (props: SpacerProps) => {
  const getHeight = () => {
    switch (props.type) {
      case 'sm':
        return hp(0.4);
      case 'md':
        return hp(0.6);
      case 'lg':
        return hp(1);
      case 'xl':
        return hp(1.5);
      default:
        return hp(4);
    }
  };
  return <View style={[{height: getHeight()}]} />;
};
export {Spacer};
