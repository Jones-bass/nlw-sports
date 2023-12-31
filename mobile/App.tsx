import { NativeBaseProvider, StatusBar } from "native-base";
import { ThemeProvider } from "styled-components/native";

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from '@expo-google-fonts/inter'

import { Loading } from "./src/components/Loading";
import { Routes } from "./src/routes";
import { Background } from "./src/components/Background";
import { THEME } from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  return (
    <Background>
      <NativeBaseProvider theme={THEME}>

        <ThemeProvider theme={THEME}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
          {fontsLoaded ? <Routes /> : <Loading />}
        </ThemeProvider>
      </NativeBaseProvider>
    </Background>
  );
}

