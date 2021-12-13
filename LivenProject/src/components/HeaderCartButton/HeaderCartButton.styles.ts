import {Platform, Pressable, Image, Text, View} from 'react-native';
import styled from 'styled-components/native';
import CartIcon from '../../assets/CartIcon.png';

export const AndroidContainer = styled(Pressable).attrs({
  android_ripple: {
    borderless: true,
    color: '#666666',
    radius: 20,
  },
})`
  margin-left: 14px;
`;

export const IOSContainer = styled.TouchableOpacity`
  margin-right: 14px;
  margin-left: 16px;
`;

export const Container = styled(
  Platform.OS === 'android' ? AndroidContainer : IOSContainer,
).attrs({
  hitSlop: {
    top: 16,
    right: 16,
    bottom: 16,
    left: 16,
  },
})``;

export const StyledCartIcon = styled(Image).attrs({
  source: CartIcon,
})`
  margin-right: 16px;
  width: 30px;
  height: 30px;
`;

export const BadgeText = styled(Text)`
  font-weight: bold;
  align-self: center;
  color: white;
`;

export const BadgeContainer = styled(View)`
  flex: 1;
  position: absolute;
  background-color: red;
  border-radius: 20px;
  top: 0px;
  right: 0px;
  width: 20px;
`;
