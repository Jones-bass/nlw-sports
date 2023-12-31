
import styled from "styled-components/native";
import { THEME } from "../../theme";

interface PropsCondition {
  hasCondition: {
    themeColor: string;
  };
}

export const Container = styled.View`
  width: 100%;
  margin-bottom: 16px;
`;

export const Label = styled.Text`
  color: ${THEME.COLORS.CAPTION_400};
  font-size: ${THEME.FONT_SIZE.SM};
  font-family: ${THEME.FONT_FAMILY.BOLD};
`;

export const Value = styled.Text`
  color: ${({ hasCondition }: PropsCondition) => hasCondition.themeColor || THEME.COLORS.CAPTION_300};

  font-size: ${THEME.FONT_SIZE.SM};
  font-family: ${THEME.FONT_FAMILY.BOLD};
`;

