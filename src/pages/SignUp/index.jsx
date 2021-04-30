import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { PasswordInput, PasswordInputBox } from '../Login/styles';
import { Container, SubContainer } from './styles';
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/Entypo';
import { useEffect } from 'react';




const SignUp = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [isHiddenIcon, setIsHiddenIcon] = useState(true);

  const [isHidden2, setIsHidden2] = useState(true);
  const [isHiddenIcon2, setIsHiddenIcon2] = useState(true);
  const navigation = useNavigation();
  const [isDisabled, setIsDisabled] = useState(true);


  const [isText1, setIsText1] = useState('');
  const [isText2, setIsText2] = useState('');
  const [isText3, setIsText3] = useState('');
  const [isText4, setIsText4] = useState('');
  const [isText5, setIsText5] = useState('');
  const [isText6, setIsText6] = useState('');

  useEffect(() => {
  const handleButton = () => {
    if ( isText1 && isText2 && isText3 && isText4 && isText5 && isText6)
    {
      setIsDisabled(false);
    } else {
      setIsDisabled(true)
    }
  }
  handleButton();
  })
  const handleInput = () => {
    setIsHidden(!isHidden);
    setIsHiddenIcon(!isHidden);
  }
  const handleInput2 = () => {
    setIsHidden2(!isHidden2);
    setIsHiddenIcon2(!isHidden2);
  }
  return(
    <Container>
      <SubContainer>
        <Input placeholder="Nome Completo" onChangeText={value => setIsText1(value)} />
        <Input placeholder="Email" onChangeText={value => setIsText2(value)}/>
        <Input placeholder="Número do celular" onChangeText={value => setIsText3(value)}/>
        <PasswordInput>
          {
            isHidden ?
              <PasswordInputBox placeholder="Senha" secureTextEntry placeholderTextColor="#114978" onChangeText={value => setIsText4(value)}  />
            :
              <PasswordInputBox placeholder="Senha" secureTextEntry={false} placeholderTextColor="#114978" onChangeText={value => setIsText4(value)} />
            
          }
          <TouchableOpacity onPress={handleInput} >
            {
              isHiddenIcon ?
                <Icon name="eye" size={20} />
              :
                <Icon name="eye-with-line" size={20} />
            }
          </TouchableOpacity>
        </PasswordInput>
        <PasswordInput>
          {
            isHidden2 ?
              <PasswordInputBox placeholder="Confirme sua senha" secureTextEntry placeholderTextColor="#114978" onChangeText={value => setIsText5(value)}  />
            :
              <PasswordInputBox placeholder="Confirme sua senha" secureTextEntry={false} placeholderTextColor="#114978" onChangeText={value => setIsText5(value)} />
            
          }
          <TouchableOpacity onPress={handleInput2} >
            {
              isHiddenIcon2 ?
                <Icon name="eye" size={20} />
              :
                <Icon name="eye-with-line" size={20} />
            }
          </TouchableOpacity>
      </PasswordInput>
        <Input placeholder="ID da Escola" onChangeText={value => setIsText6(value)} />
        <Button disabled={isDisabled} onPress={() => {
          navigation.goBack()
        }}>Cadastrar</Button>
      </SubContainer>

    </Container>
  );
}

export default SignUp;