import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Image, Flex, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import Login from '../components/Login'
import Signup from '../components/Signup'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Leelo Colombia</title>
        <meta name="description" content="Leelo colombia, tu proximo libro a tu alcance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
       <Flex>
         <Box  width={['0', "65%"]} h="100vh">
            <Image src="/assets/images/cover.png" height="inherit"/>
         </Box>
         <Box width={["100%",  "35%"]} backgroundColor="white" overflowY="hidden">
           <Box my={6} textAlign="center">
             <Image src="/assets/images/Logo_Leelo.png" maxW="150px" m="auto"/>
           </Box>
           <Box p={4}> 
            <Tabs>
              <TabList>
                <Tab w="50%">Registro</Tab>
                <Tab w="50%">Login</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Signup/>
                </TabPanel>
                <TabPanel>
                  <Login/>
                </TabPanel>
              </TabPanels>
            </Tabs>
           </Box>
         </Box>
       </Flex>
      </main>

      <footer>
      </footer>
    </div>
  )
}

export default Home
