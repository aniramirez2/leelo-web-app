import React from 'react';
import { Image, Flex, Avatar, Menu, MenuList, MenuItem, Text, Button } from '@chakra-ui/react'
import { useSession, signOut } from "next-auth/react"

const Header: React.FC = () => {
  const { data: session } = useSession();

  return (<Flex bgColor="facebook.600" p={4} justifyContent="space-between">
  <Menu>
     <Text colorScheme="whiteAlpha" color="white">{session?.user?.email}</Text>
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
   <Flex alignItems="center" cursor="pointer">
     <Button onClick={() => signOut} variant="ghost" _hover={{background: 'transparent'}}>
        <Avatar name={session?.user?.name || ''} src={session?.user?.image || 'https://www.gravatar.com/avatar/identicon'} />
      </Button>
   </Flex>
  </Flex>);
}

export default Header;