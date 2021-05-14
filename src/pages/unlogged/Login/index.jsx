import React, { useState } from 'react';
import { Text, View, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { BoxInput, Container, PasswordInput, PasswordInputBox } from './styles';
import Icon from 'react-native-vector-icons/Entypo';
import WelcomePng from '../../../assets/welcome.png';
import { useNavigation } from '@react-navigation/core';

const Login = () => {

  const [isHidden, setIsHidden] = useState(true);
  const [isHiddenIcon, setIsHiddenIcon] = useState(true);
  const navigation = useNavigation();
  const handleInput = () => {
    setIsHidden(!isHidden);
    setIsHiddenIcon(!isHidden);
  }

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ backgroundColor: "white"}}>

      <Container style={{ backgroundColor: "white"}}>
        <Image source={WelcomePng} resizeMode="contain" style={{ width: "100%", height: 300, marginBottom: 20 }} />
        <BoxInput>
          <Input placeholder="Email" />
          <PasswordInput>
              <PasswordInputBox placeholder="Senha" secureTextEntry={isHidden} placeholderTextColor="#114978" />
            <TouchableOpacity onPress={handleInput} >
              {
                isHiddenIcon ?
                <Icon name="eye" size={20} />
                :
                <Icon name="eye-with-line" size={20} />
              }
            </TouchableOpacity>
          </PasswordInput>
        </BoxInput>
          <View style={{ marginTop: 30, width: "100%", paddingHorizontal: 30}}>
            <Button
            onPress={() => navigation.navigate('Feed')}
            >Entrar</Button>
          </View>
          <View style={{width: "100%", flexDirection: "row", marginTop: 24, justifyContent: "space-between", alignItems: "center", paddingHorizontal: 40}}>
            <Text>Ainda não tem conta?</Text>
            <TouchableOpacity onPress={() => {
                navigation.navigate("Cadastro de Aluno")
            }}>
              <Text style={{ color: "#2196f3"}}>Criar Conta</Text>
            </TouchableOpacity>
          </View>

      </Container>
      </TouchableWithoutFeedback>

    </KeyboardAvoidingView>
  );
}

export default Login;
