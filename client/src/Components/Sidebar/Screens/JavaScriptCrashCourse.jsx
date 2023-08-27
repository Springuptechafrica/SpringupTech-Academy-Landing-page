import { Container, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../Sidebar';
export default function JavaScriptCrashCourse() {
  return (
    <Flex>
      <Sidebar />
      <Container maxW="container.lg" mt="15" background={'teal.100'}>
        <Heading>Java Script</Heading>
      </Container>
    </Flex>
  );
}
