import React from 'react';
import {FlatList, View} from 'react-native';
import {ProductOnCart} from '../../types';
import {
  HorizontalContainer,
  Container,
  PriceText,
  ProductImage,
  StyledText,
  StockContainer,
  AmountButton,
} from './StyledCartList.styles';

interface StyledProductListProps {
  products?: ProductOnCart[];
}

const StyledProductList = ({products}: StyledProductListProps) => {
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
                  <AmountButton onPress={() => {}}>
                    <StyledText>-</StyledText>
                  </AmountButton>
                  <StyledText>{item.amount}</StyledText>
                  <AmountButton onPress={() => {}}>
                    <StyledText>+</StyledText>
                  </AmountButton>
                </StockContainer>
              </StockContainer>
            </Container>
          );
        }}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default StyledProductList;
