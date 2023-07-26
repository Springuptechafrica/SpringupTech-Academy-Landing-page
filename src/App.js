import { FaMoon, FaSun } from 'react-icons/fa'
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
} from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
function App() {
  const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue('gray.100', 'gray.700')

  return (
    <div>
      <Flex justifyContent="space-between" alignItems="center" mt={7}>
        <Container mb={3}>
          {/* Replace the <Heading> with <Image> */}
          <Image
            src="/logoMain.png"
            alt="Logo"
            maxW="18rem"
            width="300px"
            height="300px"
          />
        </Container>
        <Spacer />
        <Container>
          <Box maxW="32rem">
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
          <Input
            placeholder="Enter Username"
            variant="filled"
            mb={3}
            type="email"
          />
          <Input
            placeholder="Enter Password"
            variant="filled"
            mb={6}
            type="password"
          />

          <Link to="/registrationform">
            <Button size={'lg'} colorScheme="teal" mb={9}>
              Login
            </Button>
          </Link>

          <div>
            <HStack mb={6} w="full" justify="space-between" alignItems="center">
              <Checkbox>Remember me</Checkbox>
              {/* Add Spacer to create space between elements */}
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
  )
}

export default App

/* <div>
        <Box
          w={['full', 'md']}
          p={[8, 10]}
          mt={[20, '10vh']}
          mx="auto"
          border={['none', '1px']}
          bordercolor={['', 'grat.300']}
          birderRadius={10}
          position="relative"
        >
          <VStack spacing={4} align="flex-start" w="full">
            <Heading>Login</Heading>
            <Text>Enter your e-mail and password to login</Text>
          </VStack>
          <FormControl>
            <FormLabel>E-mail Adress</FormLabel>
            <InputGroup mb={6}>
              <InputLeftAddon children="+234" />
              <Input type="tel" placeholder="phone number" />
            </InputGroup>
            <Input
              rounded={'none'}
              placeholder="Enter USERNAME"
              variant={'filled'}
              type="email"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              rounded={'none'}
              placeholder="Enter Password"
              variant={'filled'}
            />
          </FormControl>
          <HStack w="full" justify={'space-between'}>
            <Checkbox>Remember me.</Checkbox>
            <Button variant="link" colorScheme="blue">
              Forget Password
            </Button>
          </HStack>
          <div>
            <Link to="/registrationform">
              <Button
                rounded={'none'}
                colorScheme="blue"
                w={['full', 'auto']}
                alignSelf={'end'}
              >
                Login
              </Button>
            </Link>
          </div>
          <IconButton
            aria-label="toggle theme"
            rounded="full"
            size="xs"
            position="absolute"
            bottom={4}
            left={4}
            onClick={toggleColorMode}
            icon={colorMode === 'dark' ? <FaSun /> : <FaMoon />}
          />
        </Box>
      </div> */
