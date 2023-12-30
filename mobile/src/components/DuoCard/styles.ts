
import styled from "styled-components/native";
import theme from "../../theme/theme";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  width: 200px;
  background-color: ${theme.colors.SHAPE};
  border-radius: 8px;
  padding: 20px;
  margin-right: 16px;
  align-items: center;
`;

export const Button = styled(TouchableOpacity)`
  width: 100%;
  height: 36px;
  border-radius: 6px;
  background-color: ${theme.colors.PRIMARY};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonTitle = styled.Text`
  margin-left: 8px;
  color: ${theme.colors.TEXT};
  font-size: ${theme.FONT_SIZE.SM};
  font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
`;