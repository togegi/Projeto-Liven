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
    dispatch({type: 'setCartList', payload: null});

    navigation.goBack();
  };

  return (
    <Container>
      {cartList && (
        <>
          <StyledCartList products={cartList} />
          <ConfirmButton onPress={() => purchase()}>
            <ButtonText>Finalizar Compra</ButtonText>
          </ConfirmButton>
        </>
      )}
    </Container>
  );
};

export default Cart;
