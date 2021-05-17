import React from 'react'
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native'
import { TextInput, Switch } from 'react-native-paper'
import { Formik } from 'formik'
import * as yup from 'yup'
import api from '../../../services/api'
import Button from '../../../components/Button'
import { Container, SubContainer } from './styles'
import { TextInputWrapper, ErrorText } from '../../unlogged/Login/styles'
import * as Styled from './styles'

export default function CreateBook() {
  const handleSubmit = (values) => {
    console.log(values)
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Container>
          <Formik
            // validationSchema={}
            initialValues={{
              title: '',
              genre: '',
              author: '',
              rewardable: false,
              first_question: null,
              second_question: null,
              third_question: null,
            }}
            onSubmit={(values) => handleSubmit(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              setFieldValue,
            }) => (
              <SubContainer>
                <TextInputWrapper>
                  <TextInput
                    name="title"
                    mode="outlined"
                    label="Título do Livro"
                    dense={true}
                    value={values.title}
                    onBlur={handleBlur('title')}
                    onChangeText={handleChange('title')}
                    error={errors.title && touched.title}
                  />
                  {errors.title && touched.title && (
                    <ErrorText>{errors.title}</ErrorText>
                  )}
                </TextInputWrapper>
                <TextInputWrapper>
                  <TextInput
                    name="genre"
                    mode="outlined"
                    dense={true}
                    label="Gênero Principal do Livro"
                    value={values.genre}
                    onBlur={handleBlur('genre')}
                    onChangeText={handleChange('genre')}
                    error={errors.genre && touched.genre}
                  />
                  {errors.genre && touched.genre && (
                    <ErrorText>{errors.genre}</ErrorText>
                  )}
                </TextInputWrapper>
                <TextInputWrapper>
                  <TextInput
                    name="author"
                    mode="outlined"
                    dense={true}
                    label="Autor do Livro"
                    value={values.author}
                    onBlur={handleBlur('author')}
                    onChangeText={handleChange('author')}
                    error={errors.author && touched.author}
                  />
                  {errors.author && touched.author && (
                    <ErrorText>{errors.author}</ErrorText>
                  )}
                </TextInputWrapper>
                <Styled.SwitchInputWrapper>
                  <Styled.Label>Ganhar pontos com esse livro?</Styled.Label>
                  <Switch
                    value={values.rewardable}
                    onValueChange={(value) =>
                      setFieldValue('rewardable', value)
                    }
                  />
                </Styled.SwitchInputWrapper>
                {values.rewardable ? (
                  <>
                    <TextInputWrapper>
                      <TextInput
                        multiline={true}
                        numberOfLines={4}
                        name="first_question"
                        mode="outlined"
                        label="Primeira questão"
                        value={values.first_question}
                        onBlur={handleBlur('first_question')}
                        onChangeText={handleChange('first_question')}
                        error={errors.first_question && touched.first_question}
                      />
                    </TextInputWrapper>
                    <TextInputWrapper>
                      <TextInput
                        multiline={true}
                        numberOfLines={4}
                        name="second_question"
                        mode="outlined"
                        label="Primeira questão"
                        value={values.second_question}
                        onBlur={handleBlur('second_question')}
                        onChangeText={handleChange('second_question')}
                        error={
                          errors.second_question && touched.second_question
                        }
                      />
                    </TextInputWrapper>
                    <TextInputWrapper>
                      <TextInput
                        multiline={true}
                        numberOfLines={4}
                        name="third_question"
                        mode="outlined"
                        label="Primeira questão"
                        value={values.third_question}
                        onBlur={handleBlur('third_question')}
                        onChangeText={handleChange('third_question')}
                        error={errors.third_question && touched.third_question}
                      />
                    </TextInputWrapper>
                  </>
                ) : null}
                <Button onPress={handleSubmit}>Cadastrar</Button>
              </SubContainer>
            )}
          </Formik>
        </Container>
      </TouchableWithoutFeedback>
    </ScrollView>
  )
}
