
import { FlatList, Image } from 'react-native';

import { Background } from "../../components/Background";
import logoImg from '../../assets/logo-nlw-esports.png';
import { styles } from './styles';
import { Heading } from '../../components/Heading';
import { GameCard } from '../../components/GameCard';
import { GAMES } from '../../utils/games';

export function Home() {
  return (
    <Background>

      <Image
        source={logoImg}
        style={styles.logo}
      />
      
      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />
        <FlatList
          data={GAMES}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <GameCard
              data={item}
            />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.contentList}
        />

    </Background>
  );
}
