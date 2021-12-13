import React, {memo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  BadgeContainer,
  BadgeText,
  Container,
  StyledCartIcon,
} from './HeaderCartButton.styles';
import {useAppState} from '../../AppProvider';

const HeaderCartButton: React.FC = () => {
  const navigation = useNavigation();
  const {cartList} = useAppState();

  return (
    <Container onPress={() => navigation.navigate('Cart')}>
      {cartList?.length ? (
        <>
          <BadgeContainer>
            <BadgeText>{cartList.length}</BadgeText>
          </BadgeContainer>
          <StyledCartIcon />
        </>
      ) : (
        <StyledCartIcon />
      )}
    </Container>
  );
};

export default memo(HeaderCartButton);
