import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView, Image, View, ButtonContainer } from './style';


export default function Perfil() {
  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
        <View>
          
          <Text>Formas de pagamento</Text>
          <Text>Endereços</Text>
          <Text>Doações</Text>
          <Text>Meus Dados</Text>
          <Text>Ajuda</Text>
          <Text>Configurações</Text>
          <Text>Segurança</Text>
          <Text>Usar no carro</Text>
          <Text>Sugerir restaurantes</Text>
          
        </View>
      </SafeAreaView>
      
    </>
  );
}
