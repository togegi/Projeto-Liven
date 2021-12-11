import {Platform, Pressable, Image} from 'react-native';
import styled from 'styled-components/native';
import CartIcon from '../../assets/CartIcon.png';

export const AndroidContainer = styled(Pressable).attrs({
  android_ripple: {
    borderless: true,
    color: '#666666',
    radius: 20,
  },
})`
  margin-right: 16px;
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
  resizeMode: 'contain',
})`
  width: 20px;
  height: 20px;
`;
