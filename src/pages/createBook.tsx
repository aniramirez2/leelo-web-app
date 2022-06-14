import type { NextPage } from 'next'
import Head from 'next/head'
import {  Box, Flex,  Heading,  } from '@chakra-ui/react'
import Header from '../components/Header'
import {useRouter} from 'next/router';
import { useSession } from 'next-auth/react'


const CreateBook: NextPage = (props: any) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if(status === 'unauthenticated') {
    router.push("/")
    return null;
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
            Hello Im a form
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

export default CreateBook;
