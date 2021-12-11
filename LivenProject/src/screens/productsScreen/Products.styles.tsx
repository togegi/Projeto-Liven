import {ActivityIndicator, SafeAreaView} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding-bottom: 8px;
  padding-horizontal: 4px;
  background-color: #f2f2f2;
`;

export const Loader = styled(ActivityIndicator)`
  flex: 1;
  align-self: center;
`;
