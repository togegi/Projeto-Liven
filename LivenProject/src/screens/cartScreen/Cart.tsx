import {useNavigation} from '@react-navigation/native';
import React from 'react';
import StyledCartList from '../../components/StyledCartList/StyledCartList';
import {ButtonText, ConfirmButton, Container} from './Cart.styles';
import {useAppState, useAppDispatch} from '../../AppProvider';

const Cart = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const {cartList} = useAppState();

  const purchase = () => {
    dispatch({type: 'clearCartList'});

    navigation.goBack();
  };

  return (
    <Container>
      <StyledCartList products={cartList} />
      {cartList?.length ? (
        <ConfirmButton onPress={() => purchase()}>
          <ButtonText>Finalizar Compra</ButtonText>
        </ConfirmButton>
      ) : null}
    </Container>
  );
};

export default Cart;
