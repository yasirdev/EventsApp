import {Colors, wp} from 'common';
import * as React from 'react';
import {Text, View, StyleSheet, FlatList, Image} from 'react-native';
import {UserItemModel} from 'reduxStore/types';

interface UserStackProps {
  users: UserItemModel[];
  showCount?: number;
}

const UserStack = (props: UserStackProps) => {
  const {showCount = 3} = props;
  const data = props.users || [];
  const renderStackedImages = ({
    item,
    index,
  }: {
    item: UserItemModel;
    index: number;
  }) => {
    const stackStyle = {
      zIndex: data.length - index,
      marginLeft: index === 0 ? 0 : -20,
    };

    return (
      <View
        key={item.id}
        style={[
          styles.stackedImageContainer,
          stackStyle,
          index === showCount - 1 && data.length > showCount && {width: wp(20)},
        ]}>
        <Image source={{uri: item.imageUrl}} style={styles.stackedImage} />
        {index === showCount - 1 && data.length > showCount && (
          <View style={styles.countContainer}>
            <Text style={styles.countText}>+{data.length - showCount}</Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data.slice(0, props.showCount)} // Display only the first three user images
        renderItem={renderStackedImages}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

UserStack.defaultProps = {
  showCount: 3,
};

export {UserStack};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stackedImageContainer: {
    position: 'relative',
  },
  stackedImage: {
    width: wp(13),
    height: wp(13),
    borderRadius: wp(13) / 2,
    borderWidth: 2,
    borderColor: 'white',
  },
  countContainer: {
    width: wp(13),
    height: wp(13),
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: Colors.shadowColor,
    borderRadius: wp(13) / 2,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignItems: 'center',
    zIndex: 99999,
    justifyContent: 'center',
  },
  countText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
