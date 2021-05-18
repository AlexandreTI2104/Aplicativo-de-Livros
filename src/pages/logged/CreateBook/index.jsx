import React, { useState } from 'react'
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native'

import { TextInput, Switch } from 'react-native-paper'
import { Formik, useField } from 'formik'
import * as yup from 'yup'
import Button from '../../../components/Button'
import { Container, SubContainer } from './styles'
import { TextInputWrapper, ErrorText } from '../../unlogged/Login/styles'
import * as Styled from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SectionedMultiSelect from 'react-native-sectioned-multi-select'
import api, { fetcher } from '../../../services/api'
import { useNavigation } from '@react-navigation/core'
import useSWR, { mutate } from 'swr'

export default function CreateBook() {
  const navigation = useNavigation()

  const { data: genres, error } = useSWR('/genres', fetcher)

  const handleSubmit = (values) => {
    api
      .post('/books', { book: values })
      .then(() => {
        mutate('/books')
        navigation.navigate('Feed')
      })
      .catch((e) => {
        console.log(e)
      })
  }
  return (
    <Container>
      <Formik
        // validationSchema={}
        initialValues={{
          title: '',
          author: '',
          genre_ids: [1, 2, 3],
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
          <>
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
              {genres && (
                <SectionedMultiSelect
                  name="genre_ids"
                  items={genres}
                  uniqueKey="id"
                  displayKey="name"
                  IconRenderer={Icon}
                  selectText="Gêneros do livro"
                  hideSearch={true}
                  showDropDowns={true}
                  readOnlyHeadings={true}
                  onSelectedItemsChange={(items) =>
                    setFieldValue('genre_ids', items)
                  }
                  selectedItems={values.genre_ids}
                />
              )}
              {errors.genres && touched.genres && (
                <ErrorText>{errors.genres}</ErrorText>
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
                onValueChange={(value) => setFieldValue('rewardable', value)}
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
                    label="Segunda questão"
                    value={values.second_question}
                    onBlur={handleBlur('second_question')}
                    onChangeText={handleChange('second_question')}
                    error={errors.second_question && touched.second_question}
                  />
                </TextInputWrapper>
                <TextInputWrapper>
                  <TextInput
                    multiline={true}
                    numberOfLines={4}
                    name="third_question"
                    mode="outlined"
                    label="Terceira questão"
                    value={values.third_question}
                    onBlur={handleBlur('third_question')}
                    onChangeText={handleChange('third_question')}
                    error={errors.third_question && touched.third_question}
                  />
                </TextInputWrapper>
              </>
            ) : null}
            <Button onPress={handleSubmit}>Cadastrar</Button>
          </>
        )}
      </Formik>
    </Container>
  )
}
