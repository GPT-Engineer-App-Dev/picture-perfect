import { Box, Container, VStack, Text, Heading, Image, Flex } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <VStack spacing={0} align="stretch">
        {/* Header */}
        <Box bg="blue.500" color="white" py={4} textAlign="center">
          <Heading as="h1" size="xl">PhotoShare</Heading>
        </Box>

        {/* Feed Section */}
        <Box flex="1" p={4}>
          <Heading as="h2" size="lg" mb={4}>Feed</Heading>
          <VStack spacing={4}>
            {/* Placeholder content */}
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" w="100%">
              <Image src="https://via.placeholder.com/800x400" alt="Placeholder Image" />
              <Box p={4}>
                <Text fontSize="md">This is a placeholder description for the photo.</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" w="100%">
              <Image src="https://via.placeholder.com/800x400" alt="Placeholder Image" />
              <Box p={4}>
                <Text fontSize="md">This is another placeholder description for the photo.</Text>
              </Box>
            </Box>
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