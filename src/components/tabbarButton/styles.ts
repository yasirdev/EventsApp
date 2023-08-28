import { Colors, hp, wp } from 'common';
import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tablabel: {
    fontSize: wp(3.5),
    color: Colors.white,
  },
  button:{
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
});

export default styles;
