
import styled from "styled-components/native";
import { THEME } from "../../theme";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  width: 200px;
  background-color: ${THEME.COLORS.SHAPE};
  border-radius: 8px;
  padding: 20px;
  margin-right: 16px;
  align-items: center;
`;

export const Button = styled(TouchableOpacity)`
  width: 100%;
  height: 36px;
  border-radius: 6px;
  background-color: ${THEME.COLORS.PRIMARY};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonTitle = styled.Text`
  margin-left: 8px;
  color: ${THEME.COLORS.TEXT};
  font-size: ${THEME.FONT_SIZE.SM};
  font-family: ${THEME.FONT_FAMILY.SEMI_BOLD};
`;