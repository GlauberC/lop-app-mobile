import styled from 'styled-components/native';
import { colors, fontSize } from '../baseStyle';

const LabelInputView = styled.View`
  padding: 10px 20px;
`;

const Label = styled.Text`
  font-size: ${fontSize.m};
  color: ${colors.prim3};
  font-weight: bold;
`;
const InputLogoView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const IconText = styled.Text`
  flex: 1;
`;
const Input = styled.TextInput`
  flex: 8;
  border-bottom-width: 2px;
  border-bottom-color: ${colors.prim2};
  font-size: ${fontSize.m};
  color: ${colors.prim};
`;

export { LabelInputView, Label, InputLogoView, IconText, Input };
