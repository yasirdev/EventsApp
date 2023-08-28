import {Colors} from 'common';
import {hp, wp} from 'common';
import {FontAwesome5} from 'common/Icons';
import * as React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';

interface HeaderProps {
  title: string;
  showButtons?: boolean;
}

const Header = (props: HeaderProps) => {
  const {title, showButtons} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {showButtons && (
        <View style={styles.headerButtonContainer}>
          <Pressable style={styles.headerButton}>
            <FontAwesome5 size={wp(6)} color={Colors.mainFont} name="heart" />
          </Pressable>
          <Pressable style={styles.headerButton}>
            <FontAwesome5 size={wp(6)} color={Colors.mainFont} name="search" />
          </Pressable>
          <Pressable style={styles.headerButton}>
            <FontAwesome5 size={wp(6)} color={Colors.mainFont} name="bars" />
          </Pressable>
        </View>
      )}
    </View>
  );
};

Header.defaultProps = {
  showButtons: true,
};

export {Header};

const styles = StyleSheet.create({
  headerButton: {
    marginLeft: wp(4),
  },
  title: {
    paddingRight: wp(3),
    fontSize: wp(7),
    color: Colors.mainFont,
  },
  container: {
    width: wp(100),
    paddingHorizontal: wp(4),
    height: hp(7),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerButtonContainer: {
    flexDirection: 'row',
  },
});
