import { Box, Container, FormLabel, Input, Text } from '@chakra-ui/react'

function Registrationform() {
  return (
    <Container maxW="container.lg" mt={16} background={'teal.100'}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        {' '}
        <Box maxW="lg" borderWidth="5px" alignItems="center">
          {' '}
          <div>
            {' '}
            <Text fontSize="4xl" as="kbd" align={'center'} mb={8}>
              {' '}
              <h1>Registration Form</h1>{' '}
            </Text>{' '}
          </div>{' '}
        </Box>{' '}
      </div>
    </Container>
  )
}

export default Registrationform
