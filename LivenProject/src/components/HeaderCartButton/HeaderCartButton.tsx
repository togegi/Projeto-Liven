import React, {memo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Container} from './HeaderCartButton.styles';

const HeaderCartButton: React.FC = () => {
  const navigation = useNavigation();

  return <Container onPress={() => navigation.navigate('Cart')}></Container>;
};

export default memo(HeaderCartButton);
