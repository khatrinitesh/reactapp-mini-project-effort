import React from 'react';
import { Flex ,Box,Text,Heading,Button,Spacer,HStack} from '@chakra-ui/react';

export default function Navbar() {
  return (
    <Flex as="nav" p="10px" bg="gray.200" wrap='wrap' gap='10px' alignItems="center">
        <Heading as="h1">Task</Heading>
        <Spacer/>
        {/* <Box w="150px" h="50px" bg="red">1</Box>
        <Box w="150px" h="50px" bg="blue">2</Box>
        <Box w="150px" h="50px" flexGrow='1' bg="green">3</Box>
        <Box w="150px" h="50px"  flexGrow='2 'bg="yellow">4</Box> */}
        <HStack spacing="20px">
            <Box bg="gray.200" p="10px">N</Box>
            <Text>nitesh.khatri88@gmail.com</Text>
            <Button colorScheme="purple">Logout</Button>
        </HStack>
    </Flex>
  )
}
