import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding-vertical: 8px;
  padding-horizontal: 4px;
  background-color: #f2f2f2;
`;

export const ConfirmButton = styled(TouchableOpacity)`
  background-color: #52d58e;
  border-radius: 16px;
  align-self: center;
  align-items: center;
  margin-vertical: 8px;
  width: 400px;
`;

export const ButtonText = styled(Text)`
  color: #404040;
  font-weight: bold;
  font-size: 40px;
  margin-vertical: 8px;
  margin-horizontal: 16px;
`;
