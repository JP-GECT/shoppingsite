import React from 'react';
import {Heading,Flex,Input,InputLeftAddon,InputGroup,InputRightElement,Text} from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'

export const Navbar = ()=>{
    return (
       <Flex bg="#fff" h="100px" align="center" justifyContent="space-around" p="6">
           <Heading color="green">jMART</Heading>
           <InputGroup size='sm' width='500px'>
    <InputLeftAddon children='search' background={'green'} color='white' mr={'2px'} borderRadius='10px'/>
    <Input focusBorderColor='pink' placeholder='wanna buy something' color="black" borderColor="green"   _placeholder={{ opacity: 0.5, color: 'gray.500' }}/>
    <InputRightElement borderColor="black" children={<SearchIcon color='green' />} />
  </InputGroup>
  <Flex>
    <Flex flexDirection={'column'} color='green'>
        <Text>no. of items:0</Text>
        <Text>sub total:0</Text>
    </Flex>
           <Heading>🛒</Heading>
    </Flex>
       </Flex>
    )
}