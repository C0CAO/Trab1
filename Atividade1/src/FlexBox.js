import React from 'react'
import {View,StyleSheet} from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={styles.FlexV1}>
            <Quadrado lar='20' cor='#7fffd4'/>
            <Quadrado lar='30' cor='#ff801a'/>
            <Quadrado lar='40' cor='#50d1f6'/>
            <Quadrado lar='50' cor='#dd22c1'/>
            <Quadrado lar='60' cor='#8312ed'/>
        </View>
    );
}

const styles = StyleSheet.create({
    FlexV1:{
        flexGrow:0.5,
        justifyContent: "space-around",
        flexDirection: 'row',
        backgroundColor:'black',       
        width:'80%',
        paddingHorizontal: 10,
        marginTop:250,
        marginLeft:47
        
        
        
    }
})