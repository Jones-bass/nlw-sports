import { ImageBackground } from 'react-native';

import backgroundImg from '../../assets/background-galaxy.png';


interface Props {
  children: React.ReactNode;
}

export function Background({ children }: Props) {
  return (
    <ImageBackground
      source={backgroundImg}
      style={{ width: "100%", height: "100%" }}

      defaultSource={backgroundImg}
    >
      {children}
    </ImageBackground>
  );
}
