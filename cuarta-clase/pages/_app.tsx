import Head from 'next/head';
import { ChakraProvider, Stack, Text } from "@chakra-ui/react"
import { createClient, Provider as UrlQlProvider } from 'urql';

// components
import { RickAndMorty } from '../components/RickAndMorty';

// constants
const client = createClient({ url: 'https://rickandmortyapi.com/graphql' });


function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Rick and Morty App</title>
        <meta name='description' content='All about Rick and Morty series' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Stack as='main' minHeight='100vh' backgroundColor='gray.800'>
        <Stack
          as='header'
          paddingX={8}
          paddingY={8}
          backgroundColor='white'
          alignItems='center'
          justifyContent='center'
          position='relative'
        >
          <Text as='h1' fontSize='6xl' fontWeight='bold' position='absolute'>
            The Rick and Morty App
          </Text>
          <RickAndMorty width={420} />
        </Stack>

        <Stack as='section' alignItems='center' spacing={6} paddingY={20}>
          {children}
        </Stack>
      </Stack>
    </>
  );
}


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <UrlQlProvider value={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UrlQlProvider>
    </ChakraProvider>
  )
}

export default MyApp;
