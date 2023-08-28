import { Colors,wp, hp  } from "common";
import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.main
    },
    innerContainer:{
        flex:1,
        alignItems:'center',
        paddingHorizontal:wp(4),
    },
    tabContainer:{
        flexDirection:'row',
        alignSelf:'center'
    }
});

export default Styles;