import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from '@expo/vector-icons';

import logoImg from '../../assets/logo-nlw-esports.png';

import { Background } from "../../components/Background";
import theme from "../../theme/theme";
import { Container, Cover, Header, Logo, Rigth } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { GameParams } from "../../@types/navigation";
import { Heading } from "../../components/Heading";

export function Game() {
  const navigation = useNavigation();
  const router = useRoute();
  const game = router.params as GameParams;

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Background>
      <Container>
        <Header>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={theme.colors.CAPTION_300}
              size={24}
            />
          </TouchableOpacity>

          <Logo
            source={logoImg}
          />

          <Rigth />
        </Header>

        <Cover
          resizeMode="cover"
          source={{ uri: game.bannerUrl }}
        />

        <Heading
          title={game.title}
          subtitle="Conecte-se e comece a jogar!"
        />
      </Container>
    </Background>
  );
}
