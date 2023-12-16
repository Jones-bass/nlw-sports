
import { Image } from 'react-native';

import { Background } from "../../components/Background";
import logoImg from '../../assets/logo-nlw-esports.png';
import { styles } from './styles';
import { Heading } from '../../components/Heading';

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

    </Background>
  );
}
