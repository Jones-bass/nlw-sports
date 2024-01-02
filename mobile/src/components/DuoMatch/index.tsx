import { useState } from "react";
import { Modal, ModalProps, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CheckCircle } from "phosphor-react-native";
import * as Clipboard from 'expo-clipboard';

import { CloseIcon, Container, Contant, Discord, DiscordButton, Label } from './styles';
import { THEME } from "../../theme";
import { Heading } from "../Heading";
import { useToast } from "native-base";

interface Props extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
  const [isCoping, setIsCoping] = useState(false);

  const toast = useToast();

  async function handleCopyDiscordToClipboard() {
    setIsCoping(true);
    await Clipboard.setStringAsync(discord);

    toast.show({
        title: 'Discord Copiado! Usuário copiado para você colocar no Discord.',
      });
    setIsCoping(false);
  }

  return (
    <Modal
      animationType="fade"
      transparent
      statusBarTranslucent
      {...rest}
    >
      <Container>
        <Contant>
          <CloseIcon
            onPress={onClose}
          >
            <MaterialIcons
              name="close"
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </CloseIcon>

          <CheckCircle
            size={64}
            color={THEME.COLORS.SUCCESS}
            weight="bold"
          />

          <Heading
            title="Let's play!"
            subtitle="Agora é só começar a jogar!"
            style={{ alignItems: 'center', marginTop: 24 }}
          />

          <Label>
            Adicione no Discord
          </Label>
          <DiscordButton
            onPress={handleCopyDiscordToClipboard}
            disabled={isCoping}
          >
            <Discord>
              {isCoping ? <ActivityIndicator color={THEME.COLORS.PRIMARY} /> : discord}
            </Discord>
          </DiscordButton>
        </Contant>
      </Container>
    </Modal>
  );
}
