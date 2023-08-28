import {Colors, GlobalStyles, hp, wp} from 'common';
import * as React from 'react';
import {useState} from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

interface HomeTabsItem {
  title: string;
}
interface HomeTabsProps {
  data: HomeTabsItem[];
  onTabPress?: (index: number) => void;
  scrollEnabled?: boolean;
  isExploreTabs?: boolean;
}

const HomeTabs = (props: HomeTabsProps) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const TabItem = ({item, index}: {item: HomeTabsItem; index: number}) => {
    return (
      <TouchableOpacity
        style={[
          GlobalStyles.tabItem,
          !props.isExploreTabs && GlobalStyles.roundedTabItem,
          selectedTab === index &&
            !props.isExploreTabs && {backgroundColor: Colors.white},
        ]}
        onPress={() => {
          props.onTabPress && props.onTabPress(index);
          setSelectedTab(index);
        }}>
        <Text
          style={[
            styles.tabTitle,
            selectedTab === index && {opacity: 1},
            selectedTab === index &&
              !props.isExploreTabs && {color: Colors.main},
            !props.isExploreTabs && GlobalStyles.roundedTabItemText,
          ]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flexDirection: 'row'}}>
      <FlatList
        {...props}
        horizontal
        data={props.data}
        renderItem={props => <TabItem {...props} />}
      />
    </View>
  );
};
HomeTabs.defaultProps = {
  scrollEnabled: true,
};
export default HomeTabs;

const styles = StyleSheet.create({
  container: {},
  tabTitle: {
    color: Colors.white,
    fontSize: wp(5),
    opacity: 0.7,
    fontWeight: '700',
  },
  tabItem: {
    marginHorizontal: wp(1),
    paddingHorizontal: wp(3),
    paddingVertical: hp(2),
  },
});
