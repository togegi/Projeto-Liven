import React from 'react';
import {FlatList} from 'react-native';
import {Product} from '../../types/types';
import {
  Container,
  PriceText,
  ProductImage,
  StyledText,
  TextContiner,
} from './StyledProductsList.styles';

interface StyledProductListProps {
  products: Product[];
  onPress: (item: Product) => void;
}

const StyledProductList = ({products, onPress}: StyledProductListProps) => {
  return (
    <>
      <FlatList
        data={products}
        numColumns={2}
        renderItem={({item}) => {
          return (
            <Container onPress={() => onPress(item)}>
              <ProductImage
                source={{
                  // uri: item.image,
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
              />
              <TextContiner>
                <StyledText>{item.name}</StyledText>
                <PriceText>{`R$ ${item.price}`}</PriceText>
              </TextContiner>
            </Container>
          );
        }}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default StyledProductList;
