import { Flex, Text } from "@chakra-ui/react"

export function SlidePage(){
    return(
        <Flex
            flexDir="column"
            justify="start"
            align="space-around"
            background="#000000"
            mt="1em"
            mx="auto"
            px="1em"
            h="700px"
            w="80%"
        >
            <Text mt="2em">Projetos</Text>

            <Text mt="2em">
                Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                galley of type and scrambled it to make a type specimen book.
            </Text>
         </Flex>
    )
}
