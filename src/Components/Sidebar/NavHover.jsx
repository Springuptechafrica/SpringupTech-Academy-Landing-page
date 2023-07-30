import { Flex, Heading, Icon, Text } from '@chakra-ui/react'
import React from 'react'

export default function NavHoverBox({icon, title, description}) {
  return (
  <>
  <Flex 
  pos='absolute'
  mt='calc(100px - 7.5px)'
  ml='-10px'
  w={0}
  h={0}
  borderTop='10px solid transparent'
  borderBottom='10px solid transparent'
  borderRight='10px solid #82AAAD'
  />
  <Flex
  h={200}
  w={200}
 justify='center'
  flexDir='column'
  alignItems='center'
  backgroundColor='#82AAAD'
  borderRadius='10px'
  color='#fff'
  textAlign='center'
  >
<Icon as={icon} fontSize='3xl' mb={4} />
<Heading size='md' fontWeight='normal'>{title}</Heading>
<Text>{description}</Text>
  </Flex>
  </>
  )
}
