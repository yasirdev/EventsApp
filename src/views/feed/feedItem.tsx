import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Colors, hp, wp} from 'common';
import {Card, Chip, UserStack} from 'components';
import {FeedItemModel} from 'reduxStore/types';
import {FontAwesome5} from 'common/Icons';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'reduxStore/store';
import {updateFavourites} from 'reduxStore/main/mainSlice';
import RNCalendarEvents from 'react-native-calendar-events';

interface FeedItemProps {
  item: FeedItemModel;
  index: number;
}
const initialState = {
  isFav: false,
};
const FeedItem = (props: FeedItemProps) => {
  const [isFav, setFav] = useState(false);
  const {myFavEvents}: any = useSelector(
    (state: RootState) => state.mainReducer,
  );
  const dispatch = useDispatch();

  /* On Fav Press */
  const onFavPress = async () => {
    let _favEvents = {...myFavEvents};
    if (_favEvents[props.item.id]) delete _favEvents[props.item.id];
    else {
      await addEventToCalendar();
      _favEvents[props.item.id] = 'valid';
    }
    dispatch(updateFavourites(_favEvents));
  };

  const addEventToCalendar = async () => {
    try {
      const {title, eventDate} = props.item;
      let _d = new Date();
      let start_date = new Date(_d.setHours(_d.getHours() + 0.5));
      let end_date = new Date(_d.setHours(_d.getHours() + 5));
      await RNCalendarEvents.saveEvent(title, {
        startDate: start_date.toISOString(),
        endDate: end_date.toISOString(),
      });
      Alert.alert('Success!', 'Event added to calendar successfully.');
    } catch (error) {
      Alert.alert('Error!', 'Unable to add event.');
    }
  };

  useEffect(() => {
    RNCalendarEvents.checkPermissions()
      .then(status => {
        if (status !== 'authorized') {
          RNCalendarEvents.requestPermissions()
            .then(newStatus => {
              if (newStatus === 'authorized') {
                console.log('Calendar access granted.');
              } else {
                console.log('Calendar access denied.');
              }
            })
            .catch(error => {
              console.error('Error requesting calendar access:', error);
            });
        }
      })
      .catch(error => {
        console.error('Error checking calendar authorization:', error);
      });
  }, []);

  /* Use Effect to listen to Favourites update */
  useEffect(() => {
    if (myFavEvents[props.item.id]) setFav(true);
    else setFav(false);
  }, [myFavEvents]);

  return (
    <Card style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.eventImage} source={{uri: props.item.imageUrl}} />
      </View>
      <View style={styles.detailContainer}>
        {/* Post Date Time */}
        <Text style={styles.dateTime}>
          {props.item.eventDate} - {props.item.eventTime}
        </Text>

        {/* Post Title */}
        <Text numberOfLines={2} style={styles.eventTitle}>
          {props.item.title}
        </Text>

        {/* Post Categories */}
        <FlatList
          horizontal
          showsVerticalScrollIndicator={false}
          data={props.item.categories}
          renderItem={props => <Chip {...props} />}
        />

        {/* Users Stack */}
        <View style={styles.bottomContainer}>
          <UserStack showCount={3} users={props.item.followUsers} />
          <TouchableOpacity style={styles.favIcon} onPress={onFavPress}>
            <FontAwesome5
              size={wp(8)}
              color={Colors.shadowColor}
              solid={isFav}
              name={'heart'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  );
};

export default FeedItem;

const styles = StyleSheet.create({
  eventImage: {
    backgroundColor: Colors.lightWhite,
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  imageContainer: {
    margin: wp(2),
    width: wp(86),
    height: hp(45),
  },
  detailContainer: {
    paddingHorizontal: wp(2),
    paddingVertical: hp(1),
  },
  container: {
    width: wp(90),
  },
  dateTime: {
    color: Colors.white,
    fontSize: wp(3),
    opacity: 0.7,
  },
  eventTitle: {
    paddingVertical: hp(1),
    fontWeight: '700',
    color: Colors.white,
    fontSize: wp(5),
  },
  bottomContainer: {
    alignItems: 'center',
    paddingVertical: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  favIcon: {
    paddingHorizontal: wp(3),
  },
});
