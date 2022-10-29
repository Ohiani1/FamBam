import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Modal, Text, View, SafeAreaView, ImageBackground, Image, Button, TouchableOpacity } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import { useState } from 'react';



import HomeScreen from './components/HomeScreen';
import FamBamListItem from './components/FamBamListItem';
import PoemContanier from './components/PoemContainer';

export default function App() {
  return (
    <HomeScreen>
        <FamBamListItem
            image={require('./assets/barakat.jpg')}
            title={'cheers'}
            popsIntro={'Dear Beloved Father'}
            momsiIntro={'Dear Sweet Mother'}
            daddyText={'I am grateful for all of the sacrifices that you have made and continue to make for me.  I do not have the words to express how much I love you. I am very grateful to Allaah for blessing me with a great man like you as my father. You are a man of great ambition, discipline, vision, love and compassion. I am very proud of you as a daughter. I ask Allaah to grant you Jannatul Firdaus and to give you the best of the best of this world too. '}
            mommyText={ 'I am grateful for all of the sacrifices you have made for me and all the loving counsel you have given me. You are an inspirational, beautiful and intelligent woman. I ask Allaah to bless, preserve and honour you. ' }
         />
        <View style={{paddingTop: 20}}></View>
        <FamBamListItem
          image={require('./assets/ramat.jpg')}
          title={'hajia'}
          popsIntro={'Dear Daddy'}
          momsiIntro={'Dear Mummy'}
          daddyText={'To say that I appreciate all the sacrifices and advice you give me would be an understatement. I’m so grateful to you for showing a good example of what it is to be a real man by always putting your family first and always wanting the best for us . I love you and pray that Allah grants you long life and prosperity so that you can live long enough to enjoy the fruits of your labour.'}
          mommyText={'You’re an accurate depiction of what it entails to be a woman. I am eternally grateful for having you as a mother, role model and advisor. Thank you for always being the backbone of this family and continuously showing us that it is possible to fulfil your duties as a wife and a mother while chasing your dreams and achieving greatness. I love you and I pray that Allah continues to strengthen and preserve you, and pray that he takes Afrikoncept to unimaginable heights.'}
        />
        <View style={{paddingTop: 20}}></View>
        <FamBamListItem
          image={require('./assets/junior.jpg')}
          title={'big boy'}
          popsIntro={'Dear Loving Father'}
          momsiIntro={'My Sweet Mother'}
          daddyText={'You have guided me through life and showed me how a real man should act. To call you my father is one of my greatest joys in life. I pray Allah blesses you with long life, and may your days be filled with nothing but happiness'}
          mommyText={'You have encouraged me and done so much for me. I will never be able to repay you for all you’ve done. Keep being the ray of sunshine I know you to be. '}
        />
        <View style={{paddingTop: 20}}></View>
        <FamBamListItem
          image={require('./assets/Yumn.jpg')}
          title={'princess'}
          popsIntro={'Dear Daddy'}
          momsiIntro={'Dear Mummy'}
          daddyText={'I would love to say that you are the best father in the world but that would be an understatement. You are the best father in the universe! I am grateful and appreciate all of the times that you have given me pep talks when I was sad or when you would discipline me lovingly when I did anything wrong. I am grateful that no matter what happens you always put your family first and you do everything necessary for your family to be satisfied and have food on the table to eat. You are my role model and I hope to be even better than you in future. '}
          mommyText={'Thank you for everything you have done for me. Whenever I was sad you would always cheer me up and for that I am very grateful.'}
        />
        <View style={{paddingTop: 20}}></View>
        <FamBamListItem
          image={require('./assets/ize.jpg')}
          title={'queen'}
          popsIntro={'Dear Daddy'}
          momsiIntro={'Dear Mummy'}
          daddyText={'I am grateful for all the sacrifices that you’ve made for me and will make for me. You are the best father I could wish for. I am proud to be your daughter and I love you'}
          mommyText={'Thank you for every sacrifice you’ve made for me and for every single thing you do. I am so grateful for everything you do for me. '}
        />
    </HomeScreen>
  );
}


