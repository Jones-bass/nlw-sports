import { GameController } from "phosphor-react-native";

import { DuoInfo } from "../DuoInfo";

import theme from '../../theme/theme';
import { Button, ButtonTitle, Container } from './styles';

export function DuoCard() {
  return (
    <Container>
      <DuoInfo
        label="Nome"
        value="Jonees Souza"
      />

      <DuoInfo
        label="Tempo de jogo"
        value="2 anos"
      />

      <DuoInfo
        label="Disponibilidade"
        value="02 dias - 02 horas"
      />

      <DuoInfo
        label="Chamada de áudio"
        value="Sim"
      />

      <Button>
        <GameController
          color={theme.colors.TEXT}
          size={20}
        />

        <ButtonTitle>
          Conectar
        </ButtonTitle>
      </Button>
    </Container>
  );
}
