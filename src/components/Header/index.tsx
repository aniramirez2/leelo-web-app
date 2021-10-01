import React from 'react';
import { Image, Box, Flex, Avatar, Menu, MenuButton, IconButton, MenuList, MenuItem, Text } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const Header: React.FC = () => {
  return (<Flex bgColor="facebook.600" p={4} justifyContent="space-between">
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
   <Flex alignItems="center">
     <Text color="white" mr={3}>Plan básico</Text>
    <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
   </Flex>
  </Flex>);
}

export default Header;