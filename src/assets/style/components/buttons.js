import styled from 'styled-components/native';
import { colors, fontSize } from '../baseStyle';

const ButtonView = styled.View`
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const ButtonContainer = styled.TouchableOpacity`
  border-width: 2px;
  border-color: ${colors.prim};
  background: ${colors.sec};
  border-radius: 50px;
  width: 120px;
  height: 40px;
  padding-top: 4px;
`;
const ButtonLabel = styled.Text`
  color: ${colors.prim};
  text-align: center;
  font-size: ${fontSize.m};
  flex: 1;
`;

export { ButtonContainer, ButtonLabel, ButtonView };
