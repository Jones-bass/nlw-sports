import { TouchableOpacity, ImageBackground, TouchableOpacityProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import { THEME } from '../../theme';


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
  color: ${THEME.COLORS.TEXT};
  font-size: ${THEME.FONT_SIZE.MD};
  font-family: ${THEME.FONT_FAMILY.BOLD};
`;

export const StyledTextAds = styled.Text`
  color: ${THEME.COLORS.CAPTION_300};
  font-size: ${THEME.FONT_SIZE.MD};
  font-family: ${THEME.FONT_FAMILY.REGULAR};
`;
