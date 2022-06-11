import {  Box, Flex, Text } from '@chakra-ui/react'
import { SlidePage } from "../components/Slide"

export default function Home() {
   return (
    <Flex
      flexDirection="column"
      justify="space-around"
      align="strat"
    >
         <SlidePage /> 
         
         <Box
            background="#141414"
            p="1%"
            mt="3em"
            w="80%"
          >
            <Text as="h2">Sobre</Text>
            <Text as="p">
               Lorem Ipsum is simply dummy text of
               the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
               the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
             </Text>
         </Box>
         
          <Box
            background="#141414"
            p="1%"
            w="80%"
            mt="3em"
            ml="18%"
          >
            <Text as="h2">Stacks</Text>
            <Text as="p">
               Lorem Ipsum is simply dummy text of
               the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
               the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
             </Text>
         </Box>

         <Box
            background="#141414"
            p="1%"
            w="80%"
            mt="3em"
>
            <Text as="h2">Stacks</Text>
            <Text as="p">
               Lorem Ipsum is simply dummy text of
               the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
               the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
             </Text>
         </Box>

        <Flex
          w="100%"
          justify="space-around"
          align="center"
          mt="3em"
          py="1em"
        >
          <Flex
            justify="space-around"
            align="center"
            w="30%"
            p="1em"
            border="1px solid gray"
            background="#141414"
            fontWeight="bold"
            borderRadius="16px"

            _hover={{
              cursor: "pointer",
              opacity: "0.7"
            }}
          > 
            Projetos
          </Flex>
          
          <Flex
            justify="space-around"
            align="center"
            w="30%"
            p="1em"
            border="1px solid gray"
            background="#141414"
            fontWeight="bold"
            borderRadius="16px"
          
            _hover={{
              cursor: "pointer",
              opacity: "0.7"
            }}
          > 
            Linkedin
          </Flex>
        </Flex>

    </Flex>
  )
}
