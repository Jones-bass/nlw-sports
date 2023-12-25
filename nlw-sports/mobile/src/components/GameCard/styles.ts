import { TouchableOpacity, ImageBackground, TouchableOpacityProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import theme from '../../theme/theme';


export interface GameCardProps {
  id: string;
  name: string;
  cover: any;
  ads: number;
}

interface StyledTouchableOpacityProps extends TouchableOpacityProps {
  marginRight?: number;
}

export const StyledTouchableOpacity = styled(TouchableOpacity)<StyledTouchableOpacityProps>`
  margin-right: ${({ marginRight = 24 }) => `${marginRight}px`};
`;

export const StyledImageBackground = styled(ImageBackground)`
  width: 240px;
  height: 320px;
  justify-content: flex-end;
  border-radius: 8px;
  overflow: hidden;
`;

export const StyledLinearGradient = styled(LinearGradient)`
  width: 100%;
  height: 120px;
  padding: 16px;
  justify-content: flex-end;
`;

export const StyledTextName = styled.Text`
  color: ${theme.colors.TEXT};
  font-size: ${theme.FONT_SIZE.MD};
  font-family: ${theme.FONT_FAMILY.BOLD};
`;

export const StyledTextAds = styled.Text`
  color: ${theme.colors.CAPTION_300};
  font-size: ${theme.FONT_SIZE.MD};
  font-family: ${theme.FONT_FAMILY.REGULAR};
`;
