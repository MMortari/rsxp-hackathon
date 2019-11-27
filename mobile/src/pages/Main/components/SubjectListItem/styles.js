import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  flex: 1;
  border-radius: 4px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  padding: 20px;
  margin: 10px 20px;
  background: #fff;

  border-left-width: 4px;
  border-color: ${props => props.color};
`;

export const SubjectName = styled.Text`
  font-size: 20px;
  font-family: 'Montserrat-Regular';
  font-weight: bold;
  color: #333;
`;
