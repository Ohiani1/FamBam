import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import SwipeLeft from './SwipeLeft';




function FamBamListItem({image, title, mommyText, daddyText, popsIntro, momsiIntro}) {
    return(
        <Swipeable renderRightActions={()=> <SwipeLeft MommyText={mommyText} DaddyText={daddyText} Daddyintro={popsIntro} Mommyintro={momsiIntro}/>}>
            <View style={{alignItems:'center', justifyContent: 'center'}}>
                <View style={styles.container}>
                    <Image style={styles.image} source={image}/>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </View>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        paddingRight: 20,
        paddingLeft: 20,
        flexDirection: 'row',
        backgroundColor: '#f8f4f4',
        width: '70%',
        borderRadius: 30,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 80,
        marginRight: 20,
    },
    text: {
        fontSize: 15,
        fontWeight: '500',
        textTransform: 'capitalize',
    }
});


export default FamBamListItem;