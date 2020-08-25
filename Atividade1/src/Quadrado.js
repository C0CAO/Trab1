import React from 'react'
import {View} from 'react-native'

export default props => {
    
    let lado = parseInt(props.lar)   
    return (
        <View style={{height:lado, 

            flexGrow: 0,
            width:lado, 
            backgroundColor: props.cor || '#000'}}>
        </View>
    );
}
