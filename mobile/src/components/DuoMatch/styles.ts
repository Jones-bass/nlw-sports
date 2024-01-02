import styled from "styled-components/native";
import { THEME } from "../../theme";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${THEME.COLORS.OVERLAY};
`;

export const Contant = styled.View`
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${THEME.COLORS.SHAPE};
`;

export const CloseIcon = styled(TouchableOpacity)`
  align-self: flex-end;
  margin: 16px;
`;

export const Label = styled.Text`
  color: ${THEME.COLORS.TEXT};
  font-size: ${THEME.FONT_SIZE.MD};
  font-family: ${THEME.FONT_FAMILY.SEMI_BOLD};
  margin-top: 24px;
  margin-bottom: 8px;
`;


export const DiscordButton = styled(TouchableOpacity)`
  width: 230px;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-bottom: 32px;
  background-color: ${THEME.COLORS.BACKGROUND_900};
`;

export const Discord = styled.Text`
  font-family: ${THEME.FONT_FAMILY.REGULAR};
  color: ${THEME.COLORS.TEXT};
`;

