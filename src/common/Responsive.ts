import {Dimensions} from 'react-native';
const {
    width,
    height
} = Dimensions.get('window');

const wp = (compWidth:number) =>{
    return (width/100) * compWidth
}
const hp = (compHeight:number) =>{
    return (height/100) *  compHeight
}

export {
    hp,
    wp
}