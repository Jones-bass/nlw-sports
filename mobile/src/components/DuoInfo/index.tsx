import { ColorValue } from 'react-native';

import { Container, Label, Value } from './styles';
import theme from '../../theme/theme';

interface Props {
  label: string;
  value: string;
  colorValue?: ColorValue
}

export function DuoInfo({ label, value, colorValue = theme.colors.TEXT }: Props) {
  return (
    <Container>
      <Label>
        {label}
      </Label>

      <Value color={colorValue} numberOfLines={1}>
        {value}
      </Value>
    </Container>
  );
}
