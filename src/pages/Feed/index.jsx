import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { PasswordInput, PasswordInputBox } from '../Login/styles';
import { Container, SubContainer } from './styles';
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/Entypo';
import { useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const Feed = () => {
    
    const navigation = useNavigation();

    return(
      <KeyboardAvoidingView style={{ flex: 1}}> 
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ScrollView>

                <Container>
                    <SubContainer>
                        <Input placeholder="Título">
                        <Input placeholder="Gênero">
                            <TouchableOpacity onPress={handleInput} >
                                {
                                    <Icon name="book-plus-multiple-outline" size={40} />
                                }
                            </TouchableOpacity>
                            <Button disabled={isDisabled} onPress={() => 
                                navigation.navigate("Cadastro de Livro")
                            }>"book-plus-multiple-outline"</Button>
                        </Input>
                        </Input>
                    </SubContainer>

                </Container>
            </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
}

export default Feed;