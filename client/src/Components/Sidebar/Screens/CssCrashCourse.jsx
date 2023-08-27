import { Container, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../Sidebar';
import { ChakraProvider } from '@chakra-ui/react';

import VideoContent from '../../CourseContent/VideoContent';

export default function CssCrashCourse() {
  const videoId = 'VIDEO_ID'; // Replace with the YouTube video ID you want to display
  return (
    <Flex>
      <Sidebar />
      <Container maxW="container.lg" mt="15" background={'teal.100'}>
        <ChakraProvider>
          <Flex justify="center" align="center" h="100vh" bg="#f2f2f2">
            <VideoContent videoId={videoId} />
          </Flex>
        </ChakraProvider>
      </Container>
    </Flex>
  );
}
