import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"

import { extendTheme } from "@chakra-ui/react"
import { AuthProvider } from '../contexts/AuthContext'
import { SessionProvider } from "next-auth/react"
import { storeWrapper } from "../store";

const firebaseConfig = {
  apiKey: "AIzaSyAfTghnlu6e4m9ZsCvOoGPRTfqjJiHS9h4",
  authDomain: "leelo-420bc.firebaseapp.com",
  projectId: "leelo-420bc",
  storageBucket: "leelo-420bc.appspot.com",
  messagingSenderId: "928020118819",
  appId: "1:928020118819:web:379623fdb122f6c374a096",
  measurementId: "G-V6GQ8046M2"
};

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}
const theme = extendTheme({ colors })

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ChakraProvider>
    </SessionProvider>
  )
}
export default storeWrapper.withRedux(MyApp);
