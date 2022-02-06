import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';

import { Input, Button} from 'react-native-elements';
import { View, KeyboardAvoidingView, StyleSheet, Animated, Keyboard, TouchableOpacity, Text } from "react-native";


export default function Login({ navigation }) {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: 250, y: 200 }));
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const acesso =() => {
    navigation.reset({
      index:0,
      routes:[{name:"Main"}]
    })
  }


  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,

      })
    ]).start();

  }, []);

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 150,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 100,
        duration: 100,
      })
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 250,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 200,
        duration: 100,
      })
    ]).start();
  }


  return (


    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Animated.Image
          style={{
            width: logo.x,
            height: logo.y,
          }}
          source={require('../../assets/splash.png')}
        />
      </View>

      <Animated.View
        style={[
          styles.container,
          {
            opacity: opacity,
            transform: [
              { translateY: offset.y }

            ]
          }
        ]}>
        <Input
          style={styles.input}
          placeholder='Email'
          keyboardType="email-address"
          leftIcon={{
            type: 'font-awesome',
            name: 'envelope',
            color: 'white',
            size: 35,
            alignItems: 'center'
          }}

          autoCorrect={false}
          onChangeText={value => setEmail(value)}

        />

        <Input
          style={styles.input}
          placeholder='Senha'
          leftIcon={{
            type: 'font-awesome',
            name: 'lock',
            color: 'white',
            size: 40,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',


          }}

          autoCorrect={false}
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}

        />

        <Button
          title="Acesse"
          onPress={() => acesso()
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
        <TouchableOpacity style={styles.bntRegister}>
          <Text style={styles.registerText} Text>Criar conta gratuita</Text>
        </TouchableOpacity>

      </Animated.View>

    </KeyboardAvoidingView>

  );

}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e32929'
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',

  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50

  },
  input: {
    backgroundColor: '#fff',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
  },
  bntSubmit: {
    backgroundColor: '#f44336',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  submitText: {
    color: '#FFF',
    fontSize: 17
  },
  bntRegister: {
    marginTop: 10,
  },
  registerText: {
    color: '#FFF'
  }

})
