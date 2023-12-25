
import styled from "styled-components/native";
import theme from "../../theme/theme";

export const Container = styled.View`
    width: 100%;
    padding: 32px;
  `;

export const Title = styled.Text`
    color: ${theme.colors.TEXT};
    font-size: ${theme.FONT_SIZE.LG};
    font-family: ${theme.FONT_FAMILY.BLACK};
  `;

export const Subtitle = styled.Text`
    color: ${theme.colors.CAPTION_400};
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `;




