import type { NextPage } from 'next'
import Head from 'next/head'
import {  Box, Flex,  Heading,  } from '@chakra-ui/react'
import BookCards from '../components/BookCards'
import EventCards from '../components/EventCards'
import Header from '../components/Header'
import {useRouter} from 'next/router';
import { useSession } from 'next-auth/react'


const Dashboard: NextPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
 
  if(status === 'unauthenticated') {
    router.push("/")
  } else {

  return (
    <div >
      <Head>
        <title>Leelo Colombia</title>
        <meta name="description" content="Leelo colombia, tu proximo libro a tu alcance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
       <>
       <Header/>
       <Box p={6}>
        <Box>
          <Heading size="md" my={5}>Biblioteca</Heading>
          <Flex overflowX="scroll" my={2}>
            <BookCards />
          </Flex>
        </Box>
        <Box>
          <Heading size="md" my={5}>Eventos</Heading>
          <Flex overflowX="scroll" my={2}>
            <EventCards/>
          </Flex>
        </Box>
       </Box>
       </>
      </main>

      <footer>
      </footer>
    </div>
  )
  }
}

export default Dashboard
