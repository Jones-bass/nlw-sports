import { GameController } from "phosphor-react-native";

import { DuoInfo } from "../DuoInfo";

import { Button, ButtonTitle, Container } from './styles';
import { THEME } from "../../theme";

export interface DuoCardProps {
  id: string;
  hourEnd: string;
  hourStart: string;
  name: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

interface Props {
  data: DuoCardProps;
}

export function DuoCard({ data }: Props) {
  return (
    <Container>
      <DuoInfo
        label="Nome"
        value={data.name}
      />

      <DuoInfo
        label="Tempo de jogo"
        value={`${data.yearsPlaying} anos`}
      />

      <DuoInfo
        label="Disponibilidade"
        value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
      />

      <DuoInfo
        label="Chamada de áudio"
        value={data.useVoiceChannel ? 'Sim' : 'Não'}
      />

      <Button>
        <GameController
          color={THEME.COLORS.TEXT}
          size={20}
        />

        <ButtonTitle>
          Conectar
        </ButtonTitle>
      </Button>
    </Container>
  );
}
