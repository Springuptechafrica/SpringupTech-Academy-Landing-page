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
  Toast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '', // Default value for female
    password: '',
    agreeToTerms: false,
  });
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: newValue }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { firstName, lastName, email, username, password } = formData;
    console.log(formData);
    try {
      const { formData } = await axios.post('/register', {
        firstName,
        lastName,
        email,
        username,
        password,
      });
      if (formData.error) {
        Toast.error(formData.error);
      } else {
        setFormData({});
        toast.success('Registration Successful, welcome');
      }
      navigate('/Dashboard');
    } catch (error) {
      console.error('An error occurred', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container maxW="container.lg" mt={16}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh',
          }}>
          <Box maxW="lg" borderRadius="lg" alignItems="center">
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


