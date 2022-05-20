import {  Box ,Flex, Text } from '@chakra-ui/react'
import { SlidePage } from "../components/Slide"

export default function Home() {
   return (
    <Box>
         <SlidePage /> 
         <Box
            background="#141414"
            p="1em"
          >
            <Text as="h3">Sobre</Text>
            <Text as="p">
               Lorem Ipsum is simply dummy text of
               the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
               the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
             </Text>
         </Box>
         
      
          <Box
            background="#141414"
            p="1em"
          >
            <Text as="h3">Stacks</Text>
            <Box 
               h="80px"
               w="80%"
             >  
         
            </Box>
         </Box>

    </Box>
  )
}
