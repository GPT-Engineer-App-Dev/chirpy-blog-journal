import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Divider, IconButton } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">My Blog</Heading>
        <HStack spacing={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">About</Link>
          <Link href="#" color="white">Contact</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex mt={8} direction={{ base: "column", md: "row" }}>
        {/* Blog Posts Section */}
        <Box flex="3" mr={{ md: 8 }}>
          <Heading as="h2" size="xl" mb={4}>Blog Posts</Heading>
          <VStack spacing={8} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Post Title 1</Heading>
              <Text mt={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Post Title 2</Heading>
              <Text mt={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Heading as="h2" size="lg" mb={4}>Recent Posts</Heading>
          <VStack spacing={4} align="stretch">
            <Link href="#">Recent Post 1</Link>
            <Link href="#">Recent Post 2</Link>
            <Link href="#">Recent Post 3</Link>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" mt={8} p={4}>
        <Flex justifyContent="center" alignItems="center">
          <HStack spacing={4}>
            <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
            <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} />
            <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} />
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;