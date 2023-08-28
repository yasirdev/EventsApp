import { StyleSheet } from "react-native";
import { Colors } from "./Colors";
import { hp, wp } from "./Responsive";
const GlobalStyles = StyleSheet.create({
    container:{
        flex:1
    },
    feedItemShadow:{
        backgroundColor: Colors.main,
        shadowColor: Colors.shadowColor, // Set shadow color to purple
        shadowOpacity: .7,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowRadius: 6,
        elevation: 4, // Android elevation property
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.white, // Set border color to white
    },
    tabTitle: {
        color: Colors.white,
        fontSize: wp(5),
        opacity: 0.7,
        fontWeight: '700',
    },
    tabItem: {
        marginHorizontal: wp(1),
        paddingHorizontal: wp(3),
        paddingVertical: hp(1.5),
    },
    roundedTabItem:{
        paddingVertical: hp(1.5),
        paddingHorizontal: wp(6),
        borderRadius:50,
        borderWidth:.5,
        borderColor:Colors.white
    },
    roundedTabItemText:{
        fontSize: wp(4),
    }
});

export {GlobalStyles};