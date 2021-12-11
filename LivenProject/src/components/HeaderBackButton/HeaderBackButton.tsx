import React, {memo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Container, StyledBackIcon} from './HeaderBackButton.styles';
const HeaderBackButton: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.goBack()}>
      <StyledBackIcon />
    </Container>
  );
};

export default memo(HeaderBackButton);
