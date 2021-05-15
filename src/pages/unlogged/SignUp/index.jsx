import React, { useState } from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import * as Styled from '../Login/styles'
import { Container, SubContainer } from './styles'
import { useNavigation } from '@react-navigation/core'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/Entypo'
import { useEffect } from 'react'
import { TextInput } from 'react-native-paper'
import { Formik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'

const signUpSchema = yup.object({
  name: yup.string().required('Insira seu nome'),
  email: yup
    .string()
    .required('Insira um e-mail.')
    .email('Insira um e-mail válido.'),
  phone: yup
    .number()
    .typeError('Celular deve ser um número')
    .required('Insira seu celular'),
  password: yup
    .string()
    .min(6, ({ min }) => `Senha deve conter no mínimo ${min} caracteres`)
    .required('Insira uma senha.'),
  password_confirmation: yup
    .string()
    .required('Confirme sua senha')
    .oneOf([yup.ref('password'), null], 'As senhas não são iguais'),
  authentication: yup.mixed(),
})

const SignUp = () => {
  const navigation = useNavigation()

  const handleSignUp = (values) => {
    axios
      .post('http://localhost:3000/users', { user: values })
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
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Container>
          <Formik
            validationSchema={signUpSchema}
            initialValues={{
              name: '',
              email: '',
              phone: '',
              password: '',
              password_confirmation: '',
            }}
            onSubmit={(values) => handleSignUp(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <SubContainer>
                <Styled.TextInputWrapper>
                  <TextInput
                    name="name"
                    mode="outlined"
                    label="Nome Completo"
                    value={values.name}
                    onBlur={handleBlur('name')}
                    onChangeText={handleChange('name')}
                    error={errors.name && touched.name}
                  />
                  {errors.name && touched.name && (
                    <Styled.ErrorText>{errors.name}</Styled.ErrorText>
                  )}
                </Styled.TextInputWrapper>
                <Styled.TextInputWrapper>
                  <TextInput
                    name="email"
                    mode="outlined"
                    label="Email"
                    value={values.email}
                    onBlur={handleBlur('email')}
                    onChangeText={handleChange('email')}
                    error={errors.email && touched.email}
                  />
                  {errors.email && touched.email && (
                    <Styled.ErrorText>{errors.email}</Styled.ErrorText>
                  )}
                </Styled.TextInputWrapper>
                <Styled.TextInputWrapper>
                  <TextInput
                    name="phone"
                    mode="outlined"
                    label="Celular"
                    value={values.phone}
                    onBlur={handleBlur('phone')}
                    onChangeText={handleChange('phone')}
                    error={errors.phone && touched.phone}
                  />
                  {errors.phone && touched.phone && (
                    <Styled.ErrorText>{errors.phone}</Styled.ErrorText>
                  )}
                </Styled.TextInputWrapper>
                <Styled.TextInputWrapper>
                  <TextInput
                    name="password"
                    mode="outlined"
                    label="Senha"
                    value={values.password}
                    onBlur={handleBlur('password')}
                    onChangeText={handleChange('password')}
                    secureTextEntry={true}
                    error={errors.password && touched.password}
                  />
                  {errors.password && touched.password && (
                    <Styled.ErrorText>{errors.password}</Styled.ErrorText>
                  )}
                </Styled.TextInputWrapper>
                <Styled.TextInputWrapper>
                  <TextInput
                    name="password_confirmation"
                    mode="outlined"
                    label="Confirmação da senha"
                    value={values.password_confirmation}
                    onBlur={handleBlur('password_confirmation')}
                    onChangeText={handleChange('password_confirmation')}
                    secureTextEntry={true}
                    error={
                      errors.password_confirmation &&
                      touched.password_confirmation
                    }
                  />
                  {errors.password_confirmation &&
                    touched.password_confirmation && (
                      <Styled.ErrorText>
                        {errors.password_confirmation}
                      </Styled.ErrorText>
                    )}
                </Styled.TextInputWrapper>
                <Button onPress={handleSubmit}>Cadastrar</Button>
              </SubContainer>
            )}
          </Formik>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default SignUp
