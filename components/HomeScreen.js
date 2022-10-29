import React from 'react';
import {View, ImageBackground,Image,SafeAreaView,StyleSheet} from 'react-native';

function HomeScreen(props) {
    return(
        <View style={styles.container}>
        <ImageBackground style={styles.ImageBackground} source={require('../assets/heartBorder.jpg')}>
          <SafeAreaView style={{justifyContent:'center', alignItems: 'center', marginTop: 70}}>
            <Image style={styles.iconContainer} source={require('../assets/fambam_icon.png')}/>
          </SafeAreaView>
         {props.children}
        </ImageBackground>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    ImageBackground: {
      width: '100%',
      height: '100%',
    },
    iconContainer: {
      width:'60%',
      height: 60,
      marginBottom: 30
    }
  });

export default HomeScreen;