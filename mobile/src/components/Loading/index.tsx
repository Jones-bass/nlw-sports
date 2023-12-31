import { ActivityIndicator } from 'react-native';

import { Container } from './styles';
import { THEME } from '../../theme';

export function Loading() {
  return (
    <Container>
      <ActivityIndicator color={THEME.COLORS.PRIMARY} />
    </Container>
  );
}
