import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {Rating} from 'react-native-ratings';

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
  console.log(DATA);

  return (
    <FlatList
      data={DATA}
      numColumns={2}
      renderItem={({item}) => {
        return (
          <View
            style={{
              flex: 1,
              marginTop: 16,
              marginHorizontal: 4,
              backgroundColor: 'white',
              borderRadius: 16,
            }}>
            <Image
              style={{
                marginTop: 8,
                alignSelf: 'center',
                width: 256,
                height: 192,
                resizeMode: 'contain',
              }}
              source={{
                // uri: item.image,
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
            <View
              style={{
                flex: 1,
                alignItems: 'flex-start',
                marginLeft: 16,
                marginVertical: 8,
              }}>
              <Text style={{color: '#404040'}}>{item.name}</Text>
              <Text
                style={{
                  color: '#FB6773',
                  fontWeight: 'bold',
                }}>
                {`R$ ${item.price}`}
              </Text>
            </View>
          </View>
        );
      }}
      keyExtractor={item => item.id}
    />
  );
}

export default StyledFlatList;
