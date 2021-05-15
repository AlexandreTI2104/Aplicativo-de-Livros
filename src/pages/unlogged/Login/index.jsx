import React, { useState } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import { BoxInput, Container, PasswordInput, PasswordInputBox } from './styles'
import Icon from 'react-native-vector-icons/Entypo'
import WelcomePng from '../../../assets/welcome.png'
import { useNavigation } from '@react-navigation/core'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik } from 'formik'
import { TextInput } from 'react-native-paper'
import { authenticate } from '../../../services/auth'
import * as yup from 'yup'
import axios from 'axios'

const loginSchema = yup.object({
  email: yup
    .string()
    .required('Insira um e-mail.')
    .email('Insira um e-mail válido.'),
  password: yup.string().required('Insira uma senha.'),
  authentication: yup.mixed(),
})

const Login = () => {
  const [isHidden, setIsHidden] = useState(true)
  const [isHiddenIcon, setIsHiddenIcon] = useState(true)
  const navigation = useNavigation()
  const handleInput = () => {
    setIsHidden(!isHidden)
    setIsHiddenIcon(!isHidden)
  }

  const handleLogin = (values) => {
    axios
      .post('http://localhost:3000/auth/login', {
        email: values.email,
        password: values.password,
      })
      .then(async (response) => {
        const { data } = response
        const { token } = data
        await AsyncStorage.setItem('token', token)
        navigation.navigate('Feed')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        style={{ backgroundColor: 'white' }}
      >
        <Container style={{ backgroundColor: 'white' }}>
          <Image
            source={WelcomePng}
            resizeMode="contain"
            style={{ width: '100%', height: 300, marginBottom: 20 }}
          />
          <Formik
            validationSchema={loginSchema}
            initialValues={{ email: '', password: '', authentication: null }}
            onSubmit={(values) => handleLogin(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <BoxInput>
                <TextInput
                  mode="outlined"
                  label="Email"
                  onBlur={handleBlur('email')}
                  value={values.email}
                  onChangeText={handleChange('email')}
                />
                <TextInput
                  mode="outlined"
                  label="Senha"
                  onBlur={handleBlur('password')}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  secureTextEntry={true}
                />
                <View
                  style={{
                    marginTop: 30,
                    width: '100%',
                    paddingHorizontal: 30,
                  }}
                >
                  <Button onPress={handleSubmit}>Entrar</Button>
                </View>
              </BoxInput>
            )}
          </Formik>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              marginTop: 16,
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 40,
            }}
          >
            <Text>Ainda não tem conta?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Cadastro de Aluno')
              }}
            >
              <Text style={{ color: '#2196f3' }}>Criar Conta</Text>
            </TouchableOpacity>
          </View>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default Login
