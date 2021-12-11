import {Image, Text, View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  background-color: white;
  padding-horizontal: 16px;
  margin-vertical: 4px;
`;

export const HorizontalContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const StockContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-vertical: 8px;
`;

export const ProductImage = styled(Image).attrs({
  resizeMode: 'cover',
})`
  width: 160px;
  height: 120px;
`;

export const PriceText = styled(Text)`
  color: #fb6773;
  font-weight: bold;
  margin-vertical: 4px;
  font-size: 40px;
`;

export const StyledText = styled(Text)`
  color: #404040;
  margin-vertical: 8px;
`;

export const AmountButton = styled(TouchableOpacity)`
  border-radius: 30px;
  align-items: center;
  background-color: #f2f2f2;
  width: 35px;
  margin-horizontal: 8px;
`;
