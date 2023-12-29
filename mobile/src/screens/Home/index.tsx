
import { FlatList } from 'react-native';

import { Background } from "../../components/Background";
import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { useEffect, useState } from 'react';
import { api } from '../../service/api';
import { useToast } from 'native-base';
import { Container, ContentList, Logo } from './styles';
import { useNavigation } from '@react-navigation/native';



export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([])
  const [isLoading, setIsLoading] = useState(true);

  const toast = useToast();

  const navigation = useNavigation();

  function handleOpenGaming({ id, title, bannerUrl }: GameCardProps) {
    navigation.navigate('game', { id, title, bannerUrl });
  }

  async function fetchGames() {
    try {
      setIsLoading(true)
      const response = await api.get('/games');
      setGames(response.data);
    } catch (error) {
      console.log(error);

      toast.show({
        title: 'Error ao exibir os jogos',
      });


    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchGames();
  }, [])

  return (
    <Container>
      <Background>

          <Logo
            source={logoImg}
          />

        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />
        <ContentList>
          <FlatList
            data={games}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <GameCard
                data={item}
                onPress={() => handleOpenGaming(item)}
 
              />
            )}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </ContentList>

      </Background>
    </Container>
  );
}
