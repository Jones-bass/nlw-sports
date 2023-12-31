
import { Container, Label, Value } from './styles';
import { THEME } from '../../theme';

interface Props {
  label: string;
  value: string;
}

export function DuoInfo({ label, value }: Props) {
  const statusText = value.split(' ')[0];

  return (
    <Container>
      <Label>
        {label}
      </Label>
      

      <Value 
        hasCondition={statusText === 'Sim'
        ? { themeColor: THEME.COLORS.SUCCESS }
        : statusText === 'Não'
        ? { themeColor: THEME.COLORS.ALERT }
        : { themeColor: THEME.COLORS.CAPTION_300 }}> {value}
      </Value>
    </Container>
  );
}
