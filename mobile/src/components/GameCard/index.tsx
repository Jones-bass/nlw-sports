import { TouchableOpacityProps } from 'react-native';

import { StyledImageBackground, StyledLinearGradient, StyledTextAds, StyledTextName, StyledTouchableOpacity } from './styles';
import theme from '../../theme/theme';

export interface GameCardProps {
  id: string;
  title: string;
  _count: {
    ads: number;
  }
  bannerUrl: string;
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps;
}

export function GameCard({ data, ...rest }: Props) {
  return (
    <StyledTouchableOpacity {...rest}>
      <StyledImageBackground         source={{ uri: data.bannerUrl }}>  
        <StyledLinearGradient colors={theme.colors.FOOTER}>
          <StyledTextName>
            {data.title}
          </StyledTextName>

          <StyledTextAds>
          {data._count.ads} anúncios
          </StyledTextAds>
        </StyledLinearGradient>
      </StyledImageBackground>
    </StyledTouchableOpacity>
  );
}
