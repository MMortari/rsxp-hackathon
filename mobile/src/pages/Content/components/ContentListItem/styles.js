import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  flex: 1;
  background: #fff;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  border-left-width: 4px;
  border-color: ${props =>
    props.grade === 1
      ? '#3df'
      : props.grade === 2
      ? '#d9f'
      : props.grade === 3 && '#202'};
  padding: 20px;
  border-radius: 4px;
  margin: 10px 20px;
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
