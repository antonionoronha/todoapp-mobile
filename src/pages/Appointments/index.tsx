import React, { useState, useEffect} from 'react';
import Constants from 'expo-constants';
import { Feather as Icon} from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, ImageBackground, Text, Image, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const Appointments = () => {

    const navigation = useNavigation();

    function handleNavigateBack(){
        navigation.goBack();
    }

    function handleNavigatetoCreateAppointment(){
        navigation.navigate('CreateAppointment');
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
            Listagem de tarefas.
        </Text>
        <Text style={styles.description}>
            Tarefas cadastradas.
        </Text>

        <View style={styles.containerTask}>
            <Text style={styles.pointName}>
                Descrição
            </Text>
            <Text style={styles.pointItems}>
                Deadline
            </Text>
            <Text style={styles.pointItems}>
                Status
            </Text>

        </View>

            <RectButton style={styles.button} 
            onPress={handleNavigatetoCreateAppointment}
            >
                <View style={styles.buttonIcon}>
                    <Text>
                       <MaterialIcons name="input" color="#FFF" size={24} />
                    </Text>
                </View>
                <Text style={styles.buttonText}>
                    Cadastrar nova tarefa
                </Text>
            </RectButton>
        </View>     

    </ImageBackground>    


    
    );
};

/*const styles = StyleSheet.create({
    container: {
      flex: 1,
      //padding: 32,
      paddingHorizontal: 20,
      paddingTop: 10 + Constants.statusBarHeight,
    },

    footer: {},
  
    title: {
      fontSize: 20,
      fontFamily: 'Ubuntu_700Bold',
      marginTop: 24,
    },
  
    description: {
      color: '#FFF',
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
  });*/

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 32,
      paddingTop: 20,
    },

    containerTask: {
        marginBottom:10,
        marginTop: 10,
        //flex: 1,
        padding: 32,
        paddingTop: 10,
        backgroundColor: '#4368E1',
        width: 260
      },

    title: {
        fontSize: 20,
        fontFamily: 'Ubuntu_700Bold',
        marginTop: 24,
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
    
      description: {
        color: '#FFF',
        fontSize: 16,
        marginTop: 4,
        fontFamily: 'Roboto_400Regular',
      },

    buttonIcon: {
        height: 60,
        width: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'
      },
  
    pointImage: {
      width: '100%',
      height: 120,
      resizeMode: 'cover',
      borderRadius: 10,
      marginTop: 32,
    },
  
    pointName: {
      color: '#FFF',
      fontSize: 28,
      fontFamily: 'Ubuntu_700Bold',
      marginTop: 24,
    },
  
    pointItems: {
      fontFamily: 'Roboto_400Regular',
      fontSize: 16,
      lineHeight: 24,
      marginTop: 8,
      color: '#FFF'
    },
  
    address: {
      marginTop: 32,
    },
    
    addressTitle: {
      color: '#322153',
      fontFamily: 'Roboto_500Medium',
      fontSize: 16,
    },
  
    addressContent: {
      fontFamily: 'Roboto_400Regular',
      lineHeight: 24,
      marginTop: 8,
      color: '#6C6C80'
    },
  
    footer: {
      borderTopWidth: StyleSheet.hairlineWidth,
      borderColor: '#999',
      paddingVertical: 20,
      paddingHorizontal: 32,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    
    //button: {
    //  width: '48%',
    //  backgroundColor: '#34CB79',
    //  borderRadius: 10,
    //  height: 50,
    //  flexDirection: 'row',
    //  justifyContent: 'center',
    //  alignItems: 'center'
    //},
  
    buttonText: {
      marginLeft: 8,
      color: '#FFF',
      fontSize: 16,
      fontFamily: 'Roboto_500Medium',
    },
  });


export default Appointments;