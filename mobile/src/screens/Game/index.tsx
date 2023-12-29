import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from '@expo/vector-icons';

import logoImg from '../../assets/logo-nlw-esports.png';

import { Background } from "../../components/Background";
import theme from "../../theme/theme";
import { Container, Cover, Header, Logo } from "./styles";

export function Game() {


  return (
    <Background>
      <Container>
        <SafeAreaView>
          <Header>
              <TouchableOpacity>
                <Entypo
                  name="chevron-thin-left"
                  color={theme.colors.CAPTION_300}
                  size={24}
                />
              </TouchableOpacity>

              <Logo
                  source={logoImg}
                />

          </Header>

          <Cover>
            <Logo
              resizeMode="cover"
            />
          </Cover>


        

        </SafeAreaView>
      </Container>
    </Background>
  );
}
