import { Flex, Text } from "@chakra-ui/react"
import { useState } from "react"

export function SlidePage(){
    const myBackground = ["black","white", "gray"]
    const [ Item, setItem] =  useState(0)

      function hadnleSetBackgroundImage(){
        if( Item > 1){
            setItem(0)
        }  else {
            setItem(Item + 1)
        }
      }

      setTimeout(()=> hadnleSetBackgroundImage(), 500000)

    return(
        <Flex
            flexDir="column"
            justify="center"
            align="space-around"
            bg={myBackground[Item]}
            mt="1em"
            mx="auto"
            px="1em"
            h="700px"
            w="80%"
            fontWeight="bold"
            color={myBackground[Item - 1]}
            border="1px solid"
            borderColor={myBackground[Item - 1]}
        >
            <Text mt="2em">Projetos</Text>

            <Text mt="2em">
                Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                galley of type and scrambled it to make a type specimen book.
            </Text>

            <Flex
                onClick={hadnleSetBackgroundImage}
            >
                Outra Página
            </Flex>
         </Flex>
    )
}
