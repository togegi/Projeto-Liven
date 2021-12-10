import React, {useState} from 'react';
import axios from 'axios';
import StyledFlatList from '../../components/StyledFlatList/StyledFlatList';
import {Container} from './Products.styles';
import StyledModal from '../../components/StyledModal/StyledModal';
import {Product} from '../../types/types';

const Products = () => {
  const [productList, setProductList] = useState([]);
  axios
    .get('https://5d6da1df777f670014036125.mockapi.io/api/v1/product')
    .then(function (response) {
      return setProductList(response.data);
    });

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const closeModal = () => {
    setModalVisible(false);
  };

  const addToCart = () => {
    setModalVisible(false);
  };

  const openModal = (item: Product) => {
    setModalVisible(true);
    setSelectedProduct(item);
  };

  return (
    <Container>
      <StyledFlatList products={productList} onPress={openModal} />
      {selectedProduct && (
        <StyledModal
          product={selectedProduct}
          isVisible={modalVisible}
          onCancel={closeModal}
          onContinue={addToCart}
        />
      )}
    </Container>
  );
};

export default Products;
