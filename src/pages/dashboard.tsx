import type { NextPage } from 'next'
import Head from 'next/head'
import { Image, Box, Flex, Avatar, Menu, MenuButton, IconButton, MenuList, MenuItem, Heading,  } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import BookCards from '../components/BookCards'



const Dashboard: NextPage = () => {
  
  return (
    <div >
      <Head>
        <title>Leelo Colombia</title>
        <meta name="description" content="Leelo colombia, tu proximo libro a tu alcance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
       <>
       <Flex bgColor="facebook.600" p={4} justifyContent="space-between">
       <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon color="white"/>}
            variant="gosth"
          />
          <Image src="/assets/images/Logo_Leelo.png" maxW="50px" m="auto"/>
          <MenuList>
            <MenuItem  command="⌘T">
              New Tab
            </MenuItem>
            <MenuItem command="⌘N">
              New Window
            </MenuItem>
            <MenuItem command="⌘⇧N">
              Open Closed Tab
            </MenuItem>
            <MenuItem command="⌘O">
              Open File...
            </MenuItem>
          </MenuList>
        </Menu>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
       </Flex>
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
            <BookCards/>
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

export default Dashboard
