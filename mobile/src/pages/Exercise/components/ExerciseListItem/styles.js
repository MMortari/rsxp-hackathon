import styled from 'styled-components/native';

export const Box = styled.View`
  flex: 1;
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
`;

export const Title = styled.Text`
  font-family: 'Montserrat-Regular';
  font-size: 16px;
  font-weight: bold;
`;

export const Line = styled.View`
  height: 0px;
  width: 100%;
  margin: 5px 0;
`;

export const Code = styled.Text`
  font-family: 'Montserrat-Regular';
`;

export const AnswersBox = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const AnswersBoxRow = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const AnswersItem = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex: 1;
  margin: 10px;
  justify-content: center;
  align-items: center;
  padding: 10px 5px;
  border-radius: 4px;
  background: #4f62ff;
`;

export const AnswersText = styled.Text`
  font-family: 'Montserrat-Regular';
  font-weight: bold;
  color: #fff;
`;

export const AnswersTitle = styled.Text`
  font-family: 'Montserrat-Regular';
  font-weight: bold;
  color: #333;
  text-align: center;
`;

export const VerifyAnswers = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex: 1;
  margin: 10px;
  padding: 20px;
  background: #4f62ff;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const VerifyText = styled.Text`
  font-size: 20px;
  font-family: 'Montserrat-Regular';
  font-weight: bold;
  color: #fff;
`;
