import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { colors, metrics } from '../../styles';

const GradientContainer = styled(LinearGradient).attrs({
  colors: [colors.grey, colors.regular],
  start: { x: 0.8, y: 0.5 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  height: ${metrics.screenHeight};
  width: ${metrics.screenWidth};
`;

export default GradientContainer;
