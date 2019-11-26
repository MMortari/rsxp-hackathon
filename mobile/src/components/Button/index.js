import styled from 'styled-components/native';
import { colors } from '../../styles';

const Button = styled.TouchableOpacity`
  height: 44;
  background-color: ${props => props.backgroundColor};
  border-radius: 4;
  justify-content: center;
  align-items: center;
`;

export default Button;
