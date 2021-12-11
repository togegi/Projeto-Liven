import React, {useState} from 'react';
import {Modal} from 'react-native';
import {Product, ProductOnCart} from '../../types';
import {
  ButtonText,
  CancelButton,
  ConfirmButton,
  Container,
  PriceText,
  ProductImage,
  StyledText,
  ButtonContainer,
  StockContainer,
  AmountButton,
} from './StyledModal.styles';

interface StyledModalProps {
  product: Product;
  isVisible: boolean;
  onCancel: () => void;
  onContinue: (product: ProductOnCart) => void;
}

const StyledModal = ({
  product,
  isVisible,
  onCancel,
  onContinue,
}: StyledModalProps) => {
  const [productAmount, setProductAmount] = useState(1);

  const addAmount = (amount: number, maxAmount: number) => {
    if (amount < maxAmount) {
      setProductAmount(amount + 1);
    }
  };

  const subtractAmount = (amount: number) => {
    if (amount > 1) {
      setProductAmount(amount - 1);
    }
  };

  return (
    <Modal visible={isVisible} transparent={true}>
      <ProductImage
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Container>
        <StyledText>{product.name}</StyledText>
        <PriceText>{`R$ ${product.price}`}</PriceText>
        <StockContainer>
          <StyledText>{`Quantidade disponivel: ${product.stock}`}</StyledText>
          <StockContainer>
            <AmountButton onPress={() => subtractAmount(productAmount)}>
              <StyledText>-</StyledText>
            </AmountButton>
            <StyledText>{productAmount}</StyledText>
            <AmountButton
              onPress={() => addAmount(productAmount, product.stock)}>
              <StyledText>+</StyledText>
            </AmountButton>
          </StockContainer>
        </StockContainer>
        <ButtonContainer>
          <ConfirmButton
            onPress={() => {
              let helper: ProductOnCart = product;
              helper.amount = productAmount;
              onContinue(helper);
              setProductAmount(1);
            }}>
            <ButtonText>Adicionar ao Carrinho</ButtonText>
          </ConfirmButton>
          <CancelButton
            onPress={() => {
              onCancel();
              setProductAmount(1);
            }}>
            <ButtonText>Cancelar</ButtonText>
          </CancelButton>
        </ButtonContainer>
      </Container>
    </Modal>
  );
};

export default StyledModal;
