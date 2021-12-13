import {Platform, Pressable, Image} from 'react-native';
import styled from 'styled-components/native';
import BackIcon from '../../assets/BackIcon.png';

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

export const StyledBackIcon = styled(Image).attrs({
  source: BackIcon,
  resizeMode: 'contain',
})`
  width: 30px;
  height: 30px;
`;
