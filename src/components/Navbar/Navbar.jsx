import React from 'react';
import {Heading,Flex,Input,InputLeftAddon,InputGroup,InputRightElement} from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'

export const Navbar = ()=>{
    return (
       <Flex bg="#2ee6e3" h="100px" align="center" justifyContent="space-between" p="6">
           <Heading color="white">jMART</Heading>
           <InputGroup size='sm' width='500px'>
    <InputLeftAddon children='search' />
    <Input focusBorderColor='pink' placeholder='wanna buy something' color="black" borderColor="white"   _placeholder={{ opacity: 0.5, color: 'gray.500' }}/>
    <InputRightElement borderColor="black" children={<SearchIcon color='white' />} />
  </InputGroup>
           <Heading></Heading>
       </Flex>
    )
}