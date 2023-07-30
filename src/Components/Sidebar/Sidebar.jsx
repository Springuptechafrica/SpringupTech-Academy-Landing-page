import { Avatar, Divider, Flex, Heading, IconButton, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import {  FiMenu, FiHome, FiCalendar, FiUser, FiDollarSign, FiSettings } from 'react-icons/fi';
import NavItems from './NavItem';

export default function Sidebar() {
    const [navSize, changeNavSize ] = useState("large")
  return (
   <Flex
   pos='sticky'
   left='5 '
   h='95vh'
   marginTop='2.5vh'
   boxShadow='0 4PX 12px 0 rgba(0,0,0,0.05)'
   borderRadius={navSize == 'small' ? '15px' :- '30px'}
   w={navSize == 'small' ? '75px' : '200px'}
   flexDir='column'
   justifyContent='space-between'
   >
    <Flex
    p='5%'
    flexDir='column'
    alignItems='flex-start'
    as='nav'
    >
<IconButton
background='none'
mt='5'
_hover={{background:'none'}}
icon={<FiMenu />}
onClick={()=>{
    if (navSize === 'small')
    changeNavSize('large')
    else
    changeNavSize('small')
}}
/>
<NavItems navSize={navSize} icon={FiHome} title="Dashboard" description=''/>
<NavItems navSize={navSize} icon={FiCalendar} title="Calendar" active />
<NavItems navSize={navSize} icon={FiUser} title="Client" />
<NavItems navSize={navSize} icon={FiDollarSign} title="Balance" />
<NavItems navSize={navSize} icon={FiSettings} title="Settings" />

    </Flex>
    <Flex
    p='5%'
    flexDir='column'
    w='100%'
    alignItems={navSize == 'small' ? 'center' : 'flex-start'}
    mb='4'
    >
        <Divider display={navSize == 'small' ? 'none' : 'flex'} />
        <Flex mt={4} align='center'>
            <Avatar size='sm' src='../Components/picture.jpg' />
            <Flex flexDir='column' ml='4' display={navSize == 'small' ? 'none' : '200px'}>
                <Heading>Obaje Josiah</Heading>
                <Text>Admin</Text>
            </Flex>
        </Flex>

    </Flex>

   </Flex>
  )
}
