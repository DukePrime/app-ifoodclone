import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text} from 'react-native';
import { Button } from 'react-native-elements';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import { SafeAreaView, Image, View, ButtonContainer } from './style';

const pedido=() =>{
  console.log ('Pedido adicionado')
}

export default function Perfil() {
  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
        <View>
         
          <Text style={{ fontWeight: 'bold', fontSize: 18 }} >Peça de novo</Text>
          
          <Text>1 Combo Familia 4 dogs Frago + Coca 2L</Text>
          <Button
           title="Adicionar à sacola"
           onPress={() => pedido()
           }
           buttonStyle={{
             backgroundColor: 'rgba(155, 20, 40, 10)',
             height: 40,
             width: 250,
             marginHorizontal: 50,
             marginVertical: 10,
           }}
 
           titleStyle={{ color: 'white', marginHorizontal: 20 }}        
          
          />

        </View>

        <View>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }} >Mais pedido por você
        </Text>

          </View>

          <View>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }} >Histórico
        </Text>

        <Text>
        Sex. 05 de feveriro 2022
        </Text>
        

          </View>

      </SafeAreaView>
      
    </>
  );
}
