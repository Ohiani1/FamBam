import { useState } from "react";
import {SafeAreaView, ImageBackground, StyleSheet,Text,TouchableOpacity} from 'react-native';
import { View } from "react-native-web";

function PoemContanier(props) {
    return(
        <ImageBackground style={styles.Container} source={require('../assets/poemContainer.jpg')}>
            <View style={styles.daddyPoem}>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                    <Text>Daddy's Poem</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.mommyPoem}>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                    <Text>Mommy's Poem</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: '100%',
        justifyContent:'center',
        alignItems:'center'
    },
    daddyPoem: {
        width: '75%',
        backgroundColor: '#f8f4f4',
        flexDirection: 'row'
    },
    mommyPoem: {
        width: '75%',
        backgroundColor: '#f8f4f4',
        flexDirection: 'row'
    },
});

export default PoemContanier;