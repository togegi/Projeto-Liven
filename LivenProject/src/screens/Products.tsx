import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {SafeAreaView} from 'react-native';
import StyledFlatList from '../components/StyledFlatList/StyledFlatList';

const Products = () => {
  const [productList, setProductList] = useState([]);
  axios
    .get('https://5d6da1df777f670014036125.mockapi.io/api/v1/product')
    .then(function (response) {
      return setProductList(response.data);
    });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 4,
        backgroundColor: '#F2F2F2',
      }}>
      <StyledFlatList DATA={productList} />
    </SafeAreaView>
  );
};

export default Products;
