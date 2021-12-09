import {Image, Text, View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex: 1;
  background-color: white;
  padding-horizontal: 16px;
  padding-vertical: 8px;
`;

export const ButtonContainer = styled(View)`
  flex: 1;
  padding-vertical: 16px;
  align-items: center;
`;

export const StockContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductImage = styled(Image).attrs({
  resizeMode: 'contain',
})`
  margin-top: 8px;
  align-self: center;
  width: 640px;
  height: 480px;
`;

export const PriceText = styled(Text)`
  color: #fb6773;
  font-weight: bold;
  margin-vertical: 8px;
  font-size: 40px;
`;

export const StyledText = styled(Text)`
  color: #404040;
  margin-vertical: 8px;
`;

export const ConfirmButton = styled(TouchableOpacity)`
  background-color: #52d58e;
  border-radius: 16px;
  align-items: center;
  margin-vertical: 4px;
  width: 200px;
`;

export const CancelButton = styled(TouchableOpacity)`
  border-radius: 16px;
  align-items: center;
  margin-vertical: 4px;
  width: 200px;
`;

export const ButtonText = styled(Text)`
  color: #404040;
  font-weight: bold;
  margin-vertical: 8px;
  margin-horizontal: 16px;
`;

export const AmountButton = styled(TouchableOpacity)`
  border-radius: 30px;
  align-items: center;
  background-color: #f2f2f2;
  width: 35px;
  margin-horizontal: 8px;
`;
