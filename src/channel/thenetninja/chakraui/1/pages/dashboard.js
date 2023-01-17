import React from 'react';
import { Heading ,Text,Box,Container} from '@chakra-ui/react'

const basicBoxStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    boxSize: '250px',
    color: 'white',
    textShadow: '0 0 20px black',
    fontWeight: 'bold',
    fontSize: '20px',
    px: 4,
    background:
      'url(https://picsum.photos/id/1080/200/300) center/cover no-repeat',
  }

export default function Dashboard() {
  return (
    <div>
        <Container as="section" maxWidth="4xl">
        <Heading my="30px" p="10px"  as='h3' size='lg'>Chakra UI component</Heading>
        <Text marginTop="50px" ml="20px" color='orange'>1 Enim ipsum commodo anim enim aute proident cupidatat labore fugiat id.</Text>
        <Text ml="10px" color='blue.300'>2 Enim ipsum commodo anim enim aute proident cupidatat labore fugiat id.</Text>

        <Box bg='orange' sx={basicBoxStyles}>NItesh Khatri</Box>
        </Container>
    </div>
  )
}
