import styled from "styled-components/native";
import theme from "../../theme/theme";
import { Background } from "../../components/Background";

export const Container = styled(Background)`
    flex: 1;
    width: 100%;
    height: 100px;

    align-items: center;
`;

export const Logo = styled.Image`
    width: 180px;
    height: 100px;
    margin-top: 74px;
    margin-left: 20px;
    margin-bottom: 48px;
`;

export const ContentList = styled.View`
    padding-left: 20px;
    padding-right: 64px;
`;

export const GradientContainer = styled.View`
    padding: 16px;
    border-radius: 8px;
`;

export const Text = styled.Text`
    color: ${theme.colors.TEXT};
    font-size: ${theme.FONT_SIZE.LG};
    font-family: ${theme.FONT_FAMILY.REGULAR};
`;
