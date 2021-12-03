import React from 'react';
import {FlatList} from 'react-native';
import {
  Container,
  PriceText,
  ProductImage,
  StyledText,
  TextContiner,
} from './StyledFlatList.styles';

export type Product = {
  id: string;
  createdAt: string;
  name: string;
  price: string;
  image: string;
  stock: number;
};

export type Props = {
  DATA: Product[];
};

function StyledFlatList({DATA}: Props) {
  return (
    <FlatList
      data={DATA}
      numColumns={2}
      renderItem={({item}) => {
        return (
          <Container>
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
  );
}

export default StyledFlatList;
