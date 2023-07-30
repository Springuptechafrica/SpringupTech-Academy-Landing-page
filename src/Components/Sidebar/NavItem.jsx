import { Flex, Icon, Link, Menu, MenuButton, MenuList, Text, background } from '@chakra-ui/react'
import React from 'react'
import NavHoverBox from './NavHover'


export default function NavItems({navSize, title, icon, active, description}) {
  return (
    <Flex
    mt={30}
    flexDir={'column'}
    alignItems={navSize === 'small' ? 'center' : 'flex-start'}
     >
        <Menu placement='right'>
            <Link
            backgroundColor={active && '#AECBCA'}
            p={3}
            borderRadius={8}
            _hover={{textDecor: 'none', backgroundColor: '#AEC8CA'}}
            w={navSize === 'large' && '100%'}
        
            >

            <MenuButton w='100%'>
                <Flex>
                    <Icon as={icon} fontSize='xl' color={active ? '#82AAAD' : 'gray.500'} />
                    <Text ml={5} display={navSize ===  'small' ? 'none' : 'flex'}>{title}</Text>
                </Flex>
            </MenuButton>
            </Link>
            <MenuList 
            py={0}
            border='none'
            w={200}
            h={200}
            ml={5}
            >
            
            <NavHoverBox title={title} icon={icon} description={description} />
            </MenuList>

        </Menu>

    </Flex>
  )
}
