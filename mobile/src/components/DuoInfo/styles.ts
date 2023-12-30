
import styled from "styled-components/native";
import theme from "../../theme/theme";

export const Container = styled.View`
    width: 100%;
    margin-bottom: 16px;
  `;

export const Label = styled.Text`
    color: ${theme.colors.CAPTION_400};
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `;

export const Value = styled.Text`
    color: ${theme.colors.CAPTION_300};
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `;