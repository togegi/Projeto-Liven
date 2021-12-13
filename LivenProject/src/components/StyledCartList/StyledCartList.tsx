import React from 'react';
import {FlatList, View} from 'react-native';
import {useAppDispatch, useAppState} from '../../AppProvider';
import {ProductOnCart} from '../../types';
import {
  HorizontalContainer,
  Container,
  PriceText,
  ProductImage,
  StyledText,
  StockContainer,
  AmountButton,
  Button,
} from './StyledCartList.styles';

interface StyledProductListProps {
  products?: ProductOnCart[];
}

const StyledProductList = ({products}: StyledProductListProps) => {
  const {cartList} = useAppState();
  const dispatch = useAppDispatch();

  const removeItem = (item: ProductOnCart) => {
    dispatch({
      type: 'setCartList',
      payload: cartList?.filter(e => e !== item),
    });
  };

  const addAmount = (item: ProductOnCart) => {
    let auxCartList = cartList.map(e => {
      if (e.id === item.id) {
        e.amount = e.amount + 1;
      }
      return e;
    });
    dispatch({type: 'setCartList', payload: auxCartList});
  };

  const subtractAmount = (item: ProductOnCart) => {
    if (item.amount === 1) {
      dispatch({
        type: 'setCartList',
        payload: cartList?.filter(e => e !== item),
      });
    } else {
      let auxCartList = cartList.map(e => {
        if (e.id === item.id) {
          e.amount = e.amount - 1;
        }
        return e;
      });
      dispatch({type: 'setCartList', payload: auxCartList});
    }
  };

  return (
    <>
      <FlatList
        data={products}
        renderItem={({item}) => {
          return (
            <Container>
              <HorizontalContainer>
                <ProductImage
                  source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                  }}
                />
                <View>
                  <StyledText>{item.name}</StyledText>
                  <PriceText>{`R$ ${item.price}`}</PriceText>
                </View>
              </HorizontalContainer>
              <StockContainer>
                <StyledText>{`Quantidade disponivel: ${item.stock}`}</StyledText>
                <StockContainer>
                  <AmountButton onPress={() => subtractAmount(item)}>
                    <StyledText>-</StyledText>
                  </AmountButton>
                  <StyledText>{item.amount}</StyledText>
                  <AmountButton onPress={() => addAmount(item)}>
                    <StyledText>+</StyledText>
                  </AmountButton>
                </StockContainer>
              </StockContainer>
              <Button onPress={() => removeItem(item)}>
                <StyledText>Remover do carrinho</StyledText>
              </Button>
            </Container>
          );
        }}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default StyledProductList;
