import { FaMoon, FaSun } from 'react-icons/fa';
import {
  Badge,
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Spacer,
  Text,
  VStack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import LandingPage from './common/LandingPage';
import axios from 'axios';
import { useState } from 'react';
function App() {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');

  
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.get("/")
    // try {
    //   const response = await axios.post('your_endpoint_url_here', formData);

    //   if (response.status === 200) {
    //     console.log('Form submitted successfully');
    //   } else {
    //     console.error('Form submission failed');
    //   }
    // } catch (error) {
    //   console.error('An error occurred', error);
    // }
  };
  return (
    // <LandingPage />
    <div>
      <Flex justifyContent="space-between" alignItems="center" mt={3}>
        <Spacer />
        <Container>
          <Box w-full>
            <Heading mb={3}>
              Learn React.js - Build Modern Web Applications
            </Heading>

            <Text fontSize="2sm">
              Whether you're a beginner or an experienced developer, our
              comprehensive courses and tutorials will guide you through the
              fundamentals of React.js and advanced concepts to create powerful
              front-end user interfaces.
            </Text>
            <Link to="/form">
              <Button size="lg" colorScheme="green" mt="24px">
                Create a free account
              </Button>
            </Link>
          </Box>
        </Container>
      </Flex>

      {/* Login Form */}

      <Flex alignItems="center" justifyContent="center">
        <Flex direction="column" background={formBackground} p={12} rounded={6}>
          <Heading mb={6}>Login</Heading>
          <form onSubmit={handleSubmit}>
            <Input
              name="username"
              placeholder="Enter Username"
              variant="filled"
              mb={3}
              type="email"
              value={formData.username}
              onChange={handleInputChange}
            />
            <Input
              name="password"
              placeholder="Enter Password"
              variant="filled"
              mb={6}
              type="password"
              value={formData.password}
              onChange={handleInputChange}
            />

            <Button type="submit" size="lg" colorScheme="teal" mb={9}>
              Login
            </Button>
          </form>

          <div>
            <HStack mb={6} w="full" justify="space-between" alignItems="center">
              <Checkbox>Remember me</Checkbox>
              <Spacer />
              <IconButton
                aria-label="toggle theme"
                rounded="full"
                size="xs"
                onClick={toggleColorMode}
                icon={useColorMode === 'dark' ? <FaSun /> : <FaMoon />}
              />
              <Button rounded="none" colorScheme="blue">
                Forgot Password
              </Button>
            </HStack>
          </div>
        </Flex>
      </Flex>
    </div>
  );
}

export default App;
