import React from 'react';
import { Image, Flex, Avatar, Menu, MenuList, Text, MenuItem, Box, Button, MenuButton } from '@chakra-ui/react'
import { useSession, signOut } from "next-auth/react"

const Header: React.FC = () => {
  const { data: session } = useSession();

  return (<Flex bgColor="facebook.600" p={4} justifyContent="space-between">
  <Box>     
     <Image src="/assets/images/Logo_Leelo.png" maxW="50px" m="auto"/>     
   </Box>
   <Flex alignItems="center" cursor="pointer">
    <Text colorScheme="whiteAlpha" color="white">{session?.user?.email}</Text>
    <Menu>
        <MenuButton 
          as={Button} 
          variant="ghost" 
          _hover={{ bg: 'transparent' }}
          _expanded={{ bg: 'transparent' }}
          _focus={{ boxShadow: 'none' }} >
          <Avatar name={session?.user?.name || ''} src={session?.user?.image || 'https://www.gravatar.com/avatar/identicon'} />
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
          <MenuItem onClick={() => signOut}>Signout</MenuItem>
        </MenuList>
      </Menu>
   </Flex>
  </Flex>);
}

export default Header;