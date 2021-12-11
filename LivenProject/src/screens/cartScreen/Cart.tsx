import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import StyledCartList from '../../components/StyledCartList/StyledCartList';
import {ButtonText, ConfirmButton, Container} from './Cart.styles';

const Cart = () => {
  const DATA = [
    {
      id: '1',
      createdAt: '2019-09-02T12:58:54.103Z',
      name: 'Rustic Metal Fish',
      price: '289.00',
      image: 'http://lorempixel.com/640/480/food',
      stock: 65171,
    },
    {
      id: '2',
      createdAt: '2019-09-02T07:59:58.181Z',
      name: 'Sleek Wooden Soap',
      price: '430.00',
      image: 'http://lorempixel.com/640/480/transport',
      stock: 91260,
    },
    {
      id: '3',
      createdAt: '2019-09-02T22:14:05.454Z',
      name: 'Small Cotton Shoes',
      price: '993.00',
      image: 'http://lorempixel.com/640/480/sports',
      stock: 36608,
    },
    {
      id: '4',
      createdAt: '2019-09-02T07:36:56.139Z',
      name: 'Ergonomic Frozen Towels',
      price: '259.00',
      image: 'http://lorempixel.com/640/480/nightlife',
      stock: 92065,
    },
    {
      id: '5',
      createdAt: '2019-09-02T05:18:30.393Z',
      name: 'Awesome Metal Pants',
      price: '69.00',
      image: 'http://lorempixel.com/640/480/sports',
      stock: 54930,
    },
    {
      id: '6',
      createdAt: '2019-09-02T16:22:03.725Z',
      name: 'Intelligent Cotton Bacon',
      price: '14.00',
      image: 'http://lorempixel.com/640/480/fashion',
      stock: 88996,
    },
    {
      id: '7',
      createdAt: '2019-09-02T02:26:28.018Z',
      name: 'Ergonomic Plastic Tuna',
      price: '477.00',
      image: 'http://lorempixel.com/640/480/food',
      stock: 73117,
    },
    {
      id: '8',
      createdAt: '2019-09-02T14:25:31.508Z',
      name: 'Intelligent Soft Keyboard',
      price: '764.00',
      image: 'http://lorempixel.com/640/480/nature',
      stock: 14875,
    },
  ];

  const navigation = useNavigation();

  const purchase = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <StyledCartList products={DATA} />
      <ConfirmButton onPress={() => purchase()}>
        <ButtonText>Finalizar Compra</ButtonText>
      </ConfirmButton>
    </Container>
  );
};

export default Cart;
