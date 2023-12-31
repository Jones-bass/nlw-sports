import { TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons';

import logoImg from '../../assets/logo-nlw-esports.png';

import { Background } from "../../components/Background";
import { Container, ContentList, Cover, EmptyListContent, EmptyListText, Header, Logo, Rigth } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { GameParams } from "../../@types/navigation";
import { Heading } from "../../components/Heading";
import { FlatList, useToast } from "native-base";
import { DuoCard, DuoCardProps } from "../../components/DuoCard";
import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { THEME } from "../../theme";
import { Loading } from "../../components/Loading";


export function Game() {
  const [duos, setDuos] = useState<DuoCardProps[]>([])
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();
  const router = useRoute();
  const game = router.params as GameParams;

  function handleGoBack() {
    navigation.goBack();
  }

  const toast = useToast();

  async function fetchGames() {
    try {
      setIsLoading(true)
      const response = await api.get(`games/${game.id}/ads`);
      setDuos(response.data);
    } catch (error) {
      toast.show({
        title: 'Error ao exibir os cards',
      });


    } finally {
      setIsLoading(false);
    }
  }


  useEffect(() => {
    fetchGames();
  }, [])


  return (
    <Background>
      <Container>
        <Header>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
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

        {isLoading ? (
          <Loading />
        ) : (
          <FlatList
            data={duos}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <DuoCard
                data={item}
              />
            )}
            horizontal

            contentContainerStyle={[duos.length > 0 ? ContentList : EmptyListContent]}
            showsHorizontalScrollIndicator
            ListEmptyComponent={
              <EmptyListText>
                Não há anúncios publicados ainda.
              </EmptyListText>
            }
          />
        )}

      </Container>
    </Background>
  );
}
