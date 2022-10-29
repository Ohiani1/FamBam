import React, {useState} from 'react';
import { render } from 'react-dom';
import {View, StyleSheet, TouchableOpacity, Image, Modal, Button, Text, PermissionsAndroid, SafeAreaView,ImageBackground, ScrollView} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import FamBamListItem from './FamBamListItem';

function SwipeLeft({MommyText, DaddyText, Daddyintro, Mommyintro}) {

   const [dadValue, dadSetValue] = useState(false);
   const [momValue, momSetValue] = useState(false);

    return(
        <React.Fragment>
            <View style={styles.container}>
                 <View style={{marginRight: 10}}>
                     <TouchableOpacity onPress={()=> dadSetValue(true)}>
                        <Image style={styles.Image} source={require('../assets/pops.jpg')}/>
                    </TouchableOpacity>
                </View>
                 <View style={{marginRight: 30}}>
                      <TouchableOpacity onPress={()=> momSetValue(true)}>
                          <Image style={styles.Image} source={require('../assets/mommy.jpg')}/>
                      </TouchableOpacity>
                </View>
            </View> 
            <Modal style={{flex: 1}}visible={dadValue}  animationType='slide'>
                <ImageBackground style={styles.modalContainer}source={require('../assets/ModalBackground.jpg')}>
                    <View style={styles.modalView}>
                        <Text style={styles.text}>{Daddyintro}</Text>
                        <View style={{borderWidth:0.8, width:'30%', margin:2, marginBottom: 10}}></View>
                        <Text style={styles.text}>{DaddyText}</Text>
                        <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}} onPress={()=> dadSetValue(false)}>
                            <View style={styles.appButton}> 
                                <Text style={styles.buttonText}>Close</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </Modal>
            <Modal style={{flex: 1}}visible={momValue}  animationType='slide'>
                <ImageBackground style={styles.modalContainer}source={require('../assets/ModalBackground.jpg')}>
                    <View style={styles.modalView}>
                        <Text style={styles.text}>{Mommyintro}</Text>
                        <View style={{borderWidth:0.8, width:'30%', margin:2, marginBottom: 10}}></View>
                        <Text style={styles.text}>{MommyText}</Text>
                        <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}} onPress={()=> momSetValue(false)}>
                            <View style={styles.appButton}> 
                                <Text style={styles.buttonText}>Close</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </Modal>
        </React.Fragment>
            
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        paddingTop: 15
    },
    Image: {
        width: 50,
        height: 50,
        borderRadius: 90
    },
    modalContainer: {
        justifyContent:'center',
        alignItems: 'center',
        width: '100%',
        height:'100%',
    },
    modalView: {
        padding: 15,
        borderRadius: 20,
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowOffset: {height:10, width:10},
        shadowRadius: 20,
        backgroundColor: 'white',
        width: '85%',
        alignItems:'center',
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight:'500'
    },
    appButton: {
        justifyContent:'center',
        alignItems:'center',
        padding: 10,
        borderRadius: 10,
        backgroundColor:'tomato',
        width: '30%',
        marginTop: 10
    },
    buttonText: {
        fontSize: 20,
        fontWeight:'500',
        color: 'white'
    }

});

export default SwipeLeft;