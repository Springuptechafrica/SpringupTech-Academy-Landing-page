import { Container, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../Sidebar';

export default function Settings() {
  return (
    <Flex>
      <Sidebar />
      <Container maxW="container.lg" mt="15" background={'teal.100'}>
        <Heading>Settings</Heading>
      </Container>
    </Flex>
  );
}
