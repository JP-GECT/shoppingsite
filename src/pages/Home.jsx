import React from 'react'
import {Flex,SimpleGrid} from "@chakra-ui/react"
import {Navbar} from "../components/Navbar/Navbar"
import Cards from '../components/cards/cards'

const Names =[
  'joseph',
  'john',
  'ezbon',
  'aadesh',
  'vishak',
  'nikil',
  'nived',
  'ebin',
  'jithin'
]


export const Home = () => {
  return (
    <Flex flexDirection={'column'}>
   <Navbar/>
   <SimpleGrid columns={{lg:4,md:3,base:1}} spacingX='40px' spacingY='20px'paddingLeft={'150px'} paddingRight={'150px'}>
   {/*<Cards Name='HEllo world'/>
   <Cards Name='HEllo world'/>
   <Cards Name='HEllo world'/>
   <Cards Name='HEllo world'/>
   <Cards Name='HEllo world'/>
   <Cards Name='HEllo world'/>
   <Cards Name='HEllo world'/>
  <Cards Name='HEllo world'/>*/}
   {Names.map((item,index)=>{
    return(
      <Cards Name={item} key={index} />
    )
   })}
   </SimpleGrid>
   </Flex>
  )
}

