import { ViewProps } from 'react-native';

import { Container, Subtitle, Title } from './styles';

interface Props extends ViewProps {
  title: string;
  subtitle: string;
}

export function Heading({ title, subtitle,}: Props) {
  return (
    <Container>
      <Title >
        {title}
      </Title>

      <Subtitle>
        {subtitle}
      </Subtitle>
    </Container>
  );
}
