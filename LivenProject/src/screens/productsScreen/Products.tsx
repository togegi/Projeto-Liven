import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StyledProductsList from '../../components/StyledProductsList/StyledProductsList';
import {Container, Loader} from './Products.styles';
import StyledModal from '../../components/StyledModal/StyledModal';
import {Product, ProductOnCart} from '../../types';
import {useAppState, useAppDispatch} from '../../AppProvider';

const Products = () => {
  const dispatch = useAppDispatch();

  const {productList, cartList} = useAppState();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get('https://5d6da1df777f670014036125.mockapi.io/api/v1/product')
      .then(function (response) {
        dispatch({type: 'setProductList', payload: response.data});
        setLoading(false);
      })
      .catch(function (e) {
        console.log(e);
        setLoading(false);
      });
  }, [dispatch]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const closeModal = () => {
    setModalVisible(false);
  };

  const addToCart = (item: ProductOnCart) => {
    let productIsOnCart = false;
    if (cartList?.length) {
      let auxCartList = cartList.map(e => {
        if (e.id === item.id) {
          e.amount = e.amount + item.amount;
          productIsOnCart = true;
        }
        return e;
      });
      if (productIsOnCart) {
        dispatch({type: 'setCartList', payload: auxCartList});
      } else {
        dispatch({type: 'setCartList', payload: cartList.concat([item])});
      }
    } else {
      dispatch({type: 'setCartList', payload: [item]});
    }
    setModalVisible(false);
  };

  const openModal = (item: Product) => {
    setModalVisible(true);
    setSelectedProduct(item);
  };

  return (
    <Container>
      {loading ? (
        <Loader size="large" />
      ) : (
        <StyledProductsList products={productList} onPress={openModal} />
      )}
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
