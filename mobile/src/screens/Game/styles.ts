import styled from "styled-components/native";
import theme from "../../theme/theme";

export const ContainerList = styled.View`
  width: 100%;
`;

export const Container = styled.View`
  display: flex;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding-right: 32px;
  margin-top: 28px;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  width: 102px;
  height: 40px;
`;

export const Rigth = styled.View`
  width: 20px;
  height: 20px;
`;

export const Cover = styled.View`
  width: 311px;
  height: 160px;
  border-radius: 8px;
  margin-top: 32px;
`;

export const ContentList = styled.View`
  padding-left: 32px;
  padding-right: 64px;
  align-items: center;
  `;

export const EmptyListText = styled.Text`
  color: ${theme.colors.CAPTION_300};
  font-size: ${theme.FONT_SIZE.MD};
  font-family: ${theme.FONT_FAMILY.REGULAR};
`;

export const EmptyListContent = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;