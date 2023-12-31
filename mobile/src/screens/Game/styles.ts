import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { THEME } from "../../theme";

export const ContainerList = styled.View`
  width: 100%;
`;

export const Container = styled(SafeAreaView)`
  display: flex;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px 0px 20px;  
`;

export const Logo = styled.Image`
  align-items: center;
  justify-content: center;

  width: 100px;
  object-fit: contain;
`;

export const Rigth = styled.View`
  width: 20px;
  height: 20px;
`;

export const Cover = styled.Image`
  width: 340px;
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
  color: ${THEME.COLORS.CAPTION_300};
  font-size: ${THEME.FONT_SIZE.MD};
  font-family: ${THEME.FONT_FAMILY.REGULAR};
`;

export const EmptyListContent = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;