import React, { useState } from 'react';
import { Input } from 'react-native-elements';
import Constants from 'expo-constants';
import { Feather as Icon} from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, ImageBackground, Text, Button, Platform, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const CreateAppointment = () => {

    const navigation = useNavigation();

    function handleNavigateBack(){
        navigation.goBack();
    }

    


    return (

        <ImageBackground 
        source={require('../../assets/home-back.png')} 
        style={styles.container}
        >

        <View style={styles.container}>
            <TouchableOpacity onPress={handleNavigateBack} >
               <Icon name="arrow-left" size={20} color="#2F4CA9" />
        </TouchableOpacity>

        <Text style={styles.title}>
            Criação de tarefas.
        </Text>
        <Text style={styles.description}>
            Insira as informações da tarefa a ser realizada.
        </Text>

        <View style={styles.input}>
        <Input
          placeholder="Descrição"
          //value={}
          //onChangeText={}
          autoCapitalize="words"
          autoCorrect={true}
        />
        <Input
          placeholder="Status"
          //value={}
          //onChangeText={}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          placeholder="Deadline"
          //value={}
          //onChangeText={}
          autoCapitalize="none"
          autoCorrect={false}
        />
        
        
        </View>
        
            <RectButton style={styles.button} 
            //onPress={handleNavigatetoCreateUser}
            >
                <View style={styles.buttonIcon}>
                    <Text>
                       <MaterialIcons name="input" color="#FFF" size={24} />
                    </Text>
                </View>
                <Text style={styles.buttonText}>
                    Cadastrar
                </Text>
            </RectButton>
        </View>

    </ImageBackground>    


    
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //padding: 32,
      paddingHorizontal: 20,
      paddingTop: 10 + Constants.statusBarHeight,
    },

    footer: {},

    input: {
        //paddingHorizontal: 20,
        paddingVertical: 25,
        //borderRadius: 5,
        //backgroundColor: '#FFF',
        //alignSelf: 'stretch',
        marginBottom: 15,
        //marginHorizontal: 20,
        fontSize: 16,
        color: '#FFF',
      },
  
    title: {
      fontSize: 20,
      fontFamily: 'Ubuntu_700Bold',
      marginTop: 24,
    },
  
    description: {
      color: '#42444D',
      fontSize: 16,
      marginTop: 4,
      fontFamily: 'Roboto_400Regular',
    },
  
    mapContainer: {
      flex: 1,
      width: '100%',
      borderRadius: 10,
      overflow: 'hidden',
      marginTop: 16,
    },
  
    map: {
      width: '100%',
      height: '100%',
    },
  
    button: {
        backgroundColor: '#2F4CA9',
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
      },
    
      buttonIcon: {
        height: 60,
        width: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'
      },
    
      buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
      },

    mapMarker: {
      width: 90,
      height: 80, 
    },
  
    mapMarkerContainer: {
      width: 90,
      height: 70,
      backgroundColor: '#34CB79',
      flexDirection: 'column',
      borderRadius: 8,
      overflow: 'hidden',
      alignItems: 'center'
    },
  
    mapMarkerImage: {
      width: 90,
      height: 45,
      resizeMode: 'cover',
    },
  
    mapMarkerTitle: {
      flex: 1,
      fontFamily: 'Roboto_400Regular',
      color: '#FFF',
      fontSize: 13,
      lineHeight: 23,
      textAlign: 'center'
    },
  
    loadingContainer: {
      flex: 1, 
      justifyContent:"center", 
      alignItems:"center"
    },
  
    loadingTitle: {
      fontSize: 28,
      fontFamily: 'Ubuntu_700Bold',
      marginBottom: 24,
    },
  
    itemsContainer: {
      flexDirection: 'row',
      marginTop: 16,
      marginBottom: 32,
    },
  
    item: {
      backgroundColor: '#fff',
      borderWidth: 2,
      borderColor: '#eee',
      height: 120,
      width: 120,
      borderRadius: 8,
      paddingHorizontal: 16,
      paddingTop: 20,
      paddingBottom: 16,
      marginRight: 8,
      alignItems: 'center',
      justifyContent: 'space-between',
  
      textAlign: 'center',
    },
  
    selectedItem: {
      borderColor: '#34CB79',
      borderWidth: 2,
    },
  
    itemTitle: {
      fontFamily: 'Roboto_400Regular',
      textAlign: 'center',
      fontSize: 13,
    },
  });


export default CreateAppointment;