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
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    sex: '2', // Default value for female
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: newValue }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('your_endpoint_url_here', formData);

      if (response.status === 200) {
        // Handle success
        console.log('Form submitted successfully');
      } else {
        // Handle errors
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container maxW="container.lg" mt={16} >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh',
          }}>
          <Box maxW="lg" borderRadius="lg" alignItems="center" >
            <div
              style={{
                backgroundColor: 'teal.200',
              }}>
              <Text fontSize="4xl" as="kbd" align={'center'} mt={10}>
                <h1>Sign Up</h1>
              </Text>

              <FormLabel mb={2}>First Name</FormLabel>
              <Input
                name="firstName"
                placeholder="Enter First Name"
                mb={4}
                type="text"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <FormLabel mb={2}>Last Name</FormLabel>
              <Input
                name="lastName"
                placeholder="Enter Last Name"
                mb={4}
                type="text"
                value={formData.lastName}
                onChange={handleInputChange}
              />
              <FormLabel mb={2}>Email</FormLabel>
              <Input
                name="email"
                placeholder="Enter Email"
                mb={4}
                type="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <FormLabel mb={2}>Username</FormLabel>
              <Input
                name="username"
                placeholder="Username"
                mb={4}
                type="text"
                value={formData.username}
                onChange={handleInputChange}
              />
              <FormLabel mb={2}>Password</FormLabel>
              <Input
                name="password"
                placeholder="Password"
                mb={4}
                type="password"
                value={formData.password}
                onChange={handleInputChange}
              />

              {/* Other input fields with onChange handlers */}

              <Checkbox
                name="agreeToTerms"
                mb={4}
                colorScheme="blue"
                defaultChecked={formData.agreeToTerms}
                onChange={handleInputChange}>
                <Button variant="link" colorScheme="red">
                  I agree to terms and policy.
                </Button>
              </Checkbox>
              <div
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                }}>
                <Button type="submit" mb={4}>
                  Register
                </Button>
              </div>
            </div>
          </Box>
        </div>
      </Container>
    </form>
  );
}

export default Form;


