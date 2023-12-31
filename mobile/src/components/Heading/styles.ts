
import styled from "styled-components/native";
import { THEME } from "../../theme";

export const Container = styled.View`
    width: 100%;
    padding: 32px;
  `;

export const Title = styled.Text`
    color: ${THEME.COLORS.TEXT};
    font-size: ${THEME.FONT_SIZE.LG};
    font-family: ${THEME.FONT_FAMILY.BLACK};
  `;

export const Subtitle = styled.Text`
    color: ${THEME.COLORS.CAPTION_400};
    font-size: ${THEME.FONT_SIZE.MD};
    font-family: ${THEME.FONT_FAMILY.REGULAR};
  `;




