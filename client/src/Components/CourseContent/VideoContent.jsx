import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

export default function VideoContent({ videoId }) {
  const handlePlayVideo = () => {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('width', '560');
    iframe.setAttribute('height', '315');
    iframe.setAttribute(
      'src',
      `https://www.youtube.com/watch?v=V1hefVGvcMo/${videoId}`
    );
    iframe.setAttribute('title', 'YouTube video player');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'autoplay; encrypted-media');
    document.getElementById('player-container').appendChild(iframe);
  };
  return (
    <Box bg="#82AAAD" borderRadius="10px" color="#fff" textAlign="center">
      <Box
        mt="calc(100px - 7.5px)"
        ml="-10px"
        w="0"
        h="0"
        borderTop="10px solid transparent"
        borderBottom="10px solid transparent"
        borderRight="10px solid #82AAAD"
      />
      <Heading size="md" fontWeight="normal">
        YouTube Player
      </Heading>
      <Text>Video ID: {videoId}</Text>
      <Box id="player-container" my={4} />
      <Button onClick={handlePlayVideo}>Play Video</Button>
    </Box>
  );
}
