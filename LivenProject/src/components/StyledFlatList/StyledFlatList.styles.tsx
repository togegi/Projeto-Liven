import {Image, Text, View} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex: 1;
  margin-top: 16px;
  margin-horizontal: 4px;
  background-color: white;
  border-radius: 16px;
`;

export const ProductImage = styled(Image).attrs({
  resizeMode: 'contain',
})`
  margin-top: 8px;
  align-self: center;
  width: 256px;
  height: 192px;
`;

export const TextContiner = styled(View)`
  flex: 1;
  aligni-tems: flex-start;
  margin-left: 16px;
  margin-vertical: 8px;
`;

export const PriceText = styled(Text)`
  color: #fb6773;
  font-weight: bold;
`;

export const StyledText = styled(Text)`
  color: #404040;
`;
