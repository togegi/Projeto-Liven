import React, {memo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Container, StyledCartIcon} from './HeaderCartButton.styles';

const HeaderCartButton: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.navigate('Cart')}>
      <StyledCartIcon />
    </Container>
  );
};

export default memo(HeaderCartButton);
