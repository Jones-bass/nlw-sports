import { NativeBaseProvider, StatusBar } from "native-base";
import { ThemeProvider } from "styled-components/native";

import { Background } from './src/components/Background';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from '@expo-google-fonts/inter'

import { Home } from "./src/screens/Home";
import { Loading } from "./src/components/Loading";
import theme from "./src/theme/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  return (
    <Background>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <Home /> : <Loading />}
      </ThemeProvider>
    </Background>
  );
}

