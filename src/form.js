import {
  Box,
  Container,
  Button,
  Checkbox,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Form() {
  return (
    <Container maxW="container.lg" mt={16} background={'teal.500'}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Box maxW="lg" borderRadius="lg" alignItems="center">
          <div
            style={{
              backgroundColor: 'teal.200',
            }}
          >
            <Text fontSize="4xl" as="kbd" align={'center'} mb={8}>
              <h1>Registration Form</h1>
            </Text>

            <FormLabel mb={2}>First Name</FormLabel>
            <Input placeholder="Enter First Name" mb={4} type="" />

            <FormLabel mb={2}>Last Name</FormLabel>
            <Input placeholder="Enter Last Name" mb={4} type="" />

            <FormLabel mb={2}>Email</FormLabel>
            <Input placeholder="Enter Email" mb={4} type="" />

            <FormLabel mb={2}>Phone number</FormLabel>
            <Input placeholder="Enter phone number" mb={4} number="" />

            <FormLabel mb={2}>Course</FormLabel>
            <Select mb={4} placeholder="Select Course">
              <option>Biology</option>
              <option>Chemistry</option>
              <option>Mathematics</option>
              <option>Physics</option>
              <option>Geography</option>
            </Select>

            <FormLabel mb={2}>State</FormLabel>
            <Select mb={4}>
              <option>Osun State</option>,<option>Ogun State</option>,{' '}
              <option>Oyo State</option>, <option>Kwara State</option>
              <option>Lagos State</option>, <option>Kano State</option>,{' '}
              <option>Kaduna State</option>,<option>Samfara State</option>
            </Select>

            <FormLabel mb={2}>Sex</FormLabel>

            <RadioGroup mb={4} defaultValue="2">
              <Stack spacing={5} direction="row">
                <Radio value="1">Male</Radio>
                <Radio value="2">Female</Radio>
              </Stack>
            </RadioGroup>

            <FormLabel mb={2}>Password</FormLabel>
            <Input placeholder="Enter Password" mb={4} type="" />

            <FormLabel mb={2}>Confirm password</FormLabel>
            <Input placeholder="Confirm password" mb={4} number="" />

            <Checkbox mb={4} colorScheme="blue" defaultChecked>
              <Button variant="link" colorScheme="red">
                {' '}
                I agree to terms and policy.
              </Button>
            </Checkbox>
            <div
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
              }}
            >
              <Link to="/">
                <Button mb={4}>Register</Button>
              </Link>
            </div>
          </div>
        </Box>
      </div>
    </Container>
  )
}
export default Form
