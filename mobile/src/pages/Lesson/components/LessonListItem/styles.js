import styled, { css } from 'styled-components/native';
import { colors } from '../../../../styles';

export const Button = styled.TouchableOpacity`
  flex: 1;
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  margin: 10px 20px;
  border-left-width: 4px;
  ${props =>
    props.done
      ? css`
          border-color: ${colors.success};
        `
      : css`
          border-color: ${colors.alert};
        `};
`;

export const TextBox = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: 'Montserrat-Regular';
  margin-bottom: 5px;
`;

export const Grade = styled.Text`
  font-weight: bold;
`;
