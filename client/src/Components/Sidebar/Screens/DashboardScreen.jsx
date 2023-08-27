import { Container, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../Sidebar';

function Dashboard() {
  return (
    <Flex>
      <Sidebar />
      <Container maxW="container.lg" mt="15" background={'teal.100'}>
        <Heading>Dashboard Screen</Heading>
      </Container>
    </Flex>
  );
}
export default Dashboard;
