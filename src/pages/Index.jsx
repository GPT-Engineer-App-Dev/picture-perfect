import { Box, Container, VStack, Text, Heading, Image, Flex } from "@chakra-ui/react";
import PhotoUpload from '../components/PhotoUpload';

import { useState } from 'react';

const Index = () => {
  const [photos, setPhotos] = useState([]);

  const handleUpload = (acceptedFiles) => {
    const newPhotos = acceptedFiles.map(file => ({
      url: URL.createObjectURL(file),
      description: 'Newly uploaded photo'
    }));
    setPhotos(prevPhotos => [...prevPhotos, ...newPhotos]);
  };
  return (
    <Container maxW="container.xl" p={0}>
      <VStack spacing={0} align="stretch">
        {/* Header */}
        <Box bg="blue.500" color="white" py={4} textAlign="center">
          <Heading as="h1" size="xl">PhotoShare</Heading>
        </Box>

        <PhotoUpload onUpload={handleUpload} />

        {/* Feed Section */}
        <Box flex="1" p={4}>
          <Heading as="h2" size="lg" mb={4}>Feed</Heading>
          <VStack spacing={4}>
            {photos.map((photo, index) => (
              <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" w="100%">
                <Image src={photo.url} alt={`Uploaded photo ${index + 1}`} />
                <Box p={4}>
                  <Text fontSize="md">{photo.description}</Text>
                </Box>
              </Box>
            ))}
          </VStack>
        </Box>

        {/* Footer */}
        <Box bg="gray.200" color="gray.700" py={4} textAlign="center">
          <Text>&copy; 2023 PhotoShare. All rights reserved.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;