import React, {useEffect} from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Pressable,
  Text,
  RefreshControl,
} from 'react-native';
import styles from './styles';
import {Header, Spacer} from 'components';
import {useState} from 'react';
import FeedItem from './feedItem';
import HomeTabs from './homeTabs';
import {FeedItemModel} from 'reduxStore/types';
import {Colors, GlobalStyles} from 'common';
const rawData = require('./rawData.json');
interface FeedProps {}
const initialState = {
  feedData: [] as FeedItemModel[],
  homeTabs: [
    {title: 'Explore', id: 1},
    {title: 'For You', id: 2},
  ],
  categoryTabs: [
    {title: 'All', id: 1},
    {title: 'My Interest', id: 2},
    {title: 'My Groups', id: 3},
  ],
  isLoading: true,
  selectedTab: 0,
};
const Feed = (props: FeedProps) => {
  const [{homeTabs, selectedTab, categoryTabs, feedData, isLoading}, setState] =
    useState(initialState);

  const updateState = (state = {}) => {
    setState(prevState => ({...prevState, ...state}));
  };

  const _init = () => {
    updateState({isLoading: true});
    setTimeout(() => {
      updateState({isLoading: false, feedData: rawData});
    }, 4000);
  };

  useEffect(() => {
    _init();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Events'} />
      <View style={styles.innerContainer}>
        <View style={styles.tabContainer}>
          <Pressable
            onPress={() => updateState({selectedTab: 0})}
            style={GlobalStyles.tabItem}>
            <Text style={[GlobalStyles.tabTitle, !selectedTab && {opacity: 1}]}>
              Explore
            </Text>
          </Pressable>
          <Pressable
            onPress={() => updateState({selectedTab: 1})}
            style={GlobalStyles.tabItem}>
            <Text
              style={[
                GlobalStyles.tabTitle,
                selectedTab === 1 && {opacity: 1},
              ]}>
              For You
            </Text>
          </Pressable>
        </View>
        {/* Spacer */}
        <Spacer type="xl" />

        <HomeTabs
          isExploreTabs={selectedTab === 0}
          scrollEnabled={true}
          data={categoryTabs}
        />

        {/* Spacer */}
        <Spacer type="xl" />

        <View style={{flex: 1}}>
          <FlatList
            refreshControl={
              <RefreshControl
                colors={[Colors.white, Colors.shadowColor]}
                tintColor={Colors.white}
                refreshing={isLoading}
                onRefresh={_init}
              />
            }
            ListHeaderComponent={() => <Spacer type="xl" />}
            ListFooterComponent={() => <Spacer type="xxl" />}
            ItemSeparatorComponent={() => <Spacer type="xxl" />}
            renderItem={props => <FeedItem {...props} />}
            data={feedData}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Feed;
